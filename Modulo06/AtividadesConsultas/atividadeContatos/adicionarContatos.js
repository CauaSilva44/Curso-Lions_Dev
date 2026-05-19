function adicionarContato(contatos, novoContato) {
    let emailExiste = false
    for (let i = 0; i < contatos.length; i++) {
        if ( contatos[i].email === novoContato.email) {
            emailExiste = true
            break
        }
    }
    
    if (emailExiste) {
        emailExiste = false
        console.log("Erro: Este e-mail já está cadastrado!")
        return
    }
    if (contatos.length > 0) {
        let ultimoContato = contatos[contatos.length - 1]
        novoContato.id = ultimoContato.id + 1
    } else {
        novoContato.id = 1
    }

    contatos.push(novoContato)
    return
}

export default adicionarContato