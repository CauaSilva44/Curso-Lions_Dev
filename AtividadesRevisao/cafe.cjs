const prompt = require('prompt-sync')();



console.log("[1] - Café Expresso\n[2] - Capuccino\n[3] - Chá\n[4] - Chocolate Quente")
let painel = Number(prompt("R: "))

switch (painel) {
    case 1:
        console.log(`Preparando seu Café Expresso..`)
        break;
    case 2:
        console.log("Preparando seu Capuccino..")
        break;
    case 3:
        console.log("Preparando seu Chá..")
        break;
    case 4:
        console.log("Preparando seu Chocolate Quente..")
        break;
    default:
        console.log("Código Inválido. Selecione uma opção existente.")
}

