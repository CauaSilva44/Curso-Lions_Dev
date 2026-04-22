const prompt = require('prompt-sync')();

let login = 'admin2024'
let tentativa; 
let restante = 5;
let senha = parseFloat(prompt("Digite a senha: "))


while (tentativa < restante) {
    
    for(let i = 0; i < restante; i++) {
        senha = parseFloat(prompt("Digite a senha: "))

        if(senha === login) {
            console.log("Acesso Autorizado!")
            break
        } else {
            console.log(`Senha Incorreta. Restam ${5 - tentativa}`)
        }
        
        if (tentativa === 5) {
            console.log("Conta Bloqueada!")
        }
    }
}