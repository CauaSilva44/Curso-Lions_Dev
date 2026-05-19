
function adicionarFlashcard (novoFlashcard, flashcards, baralhos) {

    let baralhoExiste = false
    for(let i = 0; i < baralhos.length; i++) {
        
        if(baralhos[i].id === novoFlashcard.idBaralho) {
            baralhoExiste = true
            break
        }                
    }
        if(!baralhoExiste) {
            console.log("Baralho não existe.");
            return false
        }

        if(flashcards.length > 0) {
            let ultimoFlashcard = flashcards[flashcards.length - 1]
            novoFlashcard.id = ultimoFlashcard.id + 1
        } else {
            novoFlashcard.id = 1
        }

        flashcards.push(novoFlashcard);
        return true
    }


    
export default adicionarFlashcard