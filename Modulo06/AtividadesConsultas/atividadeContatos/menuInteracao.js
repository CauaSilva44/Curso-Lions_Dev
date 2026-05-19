import PromptSync from "prompt-sync";
const prompt = PromptSync();


import contatos from "./contatos.js";
import listarContatos from "./listarContatos.js";
import adicionarContato from "./adicionarContatos.js";
import atualizarContato from "./atualizarContatos.js";
import removerContato from "./removerContatos.js";

function mainMenu() {
    console.log("\n--- Menu de Contatos ---")
    console.log("1. Listar Contatos (READ)")
    console.log("2. Adicionar Contatos (CREATE)")
    console.log("3. Atualizar Contato (UPDATE)")
    console.log("4. Remover Contato (DELETE)")
    console.log("5. Sair")
}

let opcao;

while (opcao != "5") {
    mainMenu()
    opcao = prompt("Escolha uma opção: ")

    switch (opcao) {
        case '1':
            listarContatos(contatos);
            break
        case '2':

        let telefones = []
        let nome = prompt("nome: ");
        let email = prompt("Email: ");

        let addMais = 's' 
        while (addMais.toLowerCase() === 's') {
            telefones.push(prompt("Telefone: "))
            addMais = prompt("Adicionar outro telefone? (s/n): ")
        }

        let novoContato = {nome , telefones, email};

        const adicionou = adicionarContato(contatos, novoContato)
            if(adicionou) {
                console.log('contato adicionado com sucesso!')
            }
            break
        case '3':
            let idAtualizar = parseFloat(prompt("ID do contato a ser atualizado: "))

            let novosDados = {
                nome: prompt("Novo Nome (ou Enter para manter): "),
                email:prompt("Novo Email (ou Enter para manter): "),
                telefones: []
            }
            let atualizaTel = prompt("Deseja atualizar os telefones? (s/n): ");
            if (atualizaTel.toLowerCase() === 's') {
                let editMais = 's'
                while (editMais.toLowerCase() === 's') {
                novosDados.telefones.push(prompt("Novo Telefone: "));
                editMais = prompt("Adicionar outro Telefone? (s/n): ");
            }
        }
        
        const atualizou = atualizarContato(contatos, idAtualizar, novosDados);

        if(atualizou) {
            console.log('Contato atualizado com sucesso!');
        }

        break
        case '4':
            let idRemover = parseInt(prompt("ID do contato a ser removido: "))
            let confirmar = prompt("Tem certeza que deseja remover este contato? (s/n): ")
            if (confirmar.toLowerCase() === 's') {
                removerContato(contatos, idRemover)
                console.log('Contato removido com sucesso!')
            } else {
                console.log('Operação cancelada.')
            }
            break
        case '5':
            console.log('Encerrando..')
            break
        default:
            console.log("Codigo Errado.")
    }
}