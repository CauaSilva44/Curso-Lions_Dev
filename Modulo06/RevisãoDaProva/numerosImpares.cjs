const prompt = require('prompt-sync')();

let numeros = []
let impar = 0

while(numeros.length < 10) {
    let numero = Number(prompt('Número: '))
    numeros.push(numero)
}
console.log(numeros)

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 !==0 ) {
        impar++
    }
}

console.log(`A quantidade de números impares são: ${impar}`)