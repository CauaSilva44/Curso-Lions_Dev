const prompt = require('prompt-sync')();

let listaDeCompras = []
let total = 0

do {
    let produtos = Number(prompt("Qual o valor do produto: "))
    listaDeCompras.push(produtos)
} while (listaDeCompras.length < 5);

for(let i = 0; i < listaDeCompras.length; i++) {
    total += listaDeCompras[i]
}

let media = total / listaDeCompras.length

console.log(`Total: R$${total}`)
console.log(`Media: R$${media}`)

