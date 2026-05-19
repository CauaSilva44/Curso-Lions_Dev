import PromptSync from "prompt-sync";
const prompt = PromptSync();

import numeros from "./numeros.js";
import Adicionar from "./adicionar.js";
import Remover from "./remover.js";
import calcularMedia from "./media.js";
import calcularMediana from "./mediana.js";

let conta = 1
let num = 0

do {
    console.log(" [1]-(Adicionar)\n[2]-(Remover)\n[3]-(listar)\n[4]-(Media)\n[5]-(Mediana)\n[0] para Encerrar ");
    conta = Number(prompt(": "))
    switch (conta) {
        case 1:
            console.log("Qual número você desja adicionar a lista? ")
            num = Number(prompt('R: '));
            Adicionar(num);
            break;
        case 2:
            Remover();
            break;
        case 3:
            console.table(numeros);
            break;
        case 4:
            console.log(`A média é: ${calcularMedia()}`);
            break;
        case 5:
            numeros.sort((a, b) => a - b)
            console.log(`A mediana é: ${calcularMediana()}`);
            break;
        case 0:
            console.log("Encerrando...");
            break;
        default:
            break;
    }
} while (conta != 0)

console.log(numeros)