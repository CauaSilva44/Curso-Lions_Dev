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

function raiz(calculadora) {
    calculadora.calculo -= Math.sqrt(calculadora.calculo)
    console.log(calculadora)
    return calculadora.calculo
}
let conta;

do {
    conta = prompt("[A]-(+), [S] (-), [M]-(x), [D]-( / ), [P]-(%), [T]-(^), [E] para Encerrar ").toUpperCase();

   switch (true) {
        case conta == 'A':
            let valorA = Number(prompt(": "));
            adicao(valorA);
            break;
        case conta == 'S':
            let valorS = parseInt(prompt(": "));
            subtracao(valorS);
            break;
        case conta == 'M':
            let valorM = Number(prompt(": "));
            multiplicação(valorM);
            break;
        case conta == 'D':
            let valorD = Number(prompt(": "));
            divisao(valorD);
            break;
        case conta == 'P':
            let valorP = Number(prompt(": "));
            porcentagem(valorP);
            break;
        case conta == 'T':
            let valorT = Number(prompt(": "));
            potencia(valorT);
            break;
        case conta == 'R':
            raiz(calculadora.calculo);
            break;
        case conta == 'E':
            console.log("Encerrando processo... ");
            break;
        default:
            console.log("Valor inválido!");
    }

} while (conta !== 'E')

console.table(calculadora)
