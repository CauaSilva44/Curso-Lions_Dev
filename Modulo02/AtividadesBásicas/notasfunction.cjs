const prompt = require('prompt-sync')();

let prova1 = parseFloat(prompt("Digite a nota da primeira prova: "))
let prova2 = parseFloat(prompt("Digite a nota da segunda prova: "))

const somar = () => {
    return (prova1 + prova2) / 2;
};

console.log(somar(prova1, prova2))