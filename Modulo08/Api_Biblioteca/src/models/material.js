import mongoose from "mongoose";

const MaterialSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O título do material é obrigatório."],
    },
    tipo: {
        type: String,
        required: [true, "O tipo do material é obrigatório."],
        enum: {
            values: ["Livro", "Revista", "Apostila"],
            message: "O tipo do material deve ser Livro, Revista ou Apostila.",
        },
    },
    autor: {
        type: String,
        required: [true, "O autor do material é obrigatório."],
    },
    estoque: {
        type: Number,
        required: [true, "O estoque do material é obrigatório."],
    }
});

const material = mongoose.model("material", MaterialSchema);

export default material;