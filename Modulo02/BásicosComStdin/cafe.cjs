let resposta = false

console.log('Vocẽ gosta de café? ')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
    if (resposta == 'sim') {
        console.log("Então vocẽ gostaria de um pouco de café? ")
    } else if (resposta == 'nao') {
        console.log("Então vocẽ gostaria de um pouco de chá? ")
    }
}