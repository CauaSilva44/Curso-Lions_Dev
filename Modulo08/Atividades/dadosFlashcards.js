import mongoose from "mongoose";

const FlashcardsSchema = new
    mongoose.Schema(
    {
        pergunta: {
            type: String,
            required: true,
        },
        resposta: {
            type: String,
            required: true,
        },
        baralhoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Baralho",
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Flashcards = 
mongoose.model("Flashcard",
 FlashcardsSchema);

export default Flashcards;