import mongoose from "mongoose";

const HospedeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O nome do hóspede é obrigatório."],
  },
  idade: {
    type: Number,
    required: [true, "A idade do hóspede é obrigatória."],
  },
});

const ReservaSchema = new mongoose.Schema({
  imovelId: {
    type: String,
    required: [true, "O ID do imóvel é obrigatório."],
  },
  nomeHospede: {
    type: String,
    required: [true, "O nome do responsável pela reserva é obrigatório."],
  },
  emailHospede: {
    type: String,
    required: [true, "O e-mail do responsável é obrigatório."],
  },
  dataEntrada: {
    type: String,
    required: [true, "A data de check-in é obrigatória."],
  },
  quantidadeNoites: {
    type: Number,
    required: [true, "A quantidade de noites é obrigatória."],
  },
  hospedes: {
    type: [HospedeSchema],
    required: [true, "A lista de hóspedes é obrigatória."],
  },
  valorTotal: {
    type: Number,
  },
  status: {
    type: String,
    default: "Pendente",
    enum: {
      values: ["Pendente", "Confirmada", "Cancelada"],
      message: "Status inválido.",
    },
  },
});

const Reserva = mongoose.model("Reserva", ReservaSchema);
export default Reserva;