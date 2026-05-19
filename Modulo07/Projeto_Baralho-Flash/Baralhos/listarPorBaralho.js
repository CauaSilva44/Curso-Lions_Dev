function listarPorBaralho(baralhos, flashcards, idBaralho ) {
    let baralho = baralhos.find(b => b.id === idBaralho)

    if(!baralho) {
        console.log("Baralho não encontrado.")
        return
    }

    console.log("Baralho:", baralho.titulo)

    let encontrados = false

    for(let i = 0; i < flashcards.length; i++) {
        if(flashcards[i].idBaralho === idBaralho) {
            console.log(`ID: ${flashcards[i].id} | Pergunta: ${flashcards[i].pergunta} | Resposta: ${flashcards[i].resposta}`)
            encontrados = true
        }
    }

    if(!encontrados) {
        console.log("Nenhum flashcard encontrado para esse baralho.")
    }
}
 
export default listarPorBaralho