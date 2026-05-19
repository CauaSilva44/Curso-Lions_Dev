const prompt = require('prompt-sync')();

let nomePedido = prompt("Qual o nome do cliente: ")

let pedido = {
    nome:nomePedido ,
};

let codigoItem = Number(prompt("Qual o código o Item desejado: "))

switch (true) {
    case (codigoItem == 1):
        let compra1 = {Item: 'Fone', precoFixo: 125}
        pedido.compra1 = compra1
        break;
    case (codigoItem == 2):
        let compra2 = {Item: 'Teclado', precoFixo: 320}
        pedido.compra2 = compra2
        break;
    case (codigoItem == 3):
        let compra3 = {Item: 'Mouse', precoFixo: 150}
        pedido.compra3 = compra3;
        break;
    default:
        console.log("Desconhecido.")

}

console.log(pedido)