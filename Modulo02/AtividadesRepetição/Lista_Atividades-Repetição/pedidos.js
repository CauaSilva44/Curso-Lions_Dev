const prompt = require('prompt-sync')();

let total = 0
let outroItem;

do {
    let valorItem = parseFloat(prompt("Qual o valor do item: "));
    total += valorItem;
    outroItem = prompt("Deseja adicionar mais algum item? s/n: ");
} while (outroItem == 's')
console.log("Total a pagar: " + total)

