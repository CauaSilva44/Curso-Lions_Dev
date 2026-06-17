import express from "express";
import dotenv from "dotenv";
import pedido from "./models/pedidos.js";
import conectarDB from "./db.js";

dotenv.config({path: "../.env"});
const app = express();
const port = process.env.PORT;

conectarDB();

app.use(express.json());

// -- Entrada -- //

app.get(("/"), (req, res) => {
    res.json({message: "Bem-vindo à API de pedidos da Cantina!"}); 
});

//_______________//

// -- CREATE --//

app.post("/pedidos", async (req, res) => {
    try {
        const {nomeCliente, item, quantidade, formaPagamento, observacao} = req.body;

        let valorUnitario = 0;
        switch (item) {
            case "Salgado":
            valorUnitario = 8
                break;
            case "Suco": 
            valorUnitario = 6;
                break;
            case "Combo": 
            valorUnitario = 12;
                break;
            case "Bolo": 
            valorUnitario = 5;
                break;
            default:
                return res.status(400).json({message: "Item inválido!"});
        };

        let valorTotal = valorUnitario * quantidade;

        if(quantidade >= 5) {
            valorTotal *= 0.9;
        };

        const novoPedido = new pedido({
            nomeCliente,
            item,
            quantidade,
            formaPagamento,
            observacao,
            valorTotal,
        });

        
        await novoPedido.save();

        res.status(201).json({message: "Pedido criado com sucesso!", pedido: novoPedido});
    } catch (error) {
        res.status(400).json({message: "Erro ao criar o pedido.", error: error.message});
    };
});

//_______________//

// -- READ -- //

// -- Buscar todos os pedidos -- //

app.get("/pedidos", async (req, res) => {
    try {
        const pedidos = await pedido.find();
        return res.status(200).json({message: "Pedidos encontrados com sucesso!", pedidos});
    } catch {
        res.status(500).json({message: "Erro ao buscar os pedidos."});
    }
});

// -- Buscar Pedidos por Cliente -- //

app.get("/pedidos/busca", async (req, res) => {
    try {
        const {nomeCliente} = req.query;

        const pedidos = await pedido.find({nomeCliente: {$regex: nomeCliente, $options: "i"}});

        return res.status(200).json({message: "Pedidos encontrados com sucesso!", pedidos});
    } catch {
        res.status(500).json({message: "Erro ao buscar os pedidos."});
    }
});

//____________//

// -- UPDATE -- //

app.patch("/pedidos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {Status} = req.body;

        if(!["Pago"].includes(Status)) {
            return res.status(400).json({message: "Status inválido!"});
        };

        const pedidoAtualizado = await pedido.findByIdAndUpdate(id, {Status}, {new: true});

        if(!pedidoAtualizado) {
            return res.status(404).json({message: "Pedido não encontrado!"});
        };

        res.status(200).json({message: "Status do pedido atualizado com sucesso!", pedido: pedidoAtualizado});
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar o status do pedido.", error: error.message});
    };
});

//______________//

// -- DELETE -- //

app.delete("/pedidos/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const pedidoDeletado = await pedido.findByIdAndDelete(id);

        if(!pedidoDeletado) {
            return res.status(404).json({message: "Pedido não encontrado!"});
        };

        res.status(200).json({message: "Pedido deletado com sucesso!", pedido: pedidoDeletado});
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar o pedido.", error: error.message});
    };
});

//______________//

// -- Servidor Rodando -- //

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//________________________//