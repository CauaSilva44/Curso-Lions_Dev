import PromptSync from "prompt-sync";
const prompt = PromptSync();

let palavra1 = prompt("Primeira palavra: ")
let palavra2 = prompt("Segunda palavra: ")

let p1 = palavra1.toLowerCase(" ").split(" ").sort().join(" ")
let p2 = palavra2.toLowerCase(" ").split(" ").sort().join(" ")

if(p1 === p2) {
    console.log("São Anagramas")
} else {
    console.log("Não são Anagramas")
}