import mongoose from "mongoose";

const matriculaSchema = new mongoose.Schema({
    nomeAluno: {
        type: String,
        required: [true, "O nome do aluno é obrigatório."],
    },
    idade: {
        type: Number,
        required: [true, "A idade do aluno é obrigatória."],
    },
    modalidade: {
        type: String,
        required: [true, "O tipo da modalidade é obrigatório."],
        enum: {
            values: ["Musculação", "Funcional", "Dança"],
            message: "O tipo da modalidade deve ser Musculação, Funcional ou Dança.",
        },
    },
    plano: {
        type: String,
        required: [true, "O tipo do plano é obrigatório."],
        enum: {
            values: ["Mensal", "Trimestral", "Semestral"],
            message: "O tipo do plano deve ser Mensal, Trimestral ou Semestral.",
        },
    },
    dataMatricula: {
        type: String,
        required: [true, "A data da matrícula é obrigatória."],
    },
    valorMensal: {
        type: Number
    },
    valorTotal: {
        type: Number
    },
    status: {
        type: String,
        default: "Ativa",
        enum: {
            values: ["Ativa", "Pausada", "Cancelada"],
            message: "Status inválido.",
        },
    },
});

const matricula = mongoose.model("matricula", matriculaSchema);

export default matricula