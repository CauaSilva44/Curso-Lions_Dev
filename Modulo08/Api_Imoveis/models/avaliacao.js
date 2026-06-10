import mongoose from "mongoose";

const AvaliacaoSchema = new mongoose.Schema({
  imovelId: {
    type: String,
    required: [true, "O ID do imóvel é obrigatório."],
  },
  nomeUsuario: {
    type: String,
    required: [true, "O nome do usuário é obrigatório."],
  },

  nota: {
    type: Number,
    required: [true, "A nota é obrigatória."],
    min: [1, "A nota mínima é 1."],
    max: [5, "A nota máxima é 5."], 
  },

  comentario: {
    type: String,
    required: [true, "O comentário é obrigatório."],
    minlength: [10, "O comentário deve ter no mínimo 10 caracteres."],
  },
});

const Avaliacao = mongoose.model("Avaliacao", AvaliacaoSchema);
export default Avaliacao;