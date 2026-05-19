const prompt = require('prompt-sync')();

let vagas = parseFloat(prompt("Qual será o limite de vagas? "))
let area = prompt("Qual é a área de estudo? ")

let mentor1 = {
    nome: 'Richard' ,
    areaDeAtu: area
}

let mentor2 = {
    nome:'Carlos' ,
    areaDeAtu: area
}

let projeto = {
    nomeCoord: 'Rob' ,
    vagasMax: vagas ,
    areaEstudo: area ,
    mentores: []
}

projeto.mentores.push(mentor1, mentor2)

let nomeCadastro = prompt("digite o nome do novo voluntário: ")
let areaCadastro = prompt("Digite a area de atuação do novo voluntário: ")

let cadastro = {
   nome: nomeCadastro ,
   areaDeAtu: areaCadastro
} 

let teste = cadastro.areaDeAtu == projeto.areaEstudo
let teste2 = cadastro.areaDeAtu != projeto.areaEstudo

if (projeto.mentores.length < projeto.vagasMax && teste) {
    projeto.mentores.push(cadastro)
    console.log(projeto)
    console.log(1)
} else if (projeto.mentores.lenght >= projeto.vagasMax || teste2 ) {
    let status = 'Status'
    projeto[status] = 'Bloqueado para inscrições'
    console.log(projeto)
    console.log(2)
}