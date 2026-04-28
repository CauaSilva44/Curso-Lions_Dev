import PromptSync from "prompt-sync";
const prompt = PromptSync()

let numeros = []

while(numeros.length < 5) {
    let numero = Number(prompt('Número: '))
    numeros.push(numero)
    console.log(numeros.length)
}

numeros.sort((a, b) => a - b)

let segundoMenor = numeros[1]
let maior = numeros[numeros.length - 1]

let amplitude = maior - segundoMenor

console.log("Amplitude: ", amplitude)