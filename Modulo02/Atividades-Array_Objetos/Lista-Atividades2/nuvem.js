const prompt = require("prompt-sync")();

let Servidor = {
    nomeServidor: 'Servidor Principal AWS' ,
    capacidadeMaxGb: 500 ,
    sitesHospedados: [] ,
}

let siteOnline1 = {
    dominio01: 'google.com' ,
    tamanhoOcupGb01: 200 ,
}
Servidor.sitesHospedados.push(siteOnline1)


let dominio2 = prompt("Qual o dominio deste novo site: ")
let tamanhoOcupGb2 = parseFloat(prompt("Quantas Gb's este novo site ocupa? "))

let siteNovo = {
    dominio02: dominio2 ,
    tamanhoOcupGb02: tamanhoOcupGb2
}

let GbTotal = Servidor.sitesHospedados[0].tamanhoOcupGb01 + siteNovo.tamanhoOcupGb02

if(Servidor.capacidadeMaxGb >= GbTotal) {
    Servidor.capacidadeMaxGb = Servidor.capacidadeMaxGb - Servidor.sitesHospedados[0].tamanhoOcupGb01 - siteNovo.tamanhoOcupGb02
    Servidor.sitesHospedados.push(siteNovo)
    console.log("Upload Concluído! Sistema Operacional.")
    console.log(Servidor)
} else if (Servidor.capacidadeMaxGb < GbTotal) {
    Servidor.capacidadeMaxGb = Servidor.capacidadeMaxGb - siteOnline1.tamanhoOcupGb01
    console.log("Falha: Falta de Espaço Físico. Cancele o deploy.")
    console.log(Servidor)
    
}
