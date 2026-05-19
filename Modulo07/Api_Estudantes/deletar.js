function deletarEstudante (estudantes, idEst) {
    const indice = estudantes.findIndex(estudantes => estudantes.id === idEst);
    if (indice !== -1) {
        estudantes.splice(indice, 1);
        console.log("Estudante removido com sucesso");
        return true;
    };
};

export default deletarEstudante