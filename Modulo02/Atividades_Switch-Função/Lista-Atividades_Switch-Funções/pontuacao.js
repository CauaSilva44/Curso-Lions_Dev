const prompt = require('prompt-sync')();

const soma = (pontuacoes) => {
    let soma = pontuacao1 + pontuacao2 + pontuacao3; 
    switch (true) {
        case (soma > 200 || pontuacoes[2] > 90):
            console.log("Veterano.");
            pontuacoes.push(soma)
            return pontuacoes
            break;
        case (soma <= 200 || pontuacoes[2] <= 90):
            console.log("Iniciante");
            pontuacoes.push(soma)
            return pontuacoes
            break;
        default:
            console.log("Valor Inválido.")
    }
}

let pontuacoes = []

let pontuacao1 = Number(prompt("Primeira Partida: "))
let pontuacao2 = Number(prompt("Segunda Partida: "))
let pontuacao3 = Number(prompt("Terceira Partida: "))

pontuacoes.push(pontuacao1, pontuacao2, pontuacao3);

let resultado = (soma(pontuacoes))

console.log(resultado)