import AgendamentoService from "../services/agendamento.services.js";

// -- Cadastrar Agendamento -- //

async function  cadastrar (req, res, next) {
    try {
        const {nomePet, especie, nomeDono, telefoneDono, servico, data} = req.body;

        const novoAgendamento = await AgendamentoService.criarAgendamento({
            nomePet, 
            especie, 
            nomeDono, 
            telefoneDono, 
            servico, 
            data
        });

        res.status(201).json({ mensagem: "Agendamento criado com sucesso!", agendamento: novoAgendamento });
    } catch (erro) {
      res.status(400).json({ mensagem: `Erro ao criar o agendamento: ${erro.message}` });
    };
};

// -- Listar Agendamento -- //

async function listar (req, res, next) {
    try {
        const agendamento = await AgendamentoService.listarAgendamentos();
        res.status(201).json({message: "Lista de Agendamentos encontradas", agendamento: agendamento});
    } catch (error) {
        res.status(400).json({ mensagem: `Erro ao listar os agendamentos: ${error.message}` });
    };
};

//_____________________________________________//

// -- Atualizar Agendamento -- //

async function atualizar (req, res, next) {
    try {
        const id = req.params.id;
        const { status } = req.body;

        const agendamentoAtualizado = await AgendamentoService.atualizarAgendamentos(id, status);

        if (!agendamentoAtualizado) {
            return res.status(404).json({ mensagem: "Agendamento não encontrado!" });
        }

        res.status(200).json({ mensagem: "Agendamento atualizado com sucesso!", agendamentoAtualizado: agendamentoAtualizado });
    } catch (error) {
        res.status(500).json({ mensagem: `Erro do servidor: ${error.message}` });
    };
}


const AgendamentoController = {
    cadastrar,
    listar,
    atualizar
};

export default AgendamentoController;