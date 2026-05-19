const prompt = require('prompt-sync')();

let calculadora = {
    calculo: 0
}

function adicao (valorA) {
    calculadora.calculo += valorA
    console.log(calculadora)
    return calculadora.calculo
}

function subtracao (valorS) {
    calculadora.calculo -= valorS
    console.log(calculadora)
    return calculadora.calculo
}

function multiplicação (valorM) {
        calculadora.calculo *= valorM
        console.log(calculadora)
        return calculadora.calculo
    }

function divisao(valorD) {
    calculadora.calculo /= valorD
    console.log(calculadora)
    return calculadora.calculo
}

function porcentagem(valorP) {
    calculadora.calculo *= (valorP / 100)
    console.log(calculadora)
    return calculadora.calculo
}

function potencia(valorT) {
    calculadora.calculo =
    calculadora.calculo ** valorT 
    console.log(calculadora)
    return calculadora.calculo 
}

let conta;

do {
    conta = prompt("[1]-(+), [2] (-), [3]-(x), [4]-( / ), [5]-(%), [6]-(^), [0] para Encerrar ").toUpperCase();

   switch (true) {
        case conta == '1':
            let valorA = Number(prompt(": "));
            adicao(valorA);
            break;
        case conta == '2':
            let valorS = parseInt(prompt(": "));
            subtracao(valorS);
            break;
        case conta == '3':
            let valorM = Number(prompt(": "));
            multiplicação(valorM);
            break;
        case conta == '4':
            let valorD = Number(prompt(": "));
            divisao(valorD);
            break;
        case conta == '5':
            let valorP = Number(prompt(": "));
            porcentagem(valorP);
            break;
        case conta == '6':
            let valorT = Number(prompt(": "));
            potencia(valorT);
            break;
        case conta == '0':
            console.log("Encerrando processo... ");
            break;
        default:
            console.log("Valor inválido!");
    }

} while (conta !== '0')

console.table(calculadora)
