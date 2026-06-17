import mongoose from "mongoose";

const emprestimoSchema = new mongoose.Schema({
    materialID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "material",
        required: [true, "O ID do material é obrigatório."],
    },
    nomeAluno: {
        type: String,
        required: [true, "O nome do aluno é obrigatório."],
    },
    turma: {
        type: String,
        required: [true, "A turma do aluno é obrigatória."],
    },
    dataEmprestimo: {
        type: String,
        required: [true, "A data do empréstimo é obrigatória."],
    },
    diasEmprestimo: {
        type: Number,
        required: [true, "Os dias do empréstimo são obrigatórios."],
    },
    multaPrevista: {
        type: Number,
    },
    status: {
        type: String,
        default: "Emprestado",
        enum: {
            values: ["Emprestado", "Devolvido", "Atrasado"],
            message: "Status inválido.",
        },
    },
});

const Emprestimo = mongoose.model("emprestimo", emprestimoSchema);

export default Emprestimo;