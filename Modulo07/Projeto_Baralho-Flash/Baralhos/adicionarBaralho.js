
function adicionarBaralho (novoBaralho, baralhos) {

    if(baralhos.length > 0) {
        let ultimoBaralho = baralhos[baralhos.length - 1]
        novoBaralho.id = ultimoBaralho.id + 1 
    } else {
        novoBaralho.id = 1
    }
    baralhos.push(novoBaralho);
    return true
}

export default adicionarBaralho