const prompt = require('prompt-sync')();

const valido = (nomeUsuario, codigoCracha) => {
    switch (true)  {
        case (nomeUsuario.length > 5  && codigoCracha > 1000):
            console.log("Acesso Concedido.")
            return true;
            break;
        case (nomeUsuario.length < 5 && codigoCracha < 1000):
            console.log("Acesso Negado.");
            return false;
            break;
        case (nomeUsuario.length > 5 && codigoCracha < 1000):
            console.log("Acesso Negado.")
            return false;
            break;
        case (nomeUsuario.length < 5 && codigoCracha > 1000):
            console.log("Acesso Negado.")
            return false;
            break;
        default:
            console.log('Desconhecido')
            return false;
    }
}

let nomeUsuario = prompt("Qual o nome do usuário: ")
let codigoCracha = parseFloat(prompt("Digite o código do crachá: "))

let resultado = valido(nomeUsuario, codigoCracha)
console.log(resultado)