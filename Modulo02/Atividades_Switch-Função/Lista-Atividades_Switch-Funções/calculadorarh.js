const prompt = require('prompt-sync')();

function avaliacao(nivelCargo, salarioAtual) {
    switch (nivelCargo) {
        case 'Estagiario' :
            return salarioAtual * 1.1;
            break;
        case 'Junior':
            return salarioAtual * 1.15;
            break;
        case 'Pleno' :
            return salarioAtual *1.2;
            break;
        default:
            return salarioAtual
    }
}

let nivelCargo = prompt("Nivel do cargo do funcionário: ")
let salarioAtual = Number(prompt("Salário Atual do funcionário: "))

let resultado = avaliacao(nivelCargo, salarioAtual)
console.log(resultado)
