const prompt = require ('prompt-sync')();

let cofre = 9876
let tentativa = parseFloat(prompt("Favor insira a senha: "))

while ( tentativa != cofre) {
    console.log("Acesso negado: Senha incorreta")
    tentativa = parseFloat(prompt("Insira a senha novamente: "))
} console.log("Cofre liberado com sucesso.")