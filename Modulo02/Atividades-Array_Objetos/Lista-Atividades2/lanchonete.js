const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ")
let quantidade = parseFloat(prompt("Quantos lanches deseja: "))

let pedido = {
    nomeCliente: nome ,
    valorLanche: 30 ,
    quantidadeLanches: quantidade ,
    ingrExtras: []
}

let extra1 = prompt(" Digite um extra que deseja: ")
let extra2 = prompt(" Digite outro extra que deseja: ")
let extraValor1 = parseFloat(prompt("Digite o valor do extra1: "))
let extraValor2 = parseFloat(prompt("Digite o valor do extra2: "))

pedido.ingrExtras.push(extra1, extra2)

calculo = (pedido.valorLanche + extraValor1 + extraValor2) * pedido.quantidadeLanches

if (pedido.ingrExtras = 2 && pedido.quantidadeLanches > 2) {
    let total = calculo * 0.8
    console.log(`Subtotal = ${calculo} / Valor Total = ${total}`)
    console.log(pedido.ingrExtras)
} else if ( pedido.ingrExtras - 1 && pedido.quantidadeLanches < 2) {
    console.log(`Subtotal = ${calculo}`)
    console.log(pedido.ingrExtras)
}