const prompt = require('prompt-sync')();

let vendasDoDia = [];
let total = 0

while(vendasDoDia.length <= 4) {
    let venda = Number(prompt("Valor: "))
    vendasDoDia.push(venda)
    console.log(vendasDoDia.length)

}

for(let i = 0; i < vendasDoDia.length; i++) {
    total += vendasDoDia[i] 
}

let media = 0
    media = total / vendasDoDia.length

console.log(`Total: ${total}\n Média por compra: ${media}`)