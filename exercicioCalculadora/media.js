import numeros from "./numeros.js";


function calcularMedia () {
    let soma;
    
    numeros.forEach((num) => {
        soma += num
    });

    if(!numeros) {
        console.log("A lista está Vazia!")
        return
    }

    return soma / numeros.length 
}

export default calcularMedia