import AgendamentoRepositories from "../repositories/agendamentos.repository.js";

// -- Criar Agendamento -- //

async function criarAgendamento({ nomePet, especie, nomeDono, telefoneDono, servico, data}) {
    let valor = 0;
    if (especie == "Cão") {
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

    if (especie == "Gato") {
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
      switch (servico) {
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
    
    const agendamento =  await AgendamentoRepositories.criar({
        nomePet, 
        especie, 
        nomeDono, 
        telefoneDono, 
        servico, 
        data,
        valor
    });

    return agendamento;
};

// -- Listar Agendamento -- //

async function listarAgendamentos() {
    const agendamento = await AgendamentoRepositories.listar();
    return agendamento;
};

// -- Atualizar Agendamento -- //

async function atualizarAgendamentos(id, status) {
  const agendamentoAtualizado = await AgendamentoRepositories.atualizar(id, status);
  return agendamentoAtualizado;
};

// -- Deletar Agendamento -- //

async function deletarAgendamento(id) {
    const agendamentoDeletado = await AgendamentoRepositories.deletar(id);
    return agendamentoDeletado;
};

//_____________________________________________//

const AgendamentoService = {
    criarAgendamento,
    listarAgendamentos,
    atualizarAgendamentos,
    deletarAgendamento
};

export default AgendamentoService