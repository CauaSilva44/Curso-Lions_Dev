import PromptSync from "prompt-sync";
const prompt = PromptSync()

let numeros = []

while(numeros.length < 5) {
    let numero = Number(prompt('Número: '))
    numeros.push(numero)
    console.log(numeros.length)
}

let maior = Math.max(...numeros)
let segundoMaior = -Infinity

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > segundoMaior && numeros[i] < maior) {
        segundoMaior = numeros[i]
    }
}

console.log(`Segundo Maior: ${segundoMaior}`)