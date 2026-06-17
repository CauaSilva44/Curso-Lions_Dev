import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
    nomeCliente: {
        type: String,
        required: [true, "O nome do cliente é obrigatório."],
    },
    item: {
        type: String,
        required: [true, "O item é obrigatório."],
        enum: {
            values: ["Salgado", "Suco", "Combo", "Bolo"],
            message: "Escolha apenas o que tem no cardápio \n Salgado, Suco, Combo ou Bolo.",
        },
    },
    quantidade: {
        type: Number,
        required: [true, "A quantidade é obrigatória."],
        min: [1, "A quantidade deve ser no mínimo 1."],
    },
    formaPagamento: {
        type: String,
        required: [true, "A forma de pagamento é obrigatória."],
        enum: {
            values: ["Cartão", "Dinheiro", "Pix"],
            message: "A forma de pagamento deve ser Cartão, Dinheiro ou Pix.",
        },
    },
    observacao: {
        type: String,
    },
    valorUnitario: {
        type: Number,
    },
    valorTotal: {
        type: Number,
    },
    Status: {
        type: String,
        default: "Pendente",
        enum: {
            values: ["Pendente", "Pago", "Entregue"],
        },
    },
});

const pedido = mongoose.model("pedido", PedidoSchema);

export default pedido;