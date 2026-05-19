let nome = "Cauã"
let idade = 19

console.log('Como é seu nome? ')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade? ')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})

function processamento(nome, idade) {
    console.log(`Olá ${nome}, vocé tem ${idade} anos`)
}