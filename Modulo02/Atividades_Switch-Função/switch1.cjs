const prompt = require("prompt-sync")();

let filme = prompt("Qual o Genêro do Filme: ");
switch (filme) {
    case 'Ação' :
        console.log('Sala 1')
        break;
    case 'comédia' :
        console.log('Sala 2')
        break;
    case 'Terror' :
        console.log('Sala 3')
        break;
    case 'Comédia' :
        console.log('Sala 4')
        break;
    default:
        console.log('Genêro desconhecido.');
}