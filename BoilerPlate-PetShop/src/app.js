import express from "express";
import agendamentoRoutes from "./routes/agendamento.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({ mensagem: "API do Petshop está no ar!" });
});

app.use(agendamentoRoutes);

export default app;