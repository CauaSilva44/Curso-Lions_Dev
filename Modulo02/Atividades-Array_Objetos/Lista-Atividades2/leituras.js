const prompt = require('prompt-sync')();

let nome = prompt ("Qual o nome do aluno: ")

let BookTracker = {
    nomeAluno: nome ,
    pontosLeitura: 10 ,
    historicoDias: [] 
}

let diaLido1 = {
    data: 10 ,
    paginasLidas: 37 ,
}
let diaLido2 = {
    data: 14 ,
    paginasLidas: 42
} 
BookTracker.historicoDias.push(diaLido1, diaLido2)

let leituraHoje = parseFloat(prompt("Informe a data: "))
let leituraHojeP = parseFloat(prompt("Quantas paginas foram lidas? "))

let diaLido3 = {
    data: leituraHoje ,
    paginasLidas: leituraHojeP
}

BookTracker.historicoDias.push(diaLido3)

if ( BookTracker.historicoDias[2].paginasLidas > 50 && BookTracker.pontosLeitura > 0) {
    BookTracker.pontosLeitura = BookTracker.pontosLeitura * 2 
    BookTracker.historicoDias[2].data = BookTracker.historicoDias[2].data = leituraHoje + " - Super Leitor!" 
    console.log(BookTracker)
} else if ( BookTracker.historicoDias[2].paginasLidas < 10) {
    BookTracker.pontosLeitura = BookTracker.pontosLeitura * 0.5
    console.log(BookTracker)
}