'use strict' //força o js a ser muito mais criterioso com o 

const express = require('express'); //para utillizar o MVC 
const router = express.Router(); // constante para a criação de rotas
const controller = require('../controller/customer-controller'); // constante para o controller

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);

// exportar o arquivo através do require
module.exports = router;