import PromptSync from "prompt-sync";
const prompt = PromptSync();

import dados from "./dados.js";
import listarConsultas from "./listarConsultas.js";
import adicionarConsulta from "./adicionarConsultas.js";
import cancelarConsulta from "./cancelarConsultas.js";
import atualizarConsulta from "./atualizarConsultas.js";

function mainMenu() {
    console.log('\n--- Painel de Consultas ---')
    console.log('1. Listar Consultas ')
    console.log('2. Adicionar Consulta' )
    console.log('3. Atualizar Consulta' )
    console.log('4. Cancelar Consulta' )
    console.log('5. Sair' )
}

let opcao;

while (opcao != "5") {
    mainMenu()
    opcao = prompt("Escolha uma opção: ")

    switch (opcao) {
        case '1':
            listarConsultas(dados.consultas, dados.medicos, dados.pacientes);
            break
        case '2':
            let novaConsulta = {
            data: prompt("Qual a data da Consulta: "),
            idMedico: Number(prompt("Qual o id do Medico: ")),
            idPaciente: Number(prompt("Qual o Id do Paciente: ")),
            descricao: prompt("Qual o motivo da consulta: ")
        }
        console.log(novaConsulta)
            const adicionou = adicionarConsulta(dados.consultas, novaConsulta, dados.medicos, dados.pacientes)
            if(adicionou) {
                console.log('Consulta Registrada.')
            }
            break
        case '3':
            let idAtualizar = parseFloat(prompt("ID da Consulta a ser atualizado: "))

            let novosDados = {
                novaData:prompt("Nova Data para a consulta: "),
                idMedico:prompt("Novo Medico para atender(ou Enter para manter): "),
                idPaciente:prompt("Novo Paciente para receber atendimento(ou Enter para manter): "),
                descricao:prompt("Qual a descrição da consulta: ")
            }

            const atualizou = atualizarConsulta(dados.consultas, idAtualizar, novosDados, dados.medicos, dados.pacientes);

            if(atualizou) {
                console.log('Consulta reagendada!');
            }
            break
        case '4':
            let idRemover = parseInt(prompt("ID da consulta a ser cancelada: "))
            let confirmar = prompt("Tem certeza que deseja cancelar esta Consulta? (s/n): ")
            if (confirmar.toLowerCase() === 's') {
                cancelarConsulta(dados.consultas, idRemover)
                console.log('Consulta cancelada.')
            } else {
                console.log('Operação cancelada.')
            }
            break
        case '5':
            console.log("Encerrando Menu...")
            break
        default:
            console.log("Operação descohecida.")
    }
}