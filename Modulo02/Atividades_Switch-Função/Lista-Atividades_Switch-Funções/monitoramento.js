const prompt = require('prompt-sync')();

const avaliarTemp = (temperaturas) => {
    switch (true) {
        case (media > 30):
            console.log("Alerta de aquecimento, temperaturas superiores á" , media, "graus celsius");
            temperaturas.push(media)
            return temperaturas
            break;
        case (media <= 30):
            console.log("Clima Estável.");
            temperaturas.push(media)
            return temperaturas
            break;
        default:
            console.log("Valores Desconhecidos.");
    }
}

let temp1 = parseFloat(prompt("Digite a primeira temperatura: "))
let temp2 = parseFloat(prompt("Digite a segunda temperatura: "))
let temp3 = parseFloat(prompt("Digite a terceira temperatura: "))

let media = (temp1 + temp2 + temp3) / 3

let temperaturas = []
temperaturas.push(temp1, temp2, temp3)


let resultado = (avaliarTemp(temperaturas))
console.log(resultado)