const prompt = require('prompt-sync')();

let valorTotal = Number(prompt("Valor Total: "));
let totalPessoas1 = Number(prompt('Quantas pessoas irão dividir a conta: '));
let valorTaxa1;
valorTaxa1 =+ valorTotal;
let cada = 0;

let conta = {
    valorTaxa: valorTaxa1,
    valorTotal:valorTotal,
    totalPessoas:totalPessoas1,
    cadaPessoa:cada
}

if(totalPessoas1 > 0) {
    conta.valorTaxa *= (0.10)
    conta.valorTotal *= (1.10).toFixed()
    conta.cadaPessoa =+ (conta.valorTotal / totalPessoas1).toFixed()
    console.log(`Valor da Taxa: ${conta.valorTaxa}\nValor Total: ${conta.valorTotal}\nTotal de Pessoas: ${totalPessoas1}\nCada Pessoa pagará ${conta.cadaPessoa}`)
} else {
    console.log("Error")
}

