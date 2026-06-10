import dotenv from "dotenv";
import express from "express";
import Agendamento from "./models/agendamento.js";
import conectarDB from "./db.js";

dotenv.config({path: "../.env"});
const app = express();
const port = process.env.PORT;
conectarDB();

app.use(express.json());

// -- Entrada -- //

app.get(("/"), (req, res) => {
    res.json({message: "Bem-vindo à API de Agendamento do PetShop!"}); 
});

//_______________//

// -- CREATE -- //
app.post("/agendamentos", async (req, res) => {
    try {
        const {nomePet, especie, nomeDono, telefoneDono, servico, data} = req.body;
        
        let valor = 0;
        if(especie == "Cão") {
            switch (servico) {
                case "Banho":
                    valor = 50;
                    break;
                case "Tosa":
                    valor = 60;
                    break;
                case "Banho e Tosa":
                    valor = 100;
                    break;
                default:
                    console.log("Serviço inválido!");
                    break;
            };
        };

        if(especie == "Gato") {
            switch (servico) {
                case "Banho":
                    valor = 60;
                    break;
                case "Tosa":
                    valor = 70;
                    break;
                case "Banho e Tosa":
                    valor = 110;
                    break;
                default:
                    console.log("Serviço inválido!");
                    break;
            };
        };
        
        if (especie == "Outro") {
            switch(servico) {
                case "Banho":
                    valor = 40;
                    break;
                case "Tosa":
                    valor = 50;
                    break;
                case "Banho e Tosa":
                    valor = 80;
                    break;
                default:
                    console.log("Serviço inválido!");
                    break;
            };
        };

        const novoAgendamento = new Agendamento({
            nomePet,
            especie,
            nomeDono,
            telefoneDono,
            servico,
            data,
            valor,
        });

        await novoAgendamento.save();

        res.status(201).json({ menssage: "Agendamento criado com sucesso!", agendamento: novoAgendamento });
  } catch (error) {
    res.status(400).json({ menssage: `Erro ao criar o agendamento: ${error.message}` });
  };
});

// -- READ -- //
app.get("/agendamentos", async (req, res) => {
    try {
        const TodosAgendamento = await Agendamento.find();

        res.status(200).json ({message: "Agendamentos encontrados com sucesso!", agendamento: TodosAgendamento});
    } catch (error) {
        res.status(400).json({message: `Erro ao encontrar os agendamento: ${error.message}`});
    }
});

app.get("/agendamentos/busca", async (req, res) => {
    try {
        const nome = req.query.nome;
        const agendamentos = await Agendamento.find({nomePet:
        { $regex: nome, $options: "i" }});

        res.status(200).json({message: "Busca efetuada com sucesso!",
        agendamentos: agendamentos});
    } catch (error) {
        res.status(400).json({message: `Erro ao realizar a busca: ${error.message}`});
    }
});

//____________//

// -- UPDATE -- //

app.patch(("/agendamentos/:id"), async (req, res) => {
    try {
      const id = req.params.id;
      const { status } = req.body;
      const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(id, 
        {status: status}, {runValidators: true, new: true});
  
      if (!agendamentoAtualizado) {
        return res.status(404).json({menssage: "Agendamento não encontrado!"});
      }
  
      res.status(200).json({menssage: "Agendamento atualizado com sucesso!", 
        agendamentoAtualizado: agendamentoAtualizado});
    } catch (error) {
      res.status(500).json({menssage: `Erro do servidor: ${error.message}`});
    }
});

//______________//

// -- DELETE -- //

app.delete(("/agendamentos/:id"), async (req, res) => {
    try {
        const id = req.params.id;
        const agendamentosDeletado = await Agendamento.findByIdAndDelete(id);

        if (!agendamentosDeletado) {
            return res.status(404).json({menssage: "Agendamento não encontrado!"});
        };

        res.status(200).json({menssage: "Agendamento deletado com sucesso!"});
    } catch (error) {
        res.status(500).json({menssage: `Erro do servidor: ${error.message}`});
    }
});

//______________//

// -- Servidor Iniciado -- //

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//_________________________//