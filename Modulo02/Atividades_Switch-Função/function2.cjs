const prompt = require('prompt-sync')();

let ganho = Number(prompt("Informe seu valor ganho por hora normal: "))
let extra = parseFloat(prompt("Informe a quantidade de horas extras: "))

function ganhoextra(ganho,extra) {
    return ganho * extra * 1.5;
};

let resultado = ganhoextra(ganho, extra)
console.log(`O valor a receber de horas extras este mẽs é: R$${resultado}`)