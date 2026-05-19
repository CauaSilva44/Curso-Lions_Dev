import express from "express";

import baralhos from "./Projeto_Baralho-Flash/Baralhos/dadosBaralhos.js";
import adicionarBaralho from "./Projeto_Baralho-Flash/Baralhos/adicionarBaralho.js";
import adicionarFlashcard from "./Projeto_Baralho-Flash/Flashcards/adicionarFlashcard.js";
import flashcards from "./Projeto_Baralho-Flash/Flashcards/dadosFlashcards.js";





const app = express()
const port = 3000;

app.use(express.json());

app.get(("/baralhos"), (req, res) => {
    res.json(baralhos)
})

app.get(("/flashcards"), (req, res) => {
    res.json(flashcards);
});

app.post("/baralhos", (req, res) => {

    const titulo = req.body.titulo;
    const resultado = adicionarBaralho(titulo);
    const data = titulo.data;
    const error = titulo.error;


    app.get(("/flashcards"), (req, res) => {
        res.json(flashcards);
    });

})

app.post("/flashcards", (req, res) =>
{
   const {pergunta, resposta, idBaralho} = req.body

    const novoFlashcard = {
        pergunta, 
        resposta,
        idBaralho
    };

    const resultado = adicionarFlashcard(novoFlashcard, flashcards, baralhos);

    if(!resultado) {
        return res.status(400).send({mensagem: "Não foi possível adicionar o Flashcard. "});
    }

    res.status(201).send({mensagem: "Flashcard adicionado com sucesso! "});
});





app.listen((port), () => {
    console.log(`Exemplo das funções rodando na porta: ${port}`)
});

