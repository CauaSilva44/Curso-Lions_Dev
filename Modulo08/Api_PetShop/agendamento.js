import mongoose from "mongoose"

const agendamentoSchema = 
new mongoose.Schema(
    {
    nomePet: {
        type: String,
        required: true,
    },
    especie: {
        type: String,
        options: ["Cachorro", "Gato", "Outro"],
        required: true,
    },
    nomeDono: {
        type: String,
        required: true,
    },
    telefoneDono: {
        type: String,
        required: true,
    },
    servico: {
        type: String,
        options: ["Banho", "Tosa", "Banho ou Tosa"],
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
});

const Agendamento = mongoose.model("Agendamento", agendamentoSchema);

export default Agendamento;