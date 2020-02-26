'use strict' //força o js a ser muito mais criterioso com o 

const express = require('express'); //para utillizar o MVC 
const router = express.Router(); // constante para a criação de rotas
const controller = require('../controller/studios-controller'); // constante para o controller
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/gerenciar/:id', controller.getById);
router.get('/especializacao/:especializacao', controller.getByEspecializacao);
router.get('/endereco/:endereco', controller.getByEndereco);

router.post('/', controller.post);
router.put('/update/:id', controller.put);
router.delete('/delete/:id', controller.delete);

// exportar o arquivo através do require
module.exports = router;