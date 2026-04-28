import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numeros = []
let impar = 0

while(numeros.length < 5) {
    let numero = Number(prompt('Número: '))
    numeros.push(numero)
    console.log(numeros.length)
}

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 !==0 ) {
        impar += numeros[i]
    }
}
console.log(`Soma dos números ímpares é ${impar}`)