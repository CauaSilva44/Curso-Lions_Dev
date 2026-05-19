function atualizarBaralho (baralhos, BaralhoAtuali) {
    let encontrado = false

    for(let i = 0; i < baralhos.length; i++) {
        if(baralhos[i].id === BaralhoAtuali.idBar) {
            baralhos[i].titulo = BaralhoAtuali.titulo
            encontrado = true
            break
        }
    }

    if(encontrado) {
        console.log("Baralho atualizado!");
        return true
    } else {
        console.log("Baralho não encontrado.")
    }
}

export default atualizarBaralho