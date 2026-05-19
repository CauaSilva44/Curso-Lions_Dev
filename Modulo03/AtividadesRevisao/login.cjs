const prompt = require('prompt-sync')();

let login = "admin2024";
let tentativasRest = 5
let tentativa = prompt("Digite a senha: ")


while(login != tentativa && tentativasRest > 0 ) {
    tentativasRest--
    console.log(`Tentativas Restantes: ${tentativasRest}`)
    tentativa = prompt("Senha Incorreta. Tente Novamente: ")

    if(tentativasRest === 0) {
        console.log("Tentativas Zeradas. Tente Novamente mais tarde.")
    }
    if(tentativa == login) {
        console.log("Acesso Autorizado.")
    }
}