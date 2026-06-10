import mongoose from "mongoose";

const ImovelSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "O título do imóvel é obrigatório."],
  },
  descricao: {
    type: String,
    required: [true, "A descrição do imóvel é obrigatória."],
  },
  localizacao: {
    type: String,
    required: [true, "A localização do imóvel é obrigatória."],
  },
  precoNoite: {
    type: Number,
    required: [true, "O preço por noite é obrigatório."],
  },
  capacidadeMaxima: {
    type: Number,
    required: [true, "A capacidade máxima de hóspedes é obrigatória."],
  },

  disponivel: {
    type: Boolean,
    default: true, 
  },
});

const Imovel = mongoose.model("Imovel", ImovelSchema);
export default Imovel;