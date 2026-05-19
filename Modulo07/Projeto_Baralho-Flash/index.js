import express from "express";

// === IMPORTS DO BARALHO === //
import baralhos from "./Baralhos/dadosBaralhos.js";
import listarPorBaralho from "./Baralhos/listarPorBaralho.js";
import adicionarBaralho from "./Baralhos/adicionarBaralho.js";
import removerBaralho from "./Baralhos/deletarBaralho.js";
import atualizarBaralho from "./Baralhos/atualizarBaralho.js"



// === IMPORTS DO FLASHCARD === //
import flashcards from "./Flashcards/dadosFlashcards.js";
import adicionarFlashcard from "./Flashcards/adicionarFlashcard.js";
import removerFlashcard from "./Flashcards/deletarFlashcard.js";
import atualizarFlashcard from "./Flashcards/atualizarFlashcard.js";


const app = express();
const port = 3000;
const router =  express.Router()

app.use(express.json ())

// -- LISTAR BARALHOS -- //

app.get(("/baralhos"), (req, res) => {
    res.json(baralhos);
});
//________________________//

// -- LISTAR FLASHCARDS -- //

app.get(("/flashcards"), (req, res) => {
    res.json(flashcards);
});
//_________________________//

// -- LISTAR POR BARALHOS -- //

app.get(("/listarBaralhos"), (req, res) => {
    const id = req.body;

    if(!id) {
        return res.status(400).send("ID do Baralho é obrigatório!");
    }

    const resultado = listarPorBaralho(baralhos, flashcards, id);

    if(!resultado) {
        return res.status(404).send("Baralho não encontrado.");
    }

    res.status(200).json(resultado);
})
//_________________________//

// -- ADICIONAR_BARALHO -- //

app.post(("/baralhos"), (req, res) => 
{
    const titulo = req.body;

    if(!titulo) {
        return res.status(400).send({Error:"Titulo Obrigatório"});
        
    };

    const novoBaralho = {
        titulo: req.body.titulo
    };

    const resultado = adicionarBaralho(novoBaralho, baralhos);
    if(!resultado) {
        return res.status(400).send({mensagem: "Não foi possível adicionar o Baralho."});
    };

    res.status(201).send("Baralho criado!");
});
// __________________________//

// -- ADICIONAR FLASHCARD -- //

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
        return res.status(400).send({Error: "Não foi possível adicionar o Flashcard. "});
    }

    res.status(201).send({mensagem: "Flashcard adicionado com sucesso! "});
});

//_______________________//

// -- REMOVER BARALHO -- //

app.delete("/baralhos", (req, res) =>
{
    const { idBar } = req.body;

    if(!idBar) {
        return res.status(404).send("ID do Baralho não foi encontrado.")
    };

    const resultado = removerBaralho(baralhos, idBar);

    if(!resultado) {
        return res.status(400).send({mensagem: "Não foi possível excluir o Baralho."});
    };

    res.status(200).send({mensagem: "Baralho removido com sucesso!"});

    
});

//_________________________//
    
// -- REMOVER FLASHCARD -- //

app.delete("/flashcards", (req, res) =>
{
    const {idFlas} = req.body;

    if(!idFlas) {
        return res.status(400).send("ID do Flashcard não foi encontrado.");
    };

    const resultado = removerFlashcard(flashcards, idFlas);

    if(!resultado) {
        return res.status(400).send({mensagem: "Não foi possível prosseguir com a exclusão do Flashcard."});
    };

    res.status(200).send({mensagem: "Flashcard removido com sucesso!"});
});

//_________________________//

// -- ATUALIZAR BARALHO -- //
app.put("/baralhos", (req, res) =>
{
    const {titulo, idBar} = req.body;

    const BaralhoAtuali = {
        titulo, 
        idBar
    }

    const resultado = atualizarBaralho(baralhos, BaralhoAtuali);

    if(!resultado) {
        return res.status(400).send({mensagem: "Não foi possivel atualizar o Baralho."});
    };
    
    res.status(201).send({mensagem: "Baralho Atualizado!"})
});

//_________________________//

// -- ATUALIZAR FLASHCARD -- //

app.put("/flashcards", (req, res) =>
{
    const {pergunta, resposta, idFlas} = req.body;

    const FlashcardAtuali = {
        pergunta, 
        resposta,
        idFlas
    }

    const resultado = atualizarFlashcard(flashcards, FlashcardAtuali);

    if(!resultado) {
        return res.status(400).send({mensagem: "Não foi possível atualizar o Flashcard."});
    };

    res.status(201).send({mensagem: "Flashcard atualizado com sucesso!"});
});

//_________________________//

app.listen((port), () => {
    console.log("O servidor está aberto com sucesso na porta:", 3000);
});


