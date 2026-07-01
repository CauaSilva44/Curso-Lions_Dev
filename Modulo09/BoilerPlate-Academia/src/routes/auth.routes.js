import { Router } from "express";

import AuthController from "../controllers/auth.controller.js";

import validarCampos from "../middleware/validarCampos.middleware.js";

const router = Router();

router.post("/Api/Academia/Cadastro", validarCampos.validarCadastro, AuthController.cadastrar);

router.post("/Api/Academia/Login", validarCampos.validarLogin, AuthController.login);

export default router;