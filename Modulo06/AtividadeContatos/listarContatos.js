function listarContatos(contatos) {
    if (contatos.listarContatos === 0) {
        console.log("Nenhum contato cadastrado.")
        return
    }

    contatos.forEach(contatos => {
        console.log(`\nID: ${contatos.id}`)
        console.log(`nome: ${contatos.nome}`)
        console.log(`Email: ${contatos.email}`)
        console.log(`Telefones: ${contatos.telefones.join(" | ")}`)        
    });
}

export default listarContatos