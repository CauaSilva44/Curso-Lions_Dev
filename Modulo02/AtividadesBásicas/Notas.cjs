const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Qual a nota da primeira prova? "))
let nota2 = parseFloat(prompt("Qual a nota da segunda prova? "))
console.log("A média entre as duas notas é de " + (nota1 + nota2) / 2);

