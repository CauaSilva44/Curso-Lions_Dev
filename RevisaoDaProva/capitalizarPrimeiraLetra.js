import PromptSync from "prompt-sync";
const prompt =  PromptSync()

let frase = prompt("Digite a frase: ")

let palavras = frase.split(" ")
let resultado = ""

for(let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]

    resultado +=
    palavra[0].toUpperCase() +
    palavra.slice(1) + " "
}
console.log(resultado) 