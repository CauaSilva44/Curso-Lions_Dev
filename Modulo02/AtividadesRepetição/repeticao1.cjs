const prompt = require("prompt-sync")();

let tabuada = parseFloat(prompt("Escolha uma tabuada: "))
let tabuada2 = parseFloat(prompt("Vezes: "))
for (i = 1; i < tabuada2; i ++); {
    let numero = tabuada * i
    console.log(numero)
}