function removerBaralho(baralhos, idBar){
const indice = baralhos.findIndex(baralhos => baralhos.id === idBar);
if (indice !== -1){
    baralhos.splice(indice ,1);
    console.log("Baralho removido com sucesso");
    return true
};
};

export default removerBaralho