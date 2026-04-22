import numeros from "./numeros.js"

function calcularMediana () {

let mediana;

if(!numeros) {

    console.log("Lista de números está vazia!")
    return
}

if(numeros.length %2 === 0){

    mediana = (numeros[numeros.length / 2] + numeros[numeros.length / 2] - 1) / 2

    } else {
        mediana = numeros[Math.floor(numeros.length / 2)]
    }

    return mediana
}

export default calcularMediana