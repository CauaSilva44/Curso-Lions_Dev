const prompt = require('prompt-sync')();

let nome = prompt("Por favor, digite seu nome: ")

let viagem1 = {
    destino: "Chile" ,
    quantidade: 1650
}
let viagem2 = {
    destino: "Argentina" ,
    quantidade: 1700
}
let Perfil = {
    nomeCliente: nome ,
    historicoViagens: []
}

Perfil.historicoViagens.push(viagem1, viagem2)

let destinovoo3 = prompt("Digite o destino: ")
let quantidadevoo3 = parseFloat(prompt("Digite a quantidade de milhas acumuladas da viagem: "))

let viagem3 = {
    destino: destinovoo3 ,
    quantidade: quantidadevoo3 ,
}

Perfil.historicoViagens.push(viagem3)

let soma = Perfil.historicoViagens[0].quantidade + Perfil.historicoViagens[1].quantidade + Perfil.historicoViagens[2].quantidade

if (soma > 5000) {
    let categoria = 'Categoria' ;
    Perfil[categoria] = 'Platinum'
    console.log("Parábens! Seu perfil foi atualizado para versão Platinum! ")
} else if (soma < 5000) {
    let categoria = 'Categoria' ;
    Perfil[categoria] = 'Gold'
    let subtracao = 5000 - soma
    console.log(`Faltam exatamente ${subtracao} milhas para haver a atualização de seu Perfil.`)
}console.log(Perfil)