import mongoose from "mongoose";

async function conectarDB() {

const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI não configurada no ambiente.");
};
await mongoose.connect(mongoUri);

console.log("MongoDB conectado com sucesso.");
}

export default conectarDB