import express, {Router} from "express";

import filmes from "./filmes.js";

const router = express();
const port = 3108;

router.use(express.json());

let id = 0

// -- Entrada -- //

router.get(("/"), (req, res) => {
    res.status(200).send("Bem-vindo à API de Filmes!");
});

//_______________//

// -- CREATE -- //

router.post("/filmes", (req, res) => {
    const {titulo, diretor, ano , genero} = req.body;

    if(!titulo || !diretor || !ano || !genero) {
        res.status(400).json({error: "Todos os campos devem ser preenchidos!"});
    };

    const novoFilme = {
        id: filmes.length + 1,
        titulo,
        diretor,
        ano,
        genero
    };

    filmes.push(novoFilme);

    res.status(201).json("Filme adicionado com sucesso!");

});

//______________//

// -- READ -- //

router.get("/filmes", (req, res) => {

    if(filmes === 0) {
        res.status(404).json({error: "Nenhum filme encontrado na lista"});
    } else {
        res.status(200).send(filmes);
    };
});

//____________//

// -- UPDATE -- //

router.put("/filmes/:id", (req, res) => {
    const {id} = (req.params);

    const filmeAtualizado = filmes.find(filmes => filmes.id === parseInt(id))

    if(!filmeAtualizado) {
        res.status(404).json({error: "ID não encontrado."});
    };

    const {titulo, diretor, ano, genero} = req.body;

    if(titulo) {
        filmeAtualizado.titulo = titulo;
    };
    if(diretor) {
        filmeAtualizado.diretor = diretor;
    };
    if(ano) {
        filmeAtualizado.ano = ano;
    };
    if(genero) {
        filmeAtualizado.genero = genero;
    };

    res.status(200).json({message: "O Filme foi Atualizado!"});

});

//______________//

// -- DELETE -- //

router.delete("/filmes/:id", (req, res) => {
    const {id} = (req.params);

    const index = filmes.findIndex(filmes => filmes.id === parseInt(id));

    if(index === -1) {
        res.status(404).json({error: "ID não encontrado."});
    };

    filmes.splice(index, 1);

    res.status(200).json({message: "O Filme Deletado"});
});

//______________//

// -- Servidor Iniciado -- //

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//_________________________//