const prompt = require('prompt-sync')();

function analise(servidor,arquivoOnline) {

    let tamanho = servidor.espacoOcup + arquivoOnline.tamanhoOcupGb
    switch (true) {
        case (tamanho <= servidor.capacidadeMaxGb):
            servidor.espacoOcup =+ tamanho;
            return true
            break;
        case (tamanho > servidor.capacidadeMaxGb):
            return false
            break;
        default:
            console.log("Inválido.")
    }
}

let servidor = {
    nomeServidor: 'Servidor Principal AWS' ,
    capacidadeMaxGb: 1200 ,
    espacoOcup: 800
}

let tamanhoGb = parseFloat(prompt("Digite a quantidades de Gb's que o arquivo pesa: "))

let arquivoOnline = {
    dominio01: 'google.com' ,
    tamanhoOcupGb: tamanhoGb ,
}

let resultado = analise(servidor,arquivoOnline)

if(resultado) {
    console.log('Upload Aceito.')
} else {
    console.log('Upload Negado.')
}
