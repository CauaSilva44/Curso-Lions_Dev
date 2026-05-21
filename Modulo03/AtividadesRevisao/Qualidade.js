import PromptSync from "prompt-sync";
const prompt = PromptSync();

let aprovadas = [];
let totais;
let peçasTotais = [];

while (peçasTotais.length <= 4) {
    let peças = Number(prompt("Digite o tamanho das peças produzidas: "));

    peçasTotais.push(peças);

    for(let i = 0; i < peçasTotais.length; i++) {
        if(peçasTotais[i] > 48 && peçasTotais[i] < 52) {
            aprovadas.push(peçasTotais[i]);
        };
    };
};

console.log(aprovadas.length)