
function listarBaralho() {
    if(baralhos.listarBaralho === 0) {
        console.log("Nenhum contato cadastrado.")
        return
    }

    baralhos.forEach(baralhos => {
        console.log(`\nTitulo: ${baralhos.titulo}`)
        console.log(`ID: ${baralhos.id}`)
    });
}

export default listarBaralho