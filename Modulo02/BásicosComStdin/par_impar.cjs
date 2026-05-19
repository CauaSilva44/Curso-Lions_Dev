let resposta 

console.log('Digite um número aqui ')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})

function processamento(resposta) {
   if (resposta == 0) {
      console.log("O número que vocé digitou é zero.")
   } else if (resposta % 2 == 0) {
      console.log("O número que vocẽ digitou é par.")
   } else {
      console.log("O número que vocẽ digitou é ímpar.")
   }
}