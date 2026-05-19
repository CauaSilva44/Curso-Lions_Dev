function removerFlashcard(flashcards,idFlas){
const indice=flashcards.findIndex(flashcards => flashcards.id === idFlas)
if (indice !== -1){
    flashcards.splice(indice ,1)
    console.log("Flashcard removido com sucesso")
    return true
}
}
export default removerFlashcard