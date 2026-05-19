const prompt = require('prompt-sync')();

let distancia = parseFloat(prompt("Digite a distãncia percorrida(em km): "))
let combustivel = parseFloat(prompt("Digite a quantidade de combustível consumido(em litros): "))

const somar = (distancia, combustivel) => {
    return distancia / combustivel;
};

if (somar(distancia, combustivel) < 10 ) {
    console.log("Alerta: Veículo consumindo muito combustível. Necessário agendar revisão mencânica.")
} else {
    console.log("Consumo dentro do padrão operacional.")
}