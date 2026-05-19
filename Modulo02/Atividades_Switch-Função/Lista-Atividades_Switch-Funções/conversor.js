const prompt = require('prompt-sync')();

const cambio = (valorReal, moedaDestino) => {
    switch (true) {
        case (moedaDestino == "EUR"):
            console.log("Convertendo valor em relação aoEuro..");
            return "R$:" + valorReal * 6.1 + ",00"  ; 
            break;
        case (moedaDestino == "USD"):
            console.log('Covertendo valor em relação ao Dólar..');
            return "R$:" + valorReal * 5.28 + ",00" ;
            break;
        case (moedaDestino == "GBP"):
            console.log('Convertendo valor em relação á Libras..');
            return "R$:" + valorReal * 7.06 + ",00";
            break;
        default:
            console.log('Moeda Destinatária Desconhecida.');
            return valorReal + " Reais"
    }
}

let valorReal = Number(prompt("Quantia em real: "))
let moedaDestino = prompt("Moeda de Destino: ")

let resultado = cambio(valorReal, moedaDestino)
console.log(resultado)


