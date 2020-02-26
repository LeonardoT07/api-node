'use strict' //força o js a ser muito mais criterioso com o 

const express = require('express'); //para utillizar o MVC 
const router = express.Router(); // constante para a criação de rotas

// Rota Padrão da Aplicação (Retorna a aplicação)
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node Store API',
        version: "0.0.1"
    });
});

// exportar o arquivo através do require
module.exports = router;