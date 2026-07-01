import express from "express";
import dotenv from "dotenv";
import material from "./models/material.js";
import Emprestimo from "./models/emprestimo.js";
import conectarDB from "./db.js";

dotenv.config({path: "../.env"});
const app = express();
const port = process.env.PORT;

conectarDB();

app.use(express.json());

// -- Entrada -- //

app.get(("/"), (req, res) => {
    res.json({message: "Bem-vindo à API de pedidos da Cantina!"}); 
});

//_______________//

// -- MATERIAIS -- //

// -- Cadastrar Materiais -- //

app.post("/materiais", async (req, res) => {
    try {
        const {titulo, tipo, autor, estoque} = req.body;

        const novoMaterial = new material({
            titulo,
            tipo,
            autor,
            estoque,
        });

        await novoMaterial.save();
        res.status(201).json(novoMaterial);
    } catch (error) {
        res.status(400).json({message: error.message});
    };
});

// -- Listar Materiais -- //

app.get("/materiais", async (req, res) => {
    try {
        const materiais = await material.find();
        if (materiais.length === 0) {
            res.status(404).json({message: "Nenhum material encontrado."});
        } else {
            res.status(200).json(materiais)
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

// -- Listar por Material Disponivel -- //

app.get("/materiais/disponiveis", async (req, res) => {
    try {
        const materiaisDisponiveis = await material.find({estoque: {$gt: 0}});
        if (materiaisDisponiveis.length === 0) {
            res.status(404).json({message: "Nenhum material disponível encontrado."});
        } else {
            res.status(200).json(materiaisDisponiveis);
        };
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

//__________________________________________________________//

// -- EMPRÉSTIMOS -- //

app.post("/emprestimos", async (req, res) => {
    try {
        const {materialID, nomeAluno, turma, dataEmprestimo, diasEmprestimo} = req.body;

        const materialExistente = await material.findById(materialID);
        if (!materialExistente) {
            return res.status(404).json({message: "Material não encontrado."});
        };

        if (materialExistente.estoque <= 0) {
            return res.status(400).json({message: "Material sem exemplares disponíveis."});
        };

        const novoEmprestimo = new Emprestimo({
            materialID,
            nomeAluno,
            turma,
            dataEmprestimo,
            diasEmprestimo,
        });

        await novoEmprestimo.save();

        materialExistente.estoque -= 1;
        await materialExistente.save();

        if (diasEmprestimo > 7) {
            novoEmprestimo.multaPrevista = (diasEmprestimo - 7) * 2;
            await novoEmprestimo.save();
        };

        res.status(201).json(novoEmprestimo);
    } catch (error) {
        res.status(400).json({message: error.message});
    };
});

// -- Listar Empréstimos -- //

app.get("/emprestimos", async (req, res) => {
    try {
        const emprestimos = await Emprestimo.find().populate("materialID", "titulo");
        if (emprestimos.length === 0) {
            res.status(404).json({message: "Nenhum empréstimo encontrado"});
        } else {
            res.status(200).json(emprestimos);
        };
    } catch {
        res.status(500),json({message: error.message})
    };
});

// -- Buscar Empréstimo por Aluno -- //

app.get("/emprestimos/busca", async (req, res) => {
    try {
        const {nomeAluno} = req.query;

        const emprestimos = await Emprestimo.find({nomeAluno: {$regex: nomeAluno, $options: "i"}}).populate("materialID", "titulo");

        if (emprestimos.length === 0) {
            res.status(404).json({message: "Nenhum empréstimo encontrado para o aluno informado."});
        } else {
            res.status(200).json(emprestimos);
        };
    } catch {required: [true, "O tipo do material é obrigatório."],
        res.status(500).json({message: error.message});
    }
});

// -- Devolução do Material -- //

app.patch("/emprestimos/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const emprestimo = await Emprestimo.findById(id);
        if (!emprestimo) {
            return res.status(404).json({message: "Empréstimo não encontrado."});
        };

        if (emprestimo.status === "Devolvido") {
            return res.status(400).json({message: "Este empréstimo já foi devolvido."});
        };

        emprestimo.status = "Devolvido";
        await emprestimo.save();

        const materialCorrespondente = await material.findById(emprestimo.materialID);
        if (materialCorrespondente) {
            materialCorrespondente.estoque += 1;
            await materialCorrespondente.save();
        };

        res.status(200).json({message: "Material devolvido com sucesso!", emprestimo});
    } catch (error) {
        res.status(400).json({message: error.message});
    };
});

// -- Remover Empréstimo -- //

app.delete("/emprestimos/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const emprestimo = await Emprestimo.findById(id);
        if (!emprestimo) {
            return res.status(404).json({message: "Empréstimo não encontrado."});
        };

        if (emprestimo.status === "Emprestado") {
            const materialCorrespondente = await material.findById(emprestimo.materialID);
            if (materialCorrespondente) {
                materialCorrespondente.estoque += 1;
                await materialCorrespondente.save();
            };
        };

        await Emprestimo.findByIdAndDelete(id);

        res.status(200).json({message: "Empréstimo removido com sucesso!"});
    } catch (error) {
        res.status(400).json({message: error.message});
    };
});

// -- Relatorio -- //

app.get("/emprestimos/relatorio", async (req, res) => {
    try {
        const totalEmprestimos = await Emprestimo.countDocuments();
        const somaMultasPrevistas = await Emprestimo.aggregate([
            { $group: { _id: null, totalMultas: { $sum: "$multaPrevista" } } }
        ]);
        const contagemStatus = await Emprestimo.aggregate([
            { $group: { _id: "$status", count: { $sum: 1 } } }
        ]);

        res.status(200).json({
            totalEmprestimos,
            somaMultasPrevistas: somaMultasPrevistas[0] ? somaMultasPrevistas[0].totalMultas : 0,
            contagemStatus
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

// -- Servidor Rodando -- //

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//________________________//