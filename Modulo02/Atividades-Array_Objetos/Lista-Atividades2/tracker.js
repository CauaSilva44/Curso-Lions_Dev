const prompt = require('prompt-sync')();

let nome = prompt('Qual o nome do Atleta? ')
let peso = parseFloat(prompt('Seu peso atual: '))
let meta = prompt('Sua meta é Emagrecimento ou Performance? ')

let Tracker = {
    nomeAtleta: nome ,
    pesoAtual: peso ,
    metaAtual: meta ,
    listaDistancias: []
}

let maratona1 = parseFloat(prompt("Qual foi a distãncia percorrida na primeira maratona? "))
let maratona2 = parseFloat(prompt("Qual foi a distãncia percorrida na segunda maratona? "))
let maratona3 = parseFloat(prompt("Qual foi a distãncia percorrida na terceira maratona? "))

Tracker.listaDistancias.push(maratona1, maratona2, maratona3)

let maratonaHoje = parseFloat(prompt("Qual foi a distãncia percorrida da maratona de hoje? "))

Tracker.listaDistancias.push(maratonaHoje)

kmMedia = (Tracker.listaDistancias[1] + Tracker.listaDistancias[2] + Tracker.listaDistancias[3]) / 3

if (kmMedia > 20 && Tracker.metaAtual == 'Emagrecimento') {
    Tracker.pesoAtual = (Tracker.pesoAtual - 1) + ", Meta Atingida!"
    console.log(Tracker)
} else if (Tracker.listaDistancias[2] < Tracker.listaDistancias[3] && Tracker.metaAtual == "Performance") {
    Tracker.metaAtual = Tracker.metaAtual + ", Novo Recorde Pessoal"
    console.log(Tracker)
}