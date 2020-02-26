'use strict';

const express = require('express'); //para utillizar o MVC 
const bodyParser = require('body-parser'); // auxilia a converter o corpo da requisição em JSON
const mongoose = require('mongoose'); // pacote para o gerenciamento do banco 
const config = require('./config');
const cors = require('cors');

const app = express(); // constante para a aplicação
const router = express.Router(); // constante para a criação de rotas

// Conexão com o Banco
mongoose.connect(config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true });

// Carregar os Models
const Studios = require('./models/studios-model');
const Customer = require('./models/customer-model');
const ModeloN = require('./models/modeloN-model');

// Carregar as rotas
const indexRoute = require('./routes/index-routes');
const studiosRoute = require('./routes/studios-routes');
const customerRoute = require('./routes/customer-routes');
const modeloRoute = require('./routes/modelo-routes');

// tamanho máximo de envio do arquivo JSON
app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
/*
app.use(function(req, res, next){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Origin', 'https://vollpilates-node.herokuapp.com');
    response.setHeader('Access-Control-Allow-Origin', 'https://vollpilates-node.herokuapp.com/studios');
    response.setHeader('Access-Control-Allow-Origin', 'origin, X-Requested-With, Content-Type, Accept, x-access-token');
    response.setHeader('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});*/

// Usando a rota com prefixo '/' da constante route
app.use('/', indexRoute);
app.use('/studios', studiosRoute);
app.use('/customers', customerRoute);
app.use('/modelos', modeloRoute);


// exportar o arquivo através do require
module.exports = app;