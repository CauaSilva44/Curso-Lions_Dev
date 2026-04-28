const prompt = require('prompt-sync')();

let listaDeValores = []

while(listaDeValores.length < 5) {
    let valor = Number(prompt("Valor: "))
    listaDeValores.push(valor)
    console.log(listaDeValores.length)
}

let menor = listaDeValores[0]

for(let i = 1; i < listaDeValores.length; i++) {
     if(listaDeValores[i] < menor) {
        menor = listaDeValores[i] 
     }
}
console.log(`Menor número é ${menor}`)