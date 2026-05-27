async function buscarUsuario() {
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const usuario = await resposta.json();

        console.log('usuario', usuario);
    } catch (erro) {
        console.error('Erro ao buscar usuário:', erro);
    };
};

buscarUsuario()