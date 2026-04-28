const prompt = require('prompt-sync')();

let cadastroFun = {
    nome: prompt("Qual o nome do Usuário: "),
    cargo: prompt("Função na empresa: "),
    salarioAtual: prompt("Salario atual: ")
}

let revisaoAplicada = false 

if(cadastroFun.salarioAtual < 2500) {
    cadastroFun.salarioAtual *= 1.15
    cadastroFun[revisaoAplicada = true]
} else if (cadastroFun.salarioAtual >= 2500) {
    cadastroFun.salarioAtual *= 1.05
    cadastroFun[revisaoAplicada = true]
    
}

console.log(cadastroFun)