const prompt = require('prompt-sync')();

let nomeP = prompt("Qual o nome do passageiro: ")
let nacionalidadeP = prompt("Qual a nacionalidade do passageiro: ")
let trabalhoP = prompt("Está em busca de trabalho? ")
let Visto = prompt("O passageiro tem um visto? ")

let documentoVisto = {
    Visto: Visto
}

let passageiroInternacional = {
    nome: nomeP,
    nacionalidade: nacionalidadeP,
    trabalho: trabalhoP ,
    Documento: ['Passaporte', documentoVisto ]
    
}

let terceiroD = prompt("Tem um terceiro documento? ")
passageiroInternacional.Documento.push(terceiroD)

entradaPermitida = false

if (nacionalidadeP == "Brasil" || "brasil") {
    entradaPermitida = true
let entrada = 'entradaPermitida'
passageiroInternacional[entrada] = 'Entrada Permitida'
console.log(passageiroInternacional)
} else if (nacionalidadeP !== "Brasil" && passageiroInternacional.Documento[documentoVisto] == "sim"|| "Sim" ) {
    entradaPermitida = true
    let entrada = 'entradaPermitida'
    passageiroInternacional[entrada] = 'Entrada Permitida'
    console.log(passageiroInternacional)
}