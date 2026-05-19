const prompt = require ('prompt-sync')();

let Notas = Number(prompt("Qual foi sua nota na prova? "));
switch (true) {
    case (Notas >= 90 && Notas <= 100):
        console.log('A')
        console.log('Aprovado')
        break;
    case (Notas >= 80 && Notas <= 89):
        console.log('B')
        console.log('Aprovado')
        break;
    case (Notas >= 70 && Notas <= 79):
        console.log('C')
        console.log('Aprovado')
        break;
    case (Notas >= 60 && Notas <= 69):
        console.log('D')
        console.log('Reprovado')
        break;
    case (Notas >= 0 && Notas <= 59):
        console.log('F')
        console.log('Reprovado')
        break;
    default:
        console.log('Nota Inválida.')
}