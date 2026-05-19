const prompt = require("prompt-sync")();

let pintura = {
    nomePintura: '"A Noite Estrelada"' ,
    nomePintor: 'Van Gogh' ,
    anoPintura: 1889,
    fraseCurta: "'Simboliza a turbulência emocional do artista, a busca por paz interior e a espiritualidade.'"
}

console.log(`Minha pintura favorita é ${pintura.nomePintura}, ela foi feita por ${pintura.nomePintor} no ano de ${pintura.anoPintura}. E de acordo com pesquisas, seu significado ${pintura.fraseCurta}.`)