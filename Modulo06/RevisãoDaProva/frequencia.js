import PromptSync from "prompt-sync";
const prompt = PromptSync();

let frase = prompt("Digite a frase: ")
let palavras = frase.split(" ")
let contagem = {}

for(let i = 0; i < palavras.length; i++ ) {
    let palavra = palavras[i]
    if(contagem[palavra]) {
        contagem[palavra]++
    } else {
        contagem[palavra] = 1
    }
}

console.log(contagem)