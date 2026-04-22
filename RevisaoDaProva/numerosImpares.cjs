const prompt = require('prompt-sync')();

let numeros = []

while(numeros.length < 9) {
    let numero = Number(prompt('Número: '))
    numeros.push(numero)
}
console.log(numeros)

for(let i = 0; i < numeros.length; i++) {
    if(numeros.length === 0) {
        console.log("Todos os numeros são zero")
    } 
}