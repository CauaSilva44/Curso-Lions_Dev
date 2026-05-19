const prompt = require('prompt-sync')();

let tempInicial = Number(prompt("Digite o valor de temperatura inicial: "))

for (let i = 0; i < 5 ;i++ ) {
    tempInicial += 2; 
    console.log(tempInicial)
}
