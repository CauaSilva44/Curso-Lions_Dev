const prompt = require('prompt-sync')();

let custo = parseInt(prompt("Qual foi o custo de produção? "))
let venda = parseInt(prompt("Qual foi o valor da venda? "))


function somar () {
    return venda - custo;
};

if (somar(venda - custo) < 500) {
    console.log('Atenção: Margem de lucro perigosamente baixa.')
} else if (somar(venda - custo) >= 500) {
    console.log(`Margem de lucro saudável: R$[${somar(venda - custo)}]`)
}