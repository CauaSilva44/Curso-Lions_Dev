const prompt = require('prompt-sync')();

let idade = parseFloat(prompt("Informe sua idade: "))
let vip = prompt("O usuário possui credencial Vip? (S/N): ") 


if(idade < 18) {
    console.log("Acesso Negado: Menor de idade.")
} else if (idade >= 18 && vip == "s") {
    console.log("Acesso Liberado para a Área VIP.")
} else if (idade >= 18 && vip == "n") {
    console.log("Acesso Liberado para a Pista Comum.")
} else {
    console.log('invalido')
}