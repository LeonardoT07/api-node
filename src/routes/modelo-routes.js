'use strict' //força o js a ser muito mais criterioso com o 

const express = require('express'); //para utillizar o MVC 
const router = express.Router(); // constante para a criação de rotas
const controller = require('../controller/modelo-controller'); // constante para o controller
const authService = require('../services/auth-service');

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/gerenciar/:id', controller.getById);

router.post('/', authService.authorize, controller.post);
router.put('/update/:id', authService.authorize, controller.put);
router.delete('/delete/', authService.authorize, controller.delete);

// exportar o arquivo através do require
module.exports = router;