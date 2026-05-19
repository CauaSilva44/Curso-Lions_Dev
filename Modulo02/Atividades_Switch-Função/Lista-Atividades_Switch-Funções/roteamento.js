const prompt = require('prompt-sync')();

const avaliacao = (nivel) => {

    switch (nivel) {
        case 1:
            return "Atendimento Básico";
            break;
        case 2:
            return "Equipe Especializada";
            break;
        case 3:
            return "Gestão de Crise";
            break;
        default:
            return 'Nível Desconhecido'
    }
} 

let filaAtendimento = []

filaAtendimento.push()

let nivel = Number(prompt("Qual o nível do problema: "))

let setor = avaliacao(nivel)
filaAtendimento.push(setor)


console.log("Fila de Atendimento:", filaAtendimento)

