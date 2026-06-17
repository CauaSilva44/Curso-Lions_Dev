import express from "express";
import dotenv from "dotenv"
import matricula from "./models/matricula.js";
import conectarDB from "./db.js";

dotenv.config({path: "../.env"});
const app = express();
const port = process.env.PORT;

conectarDB();

app.use(express.json());

// -- Entrada -- //

app.get(("/"), (req, res) => {
    res.json({message: "Bem-vindo à API de matrículas da Academia!"}); 
});

// -- CREATE --//

app.post("/matriculas", async (req, res) => {
    try {
        const {nomeAluno, idade, modalidade, plano, dataMatricula} = req.body;

        let valorMensal = 0;
        switch (modalidade) {
            case "Musculação":
                valorMensal = 90;
                break;
            case "Funcional": 
                valorMensal = 120;
                break;
            case "Dança": 
                valorMensal = 100;
                break;
            default:
                return res.status(400).json({message: "Modalidade inválida!"});
        };

        let valorTotal = 0;
        switch (plano) {
            case "Mensal":
                valorTotal = valorMensal;
                break;
            case "Trimestral": 
                valorTotal = valorMensal * 3 * 0.9;
                break;
            case "Semestral": 
                valorTotal = valorMensal * 6 * 0.85;
                break;
            default:
                return res.status(400).json({message: "Plano inválido!"});
        };

        const novaMatricula = new matricula({
            nomeAluno,
            idade,
            modalidade,
            plano,
            dataMatricula,
            valorMensal,
            valorTotal,
        });

        await novaMatricula.save();

        res.status(201).json({message: "Matrícula criada com sucesso!", matricula: novaMatricula});
    } catch {
        res.status(400).json({message: "Erro ao criar a matrícula.", error: error.message});
    }
});

//__________________________________________________//

// -- READ -- //

app.get("/matriculas", async (req, res) => {
    try {
        const matriculas = await matricula.find();
        if (matriculas.length === 0) {
            res.status(404).json({message: "Nenhuma matrícula encontrada"});
        } else {
            res.status(200).json(matriculas);
        };
     } catch {
        res.status(500).json({message: "Erro ao buscar as matrículas.", error: error.message});
     }
});

// -- Buscar por Modalidade -- //

app.get("/matriculas/busca", async (req, res) => {
    try {
        const {modalidade} = req.query;
        const matriculas = await matricula.find({modalidade});
        if (matriculas.length === 0) {
            res.status(404).json({message: "Nenhuma matrícula encontrada para a modalidade informada."});
        } else {
            res.status(200).json(matriculas);
        };
    } catch {
        res.status(500).json({message: "Erro ao buscar as matrículas.", error: error.message});
    };
});

//__________________________//

// -- UPDATE -- //

app.patch("/matriculas/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {status} = req.body;

        if (!["Ativa", "Pausada", "Cancelada"].includes(status)) {
            return res.status(400).json({message: "Status inválido!"});
        };

        const matriculaAtualizada = await matricula.findByIdAndUpdate(id, {status}, {new: true});

        if (!matriculaAtualizada) {
            return res.status(404).json({message: "Matrícula não encontrada."});
        };

        res.status(200).json({message: "Status da matrícula atualizado com sucesso!", matricula: matriculaAtualizada});
    } catch {
        res.status(400).json({message: "Erro ao atualizar o status da matrícula.", error: error.message});
    };
});

//______________//

// -- DELETE -- //

app.delete("/matriculas/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const matriculaRemovida = await matricula.findByIdAndDelete(id);

        if (!matriculaRemovida) {
            return res.status(404).json({message: "Matrícula não encontrada."});
        };

        res.status(200).json({message: "Matrícula removida com sucesso!", matricula: matriculaRemovida});
    } catch {
        res.status(400).json({message: "Erro ao remover a matrícula.", error: error.message});
    };
});

//______________//

// -- Servidor Rodando -- //

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//________________________//