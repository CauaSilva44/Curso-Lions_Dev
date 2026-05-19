function criarDados(estudantes, novoDado) {
    if(estudantes.length > 0) {
        let ultimoDado = estudantes[estudantes.length - 1]
        novoDado.id = ultimoDado.id + 1 
    } else {
        novoDado.id = 1
    }
    estudantes.push(novoDado);
    return true
};

export default criarDados