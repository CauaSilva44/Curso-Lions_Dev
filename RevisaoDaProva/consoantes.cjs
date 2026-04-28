const prompt = require('prompt-sync')();

let texto = prompt("Digite o texto: ")
let contador = 0
let vogais = "aeiou"

texto=texto.toLowerCase()

for(let i = 0; i< texto.length; i++) {
    let letra = texto[i]
    
    if(letra >= "a" && letra <= "z" && !vogais.includes(letra)) {
        contador++
    }
}

console.log(`Quantidade de consoantes: ${contador}`)