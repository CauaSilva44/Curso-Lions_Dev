import PromptSync from "prompt-sync";
const prompt = PromptSync()

// === IMPORTS DO BARALHO === //
import baralhos from "../Baralhos/dadosBaralhos.js";
import adicionarBaralho from "../Baralhos/adicionarBaralho.js";
import atualizarBaralho from "../Baralhos/atualizarBaralho.js";
import removerBaralho from "../Baralhos/deletarBaralho.js";
import listarBaralho from "../Baralhos/listarBaralho.js";
import listarPorBaralho from "../Baralhos/listarPorBaralho.js";

// === IMPORTS DO FLASHCARD === //
import flashcards from "../dadosFlashcards.js";
import adicionarFlashcard from "../Flashcards/adicionarFlashcard.js";
import atualizarFlashcard from "../Flashcards/atualizarFlashcard.js";
import removerFlashcard from "../Flashcards/deletarFlashcard.js";
import listarFlashcards from "../Flashcards/listarFlashcard.js";


/*
function mainMenu() {
    console.log('\n --- Menu ---')
    console.log('[1]-Listar Baralho')
    console.log('[2]-Listar Flashcard')
    console.log('[3]-Listar por Baralho')
    console.log('[4]-Adicionar Baralho')
    console.log('[5]-Adicionar Flashcard')
    console.log('[6]-Atualizar Baralho')
    console.log('[7]-Atualizar Flashcard')
    console.log('[8]-Remover Baralho')
    console.log('[9]-Remover Flashcard')
    console.log('[10]-Buscar por Pergunta')
    console.log('[11]-Buscar por Baralho')
    console.log('[12]-Encerrar Operação')
}

let opcao; 

while(opcao != 12) {
    mainMenu()
    opcao = prompt("Escolha uma Opção: ")

    switch(opcao) {
        // -- Listar -- //
        case '1':
            listarBaralho(baralhos)
            break
        case '2':
            listarFlashcards(flashcards)
            break
        case '3':
            let id = Number(prompt("Digite o ID do baralho: "))
            listarPorBaralho(baralhos, flashcards, id)
            
            break
        case '4':
        // --  Adicionar -- //

            let novoBaralho = {
                titulo: prompt("Qual será o titulo do Baralho? ")
            }
            const adicionouBar = adicionarBaralho(novoBaralho, baralhos)
            if(adicionouBar) {
                console.log('baralho Registrado.')
            }
            break
        case '5':
            let novoFlashcard = {
                pergunta: prompt("Qual a pergunta do Flashcard: "),
                resposta: prompt("Resposta do Flashcard: "),
                idBaralho: Number(prompt("Qual a id do Baralho: "))
            }
            
            const adicionouFlas = adicionarFlashcard(novoFlashcard, flashcards, baralhos)
            if(adicionouFlas) {
                console.log('Flashcard Registrado.')
            }
            break
        case '6':
            // -- Atualizar -- //

            let idBaralhoAtuali = Number(prompt("Qual o id à ser atualizado: "))
            let atualizacaoBaralho = {
                titulo: prompt("Qual o novo titulo do Baralho: ")
            }

            const atualizouBar = atualizarBaralho(baralhos, idBaralhoAtuali, atualizacaoBaralho)
            if(atualizouBar) {
                console.log("Baralho atualizado.")
            } console.log(baralhos)
            break
        case '7':
            let idFlashAtuali = Number(prompt("Qual a id à ser atualizado: "))
            let novaPergunta = prompt("Qual a pergunta: ")
            let novaResposta = prompt("Qual a resposta: ")
            
            const atualizouFlas = atualizarFlashcard(flashcards, idFlashAtuali , novaPergunta, novaResposta)
            if(atualizouFlas) {
                console.log("Flashcard Atualizado.")
            } console.log(flashcards)
            break
        case '8':
            // -- Remover -- //
            let idBar = Number(prompt("Qual a id á ser apagado: "))
            let pergunta1 = prompt("Vocẽ tem certeza? ")
            
            if(pergunta1 === "s") {
                const deletou = removerBaralho(idBar,baralhos)
            }
            
            break
        case '9':
            let idFlas = Number(prompt("Qual o id á ser removido:"))
            let pergunta2 = prompt("Vocẽ tem certeza? ")

            if(pergunta2 === "s") {
                const deletouFlas = removerFlashcard(idFlas, baralhos)
            }
            
            break
        case '10':
            
            break
        case '11':
            
            break
        case '12':
            // -- Encerrar Operação -- //
            console.log("Encerrando...")
            break
        default:
            console.log("Operação Invalída.")
    }
}

*/