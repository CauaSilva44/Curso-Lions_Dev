import { Router } from "express";

import AgendamentoController from "../controllers/agendamentos.controllers.js";

const router = Router();

// -- CREATE -- //

router.post("/Api/agendamento/cadastrarAgendamentos", AgendamentoController.cadastrar);

// -- READ -- //

router.get("/Api/agendamento/listarAgendamentos", AgendamentoController.listar);

// -- UPDATE -- //

router.patch("/Api/agendamento/atualizarAgendamento/:id", AgendamentoController.atualizar);

export default router;