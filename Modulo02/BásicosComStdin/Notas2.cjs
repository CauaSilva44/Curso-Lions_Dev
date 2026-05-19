let resposta1 
let resposta2 

console.log('Quando terá ENEM? ')
process.stdin.once('data', function(data) {
    resposta1 = data.toString().trim()
    console.log('e que hora devo chegar? ')

    process.stdin.once('data', function(data) {
        resposta2 = parseFloat(data.toString().trim())
        processamento(resposta1, resposta2)
        process.exit()
    })
})

function processamento(resposta1, resposta2) {
    console.log(`Então devo chegar no dia ${resposta1} as ${resposta2} certo?`)
}