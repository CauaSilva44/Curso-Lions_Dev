function listarFlashcards(flashcard) {
    if (flashcard.listarFlashcards === 0) {
        console.log("Nenhum flashcard encontrado.")
        return
    }

    flashcard.forEach(flashcard => {
        console.log(`\nPergunta: ${flashcard.pergunta}`)
        console.log(`Resposta: ${flashcard.resposta}`)
        console.log(`ID-Baralho: ${flashcard.idBaralho}`)
        console.log(`ID: ${flashcard.id}`)        
    });
}

export default listarFlashcards