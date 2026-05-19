import express, { Router } from "express";

import estudantes from "./dados.js";
import criarDados from "./criar.js";
import deletarEstudante from "./deletar.js";

const router = express();
const port = 8765;

router.use(express.json());

 // -- ENTRADA -- //
router.get(("/"), (req, res) => {
    res.status(200).send("Bem-vindo à API de Estudantes!");
});
 //_______________//

 // -- LISTAR -- //
router.get("/estudantes/listar", (req, res) => {
    res.json(estudantes);
});
 //______________//


 // -- CRIAR -- //
router.post("/estudantes/criar", (req, res) => {
    const {nome, matricula, curso, ano} =  req.body;

    if (!nome || !matricula || !curso || !ano) {
        return res.status(400).json({error: "Todos os campos são obrigatórios"});
    };

const novosDados = {
    nome,
    matricula,
    curso,
    ano
}

    const resultado = criarDados(estudantes, novosDados);

    if(!resultado) {
        return res.status(500).json({message: "Erro ao criar o Estudante"});
    }

    res.status(201).send({message: "Estudante criado com sucesso !"});
});
 //_____________//

 // -- DELETAR -- //

router.delete("/estudantes/deletar/:id", (req, res) => {
    const { idEst } = req.body;

    if (!idEst) {
        return res.status(400).json({ error: "ID do Estudante é obrigatório" });
    }

    const resultado = deletarEstudante(estudantes, idEst);

    if (!resultado) {
        return res.status(404).json({ error: "Estudante não encontrado" });
    }

    res.status(200).json({ message: "Estudante deletado com sucesso!" });
});

 //_______________//

 // -- ATUALIZAR -- //

router.put("/estudantes/atualizar/:id", (req, res) => {
    const { idEst, curso, ano } = req.body;

    if (!idEst || !curso || !ano) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    const estudante = estudantes.find(estudante => estudante.id === idEst);

    if (!estudante) {
        return res.status(404).json({ error: "Estudante não encontrado" });
    }

    estudante.curso = curso;
    estudante.ano = ano;

    res.status(200).json({ message: "Estudante atualizado com sucesso!" });
});

 // -- BUSCAR -- //
router.get("/estudantes/buscar?nome=Robertin", (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.status(400).json({ error: "Nome do Estudante é obrigatório" });
    }

    const estudante = estudantes.find(estudante => estudante.nome.toLowerCase() === nome.toLowerCase());

    if (!estudante) {
        return res.status(404).json({ error: "Estudante não encontrado" });
    }

    res.status(200).json(estudante);
});

router.get("/estudantes/buscar=curso", (req, res) => {
    const { curso } = req.query;

    if(!curso) {
        return res.status(400).json({error: "Curso do Estudante é obrigatório"});
    };

    const estudante = estudantes.filter(estudante => estudante.curso.toLowerCase() === curso.toLowerCase());

    if(!estudante || estudante.length === 0) {
        return res.status(404).json({error: "Nenhum estudante encontrado para o curso especificado"});
    };

    res.status(200).json(estudante);
});

 //______________//
 // -- INICIAR SERVIDOR -- //
router.listen((port), () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

 //_________________________//