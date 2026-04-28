const prompt= require('prompt-sync')();

let texto = prompt("Digite o texto: ")
let resultado = ""

for(let i =0; i < texto.length; i++) {
    if(texto[i] !== " ") {
        resultado += texto[i]
    }
}

console.log(resultado)