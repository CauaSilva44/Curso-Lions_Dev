import mongoose from "mongoose";

const BaralhoShema = new 
mongoose.Schema(
    {
        titulo: {
            type:String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }   
);

const Baralho = 
mongoose.model("Baralho",
 BaralhoShema);

 export default Baralho;