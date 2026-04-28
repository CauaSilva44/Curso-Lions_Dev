import PromptSync from "prompt-sync";
const prompt = PromptSync();

function conversao (opcao) {
    let calculo =+ opcao / 0.4536
    conversao(calculo)
    return
}



let opcao = Number(prompt("Digite o valor: "));

if(opcao <= 0) {
    console.log("Valor Inválido.")
} else {
    console.log(conversao)
}