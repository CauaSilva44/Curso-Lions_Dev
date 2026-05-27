import express, { Router } from "express";

import estanteDeLivros from "./livros.js";

const router = express();
const port = 3108;

router.use(express.json());

let id = 0;

// -- ENTRADA -- //
router.get(("/"), (req, res) => {
    res.status(200).send("Bem-vindo à API de Estudantes!");
});
//_______________//

// -- ADICIONAR -- //

router.post("/livros", (req, res) => {
    const {titulo, autor, ano} = req.body;

    if(!titulo || !autor || !ano) {
        return res.status(400).json({error: "Todos os campos são obrigatórios!!"});
    };

    const novoLivro = {
        id: estanteDeLivros.length + 1,
        titulo,
        autor,
        ano
    };

    estanteDeLivros.push(novoLivro);

    res.status(201).json("Livro adicionado à estante!");
});

//_________________//

// -- READ -- //

router.get("/livros", (req, res) => {
    if(estanteDeLivros.length === 0) {
        return res.status(404).json({message: "Nenhum livro encontrado"});
    } else {
        res.status(200).json(estanteDeLivros);
    };
});

//____________//

// -- UPDATE -- //

router.put("/livros/:id", (req, res) => {
    const {id} = (req.params);

    const livroAtualizado = estanteDeLivros.find(livro => livro.id === parseInt(id));

    if(!livroAtualizado) {
        return res.status(404).json({message: "Livro não encontrado"});
    }

    const {titulo, autor, ano} = req.body;

    if(titulo) {
        livroAtualizado.titulo = titulo;
    };
    if(autor) {
        livroAtualizado.autor = autor;
    };
    if(ano) {
        livroAtualizado.ano = ano;
    };

    res.status(200).json({message: "Livro atualizado com sucesso!"});
});

//______________//

// -- DELETE -- //
router.delete("/livros/:id", (req, res) => {
    const {id} = (req.params); 

    const deleteLivro = estanteDeLivros.findIndex(livro => livro.id === parseInt(id));

    if(!deleteLivro) {
        return res.status(404).json({message: "Livro não encontrado"});
    };

    estanteDeLivros.splice(deleteLivro, 1);

    res.status(200).json({message: "Livro deletado com sucesso!"});
});

//______________//

// -- BUSCAR LIVROS -- //
router.get("/livros/busca", (req, res) => {
    const termo = req.query.titulo;

    let livrosEncontrados = estanteDeLivros;

    if(titulo) {
        livrosEncontrados = livrosEncontrados.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
        res.status(200).json({message: "Busca realizada com sucesso!", livrosEncontrados});
    };
    if(autor) {
        livrosEncontrados = livrosEncontrados.filter(livro => livro.autor.toLowerCase().includes(autor.toLowerCase()));
        res.status(200).json({message: "Busca realizada com sucesso!", livrosEncontrados});
    };
    if(ano) {
        livrosEncontrados = livrosEncontrados.filter(livro => livro.ano === parseInt(ano));
        res.status(200).json({message: "Busca realizada com sucesso!", livrosEncontrados});
    };

    if(livrosEncontrados.length === 0) {
        return res.status(404).json({message: "Nenhum livro encontrado"});
    };

    res.status(200).json({message: "Busca realizada com sucesso!", livrosEncontrados});
});


//_____________________//

// -- INICIAR SERVIDOR -- //

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//_______________________//