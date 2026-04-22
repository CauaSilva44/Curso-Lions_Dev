const prompt = require('prompt-sync')();

let caixa = {
        nomeOperador: "Rob" ,
        saldo: 100 ,
        historicoTransaçoes: []
    }


function registrarVenda (valorVenda) {
    caixa.saldo += valorVenda;
    return caixa.saldo;
}

function registrarDespesa (valorDespesa) {
    caixa.saldo -= valorDespesa;
    return caixa.saldo;
}

let opcao;

do {
    console.log(`Qual a opção desejada: \n[V]-(Venda) \n[D]-(Despesa) \n[S]-(Sair) `);
    opcao = prompt(':').toUpperCase();
    switch (true) {
        case opcao == 'V':
            let valorVenda = Number(prompt("Digite o valor da Venda: "));
            registrarVenda(valorVenda);
            caixa.historicoTransaçoes.push('Entrada: ' + valorVenda);
            break;
        case opcao == 'D':
            let valorDespesa = Number(prompt('Digite o valor da Despesa: '));
            registrarDespesa(valorDespesa);
            caixa.historicoTransaçoes.push("Saida: " + valorDespesa);
            break;
        case opcao == 'S':
            console.log("Encerrando Processo...");
            break;
        default:
            console.log("Opção Inválida!");
    }
} while (opcao !== "S");

console.table(caixa)