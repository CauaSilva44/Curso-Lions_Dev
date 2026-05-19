function atualizarFlashcard (flashcards, idFlashAtuali , novaPergunta, novaResposta) {
    let encontrado = false

    for(let i = 0; i < flashcards.length; i++) {
        if(flashcards[i].id === idFlashAtuali) {
            flashcards[i].pergunta = novaPergunta
            flashcards[i].resposta = novaResposta
            encontrado = true
            break
        }
    }

    if(encontrado) {
        console.log("Flashcard atualizado!");
        return true
    } else {
        console.log("Flashcard não encontrado.")
        return false
    }
}

export default atualizarFlashcard