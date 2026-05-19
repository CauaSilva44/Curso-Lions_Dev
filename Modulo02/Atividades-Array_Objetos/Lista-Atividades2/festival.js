const prompt = require('prompt-sync')();

let nome = prompt("Qual o nome da Empresa? ")
let orçamentoTotal = parseFloat(prompt("Qual foi o orçamento da noite? "))

grupoCorp = {
    nomeEmpresa: nome,
    orçamentoTotal: orçamentoTotal,
    openBarFechado: false ,
    consumosExtras: []
}

let bebidaImportada1 = prompt("Qual o nome da primeira bebida: ")
let bebidaImportada2 = prompt("Qual o nome da segunda bebida: ")
let preçoBebidaImportada1 = parseFloat(prompt("Qual o valor da primeira bebida: "))
let preçoBebidaImportada2 = parseFloat(prompt("Qual o valor da segunda bebida: "))

grupoCorp.consumosExtras.push(bebidaImportada1, bebidaImportada2)
valorTotal = preçoBebidaImportada1 + preçoBebidaImportada2
grupoCorp.orçamentoTotal = grupoCorp.orçamentoTotal - valorTotal

if (grupoCorp.orçamentoTotal < 0) {
    grupoCorp.openBarFechado = true
    let multa = 'Multa Excedente'
    grupoCorp[multa] = `Multa Excedente de R$ 500,00` 
    console.log(grupoCorp)
} else {
    console.log(grupoCorp)
}