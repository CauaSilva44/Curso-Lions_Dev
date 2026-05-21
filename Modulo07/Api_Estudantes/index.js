import express, { Router } from "express";

import estudantes from "./dados.js";
import criarDados from "./criar.js";

const router = express();
const port = 8765;

router.use(express.json());

let id = 0;

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
    const { id } = parseInt(req.params);

    const index = estudantes.findIndex(estudantes => estudantes.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Estudante não encontrado" });
    };

    estudantes.splice(index, 1);

    res.status(201).json({ message: "Estudante exterminado com sucesso!" });

});

 //_______________//

 // -- ATUALIZAR -- //

router.put("/estudantes/atualizar/:id", (req, res) => {
    const { nome, matricula, curso, ano } = req.body;
    const id = parseInt(req.params.id);

    const index = estudantes.findIndex(estudante => estudante.id === id);

    if (index === -1) {
        res.status(404).json({ error: "Estudante não encontrado" });
    };

    estudantes[index].nome = nome || estudantes[index].nome;
    estudantes[index].matricula = matricula || estudantes[index].matricula;
    estudantes[index].curso = curso || estudantes[index].curso;
    estudantes[index].ano = ano || estudantes[index].ano;

    res.status(200).json({ message: "Estudante atualizado com sucesso!" });
});

 // -- BUSCAR POR NOME -- //

router.get("/estudantes/busca", (req, res) => {   
    const { nome, matricula, curso} = req.query;

    if (nome) {                           
        const resultadoBusca = estudantes.filter((estudante) => estudante.nome.toLowerCase().includes(nome.toLowerCase()));
        return res.status(200).json({message: "Busca realizada com sucesso!", estudantesEncontrados:resultadoBusca});
    };

    if(matricula) {
        const resultadoBusca = estudantes.filter((estudante) => estudante.matricula.toLowerCase().includes(matricula.toLowerCase()));
        return res.status(200).json({message: "Busca realizada com sucesso!", estudantesEncontrados:resultadoBusca});
    };

    if(curso) {
        const resultadoBusca = estudantes.filter((estudante) => estudante.curso.toLowerCase().includes(curso.toLowerCase()));
        return res.status(200).json({message: "Busca realizada com sucesso!", estudantesEncontrados:resultadoBusca});
    };

    res.status(400).json({error: "O termo de busca é obrigatório"});

});


 //______________//
 // -- INICIAR SERVIDOR -- //
router.listen((port), () => {
    console.log(`Servidor rodando na porta: ${port}`);
});

 //_________________________//