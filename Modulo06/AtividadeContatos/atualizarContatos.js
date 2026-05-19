function atualizarContato(contatos, id, novosDados) {
    
    const index = contatos.findIndex(contato => contato.id === id)
    if (index === -1) {
        let emailEmUso = false
        for(let i = 0; i < contatos.length; i++) {
            let contatoAtual = contatos[1]

            if (contatoAtual.email === novosDados.email && contatoAtual.id !== id) {
                emailEmUso = true
                break
            }
        }

        if (emailEmUso) {
            console.log("Erro: O novo e-mail já está em uso por outro usuário!")
            return
        }
    }

    contatos[index].nome = novosDados.nome || contatos[index].nome
    contatos[index].email = novosDados.email || contatos[index].email

    if (novosDados.telefones.length > 0) {
        contatos[index].telefones = novosDados.telefones
    }

    return
}

export default atualizarContato