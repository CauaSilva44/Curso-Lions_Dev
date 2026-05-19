const prompt = require('prompt-sync')();

function rastreio(encomenda) {
    switch (true) {
        case (codigo == "P"):
            statusCodigo = "Pendente de Envio..";
            encomenda.statusCodigo = statusCodigo;
            return encomenda;
            break;
        case (codigo == 'E'):
            statusCodigo = "Em Rota de Entrega..";
            encomenda.statusCodigo = statusCodigo;
            return encomenda;
            break;
        case (codigo == 'C'):
            statusCodigo = "Cancelado..";
            encomenda.statusCodigo = statusCodigo;
            return encomenda;
            break;
        default:
            console.log("Status Invãlido.")
    }
}

let id = prompt("Qual a id do pedido: ")
let codigo = prompt("Status do pedido: ").toUpperCase();

let encomenda = {
    id: id ,
    status: codigo
} 

let resultado = rastreio(encomenda)
console.table(resultado)