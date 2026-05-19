const prompt = require("prompt-sync")();

let listaDeCompras = ["Arroz", "Feijão","Macarrão", "Carne"]

for(i = listaDeCompras[0]; i < listaDeCompras[3]; i++) {
    listaDeCompras.forEach((element) => console.log(`Item: [${element}]`))
}