const prompt = require('prompt-sync')();

let caminhaoCap = 0
let caixas = 0

while (true) {
    let peso = Number(prompt("Digite o peso da caixa: "))
    if(caminhaoCap + peso > 1000) {
        console.log("Limite de 1000kg atingido! Não é possível adicionar esta caixa. ");
        break;
    }

    caminhaoCap += peso;
    caixas++;

    console.log("Peso Atual:", caminhaoCap);
}  
console.log("Total carregado:", caminhaoCap )
console.log("Caixas carregadas:",caixas)
console.log("Pronto para Transporte.")