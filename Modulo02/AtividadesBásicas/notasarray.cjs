const prompt = require('prompt-sync')();

let notas = []

let prova1 = parseFloat(prompt("Digite a nota da primeira prova: "))
let prova2 = parseFloat(prompt("Digite a nota da segunda prova: "))

notas.push(prova1, prova2)

let calculo = (notas[0] + notas[1]) / 2

console.log(`A média das notas é ${calculo}`)