'use strict' //força o js a ser muito mais criterioso com o 

const express = require('express'); //para utillizar o MVC 
const router = express.Router(); // constante para a criação de rotas
const controller = require('../controller/teste-controller'); // constante para o controller

router.get('/', controller.get);

router.post('/', controller.post);
router.put('/update/:id', controller.put);
router.delete('/delete/', controller.delete);

// exportar o arquivo através do require
module.exports = router;