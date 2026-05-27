import express, { Router } from "express";

import Baralho from "./dadosBaralhos.js";
import flashcards from "./dadosFlashcards.js";

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI); 

const router = express();
const port = 3108;

router.use(express.json());

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
    }
});

//______________//
router.listen((port), () => {
    console.log("O servidor está aberto com sucesso na porta:", 3108);
});

