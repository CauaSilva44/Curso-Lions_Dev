import Agendamento from "../models/agendamento.js";

// -- Função para criar um novo agendamento -- //

async function criar (dadosAgendamento) {
    return Agendamento.create(dadosAgendamento);
};

// -- Função para listar os agendamentos -- //

async function listar (dadosAgendamento) {
    return Agendamento.find();
};

// -- Função para Atualizar um Agendamento -- //

async function atualizar (id, status) {
    const agendamento = await Agendamento.findById(id);

    if (!agendamento) {
        return null;
    }

    agendamento.status = status;
    await agendamento.save();

    return agendamento;
}
//_____________________________________________//


const AgendamentoRepository = {
    criar,
    listar,
    atualizar
};

export default AgendamentoRepository;