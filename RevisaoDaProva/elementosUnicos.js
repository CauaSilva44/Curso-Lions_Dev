import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numeros = []
let numerosUnicos = []

while(numeros.length < 10) {
    let numero = Number(prompt('Número: '))
    numeros.push(numero)
    console.log(numeros.length)
}

for (let i = 0; i < numeros.length; i++) {
    let contador = 0;
    for ( let a = 0; a < numeros.length; a++) {
        if (numeros[i] === numeros[a]) {
            contador++
        }
    }

    if (contador === 1) {
        numerosUnicos.push(numeros[i])
    }
}

console.log(numerosUnicos)