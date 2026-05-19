const prompt = require('prompt-sync')();

let temperaturaAgua = 90

while (temperaturaAgua < 100) {
    valor = temperaturaAgua
    console.log(`A Temperatura está em ${valor} graus. Aquecendo...`)
    temperaturaAgua = temperaturaAgua + 2
}