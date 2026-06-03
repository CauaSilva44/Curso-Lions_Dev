import express, { Router } from "express";

import Baralho from "./dadosBaralhos.js";
import Flashcards from "./dadosFlashcards.js";

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI); 

const router = express();
const port = 3108;

router.use(express.json());

// -- Entrada -- //

router.get(("/"), (req, res) => {
    res.status(200).send("Bem-vindo à Api/MongoDB de Flashcards e Baralhos!");
});

//_______________//

// -- CREATE -- //

router.post("/baralhos", async (req, res) => {
    try {

        const baralho = await Baralho.create(req.body);
        
        return res.status(201).json({
            message: "Baralho criado com sucesso!",
            baralho,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao criar baralho",
            error:error.message,
        });
    };

});

router.post("/flashcards", async (req, res) => {
    try {

        const flashcard = await Flashcards.create(req.body);
        
        return res.status(201).json({
            message: "Flashcard criado com sucesso!",
            flashcard,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao criar flashcard",
            error:error.message,
        });
    };

});
//______________//

// -- READ -- //

router.get("/baralhos", async (req, res) => {
    try {
        const baralhos = await Baralho.find();
        return res.status(200).json(baralhos);
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao listar baralhos",
            error:error.message,
        });
    };
});

router.get("/flashcards", async (req, res) => {
    try {
        const flashcards = await Flashcards.find();
        return res.status(200).json(flashcards);
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao listar flashcards",
            error:error.message,
        });
    };
});

//____________//

// -- UPDATE -- //

router.put("/baralhos/:id", async (req, res) => {
    try {
        const baralhos = await Baralho.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(baralhos);
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao atualizar baralho",
            error:error.message,
        });
    };
});

router.put("/flashcards/:id", async (req, res) => {
    try{
        const flashcards = await Flashcards.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(flashcards);
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao atualizar flashcard",
            error:error.message,
        });
    };
});

//________________//

// -- DELETE -- //

router.delete("/baralhos/:id", async (req, res) => {
    try {
        const baralhos = await Baralho.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Baralho deletado com sucesso!" });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao deletar baralho",
            error:error.message,
        });
    };
});

router.delete("/flashcards/:id", async (req, res) => {
    try {
        const flashcards = await Flashcards.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Baralho deletado com sucesso!" });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao deletar o Flashcard",
            error:error.message,
        });
    };
});

//______________//

// -- Servidor Iniciado -- //

router.listen((port), () => {
    console.log("O servidor está aberto com sucesso na porta:", 3108);
});

//_________________________//