import { ReturnDocument } from "mongodb";
import Agendamento from "../models/agendamento.js";
import criarErro from "../utils/criarErro.js";

// -- Função para criar um novo agendamento -- //

async function criar (dadosAgendamento) {
    return Agendamento.create(dadosAgendamento);
};

// -- Função para listar os agendamentos -- //

async function listar () {
    return Agendamento.find();
};

// -- Função para Atualizar um Agendamento -- //

async function atualizar (id, status) {
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(id, {status: status}, {runValidators: true, new: true});

    if (!agendamentoAtualizado) {
        return null;
    };

    return agendamentoAtualizado;
};

// -- Função para deletar um agendamento -- //

async function deletar (id) {
    const agendamentoDeletado = await Agendamento.findByIdAndDelete(id);

    if (!agendamentoDeletado) {
        return null;
    };

    return agendamentoDeletado;
}

//_____________________________________________//


const AgendamentoRepositories = {
    criar,
    listar,
    atualizar,
    deletar
};

export default AgendamentoRepositories;