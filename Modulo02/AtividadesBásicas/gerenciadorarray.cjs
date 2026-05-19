const prompt = require('prompt-sync')();

let listaTarefas = []

let tarefa1 = prompt("Digite a primeira tarefa: ")
let tarefa2 = prompt("Digite a segunda tarefa: ")
let tarefa3 = prompt("digite a terceira tarefa: ")

listaTarefas.push(tarefa1)
listaTarefas.push(tarefa2)
listaTarefas.push(tarefa3)

console.log(listaTarefas.lenght())