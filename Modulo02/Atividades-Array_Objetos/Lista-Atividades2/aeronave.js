const prompt = require('prompt-sync')();

let leituraTemp = '98'
let leituraPsi = '12'
let leituraComb = '10'

let motorEsq = {
    statusMotor: 'Desligado' ,
    leituras: []
}

motorEsq.leituras.push(leituraTemp, leituraPsi, leituraComb);

let novaLeituratemp = parseFloat(prompt("Atualize a nova informação da Temperatura: "))
let novaLeiturapsi = parseFloat(prompt("Atualize a nova informação da Pressão: "))
let novaLeituracomb = parseFloat(prompt("Atualize a nova informação do Combustível: "))

motorEsq.leituras[0] = motorEsq.leituras[0] = novaLeituratemp
motorEsq.leituras[1] = motorEsq.leituras[1] = novaLeiturapsi
motorEsq.leituras[2] = motorEsq.leituras[2] = novaLeituracomb

let bloqueioAtivado = true

if (novaLeituracomb > 20 && novaLeiturapsi > 50 && novaLeituratemp > 20 < 90 ) {
    bloqueioAtivado = false
    motorEsq.statusMotor = motorEsq.statusMotor = 'Ligado'
    console.log(motorEsq)
} else if (novaLeituracomb < 20 || novaLeituracomb < 50 || novaLeituracomb < 20 > 90) {
    bloqueioAtivado = 'bloqueioAtivado'
    motorEsq.statusMotor = motorEsq.statusMotor = 'Falha Crítica.'
    motorEsq[bloqueioAtivado] = true
    console.log(motorEsq)
}