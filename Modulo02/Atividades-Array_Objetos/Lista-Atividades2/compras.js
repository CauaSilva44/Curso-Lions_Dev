const prompt = require('prompt-sync')();

let cliente = prompt("Qual o nome do cliente? ")
let assinante = prompt("O cliente é assinante Prime ou Padrao? ") 

let carrinhoOnline = {
    nomeCliente: cliente ,
    assinatura: assinante ,
    listaDeCompras: []
}

let produto1 = parseFloat(prompt("Digite o preço do primeiro produto: "))
let produto2 = parseFloat(prompt("Digite o preço do segundo produto: "))
let produto3 = parseFloat(prompt("Digite o preço do terceiro produto: "))

carrinhoOnline.listaDeCompras.push(produto1, produto2, produto3)

let total = carrinhoOnline.listaDeCompras[0] + carrinhoOnline.listaDeCompras[1] + carrinhoOnline.listaDeCompras[2]

if (total > 200 && carrinhoOnline.assinatura == 'prime') {
    console.log(`Toda compra acima de 200 reais ou com assinatura Prime, terá um vale de frete grátis!`)
    console.log(carrinhoOnline)
    console.log(`O valor do carrinho atualmente é de R$${total}.`)
} else if (total > 200 && carrinhoOnline.assinatura == 'padrao') {
    console.log(`Toda compra acima de 200 reais, terá um vale de Frete Grátis!`)
    console.log(carrinhoOnline)
    console.log(`O valor do carrinho atualmente é de R$${total}.`)
} else if (total < 200 && carrinhoOnline.assinatura == 'prime') {
    console.log(`Toda compra com assinatura Prime, tera um vale de Frete Grátis!`)
    console.log(carrinhoOnline)
    console.log(`O valor do carrinho atualmente é de R$${total}.`)
} else if (total < 200 && carrinhoOnline.assinatura == 'padrao'){
    console.log(`Uma taxa de R$30,00 será colocada sobre o total da compra.`)
    total + 30
    console.log(carrinhoOnline)
    console.log(`O valor do carrinho atualmente é de R$${total}.`)
}