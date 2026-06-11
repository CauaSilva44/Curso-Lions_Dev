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
        const {nomeCliente, pedidos, formaPagamento, observacao} = req.body;

        let valorUnitario = 0;
        switch (pedidos) {
            case "Salgado": 8;
                break;
            case "Suco": 6;
                break;
            case "Combo": 12;
                break;
            case "Bolo": 5;
                break;
            default:
                console.log("Item inválido!");
                break; 
        };

        const valorTotal = valorUnitario * pedido.quantidades;

        if(pedidos >= 5) {
            valorTotal *= 0.9;
        };

        const novoPedido = new pedido({
            nomeCliente,
            pedidos,
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

app.get("/pedidos", async (req, res) => {
    try {
        const pedidos = await pedido.find();
        return res.status(200).json({message: "Pedidos encontrados com sucesso!", pedidos});
    } catch {
        res.status(500).json({message: "Erro ao buscar os pedidos."});
    }
});

//____________//

// -- Servidor Rodando -- //

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//________________________//