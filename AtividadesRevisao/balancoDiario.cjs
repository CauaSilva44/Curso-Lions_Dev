const prompt = require('prompt-sync')();

let vendasDoDia = [];
let total = 0

while(vendasDoDia.length <= 4) {
    let venda = Number(prompt("Valor: "))
    vendasDoDia.push(venda)
    console.log(vendasDoDia.length)

}

for(let i = 0; i < vendasDoDia.length; i++) {
    total = total + vendasDoDia[i] 
} console.log(total)