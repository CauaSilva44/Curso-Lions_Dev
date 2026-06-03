import express, { Router } from "express";

import Agendamento from "./agendamento.js";

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const router = express();
const port = 3108;

router.use(express.json());

// -- Entrada -- //

router.get("/"), (req, res) => {
    res.status(200).send("Bem-vindo à API de Agendamento do PetShop!"); 
};

//_______________//

// -- CREATE -- //

router.post("/agendamentos", async (req, res) => {
    try {
        const agendamento = await Agendamento.create(req.body);

        return res.status(201).json({
            message: "Agendamento criado com sucesso!",
            agendamento,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao criar agendamento",
            error: error.message,
        });
    };
});

//______________//

// -- READ -- //

router.get("/agendamentos", async (req, res) => {
    try {
        const agendamento = await Agendamento.find();

        return res.status(200).json({
            message: "Agendamento encontrado com sucesso!",
            agendamento,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao encontrar agendamento",
            error: error.message,
        });
    };
});

    router.get("/agendamentos/busca", async (req, res) => {
        try {
            const agendamento = await Agendamento.find({ nomePet: req.query.nomePet });

            return res.status(200).json({
                message: "Agendamento encontrado com sucesso!",
                agendamento,
            });
        } catch (error) {
            return res.status(400).json({
            message: "Erro ao encontrar agendamento",
            error: error.message,
        });
    };
});


//____________//

// -- UPDATE -- //

router.put("/agendamentos/:id", async (req, res) => {
    try {
        const agendamento = await Agendamento.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.status(200).json({
            "status": "Concluído"
        });
    } catch (error) {
        return res.status(404).json({
            message: "Agendamento não encontrado",
            error: error.message,
        });
    };
});

//______________//

// -- DELETE -- //

router.delete("/agendamentos/:id", async (req, res) => {
    try {
        await Agendamento.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "Agendamento deletado com sucesso!",
        });
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao deletar agendamento",
            error: error.message,
        });
    };
});

//______________//

// -- Servidor Iniciado -- //

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//_________________________//