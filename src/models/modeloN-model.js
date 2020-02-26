'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const schema = new Schema({
    franqueado: { // Nome do franqueado
        type: String,
        required: [true, 'O nome do modelo é obrigatório'],
        trim: true
    },
    slug: { // Nome na Url
        type: String,
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index: true,
        unique: [true, 'O slug deve deve ser unico'],
    },
    produto: [{
        nome: {
            type: String, 
            required: [true, 'O nome do produto é obrigatorio'], 
            trim: true
        },
        link: {
            type: String, 
            required: [true, 'O link do produto é obrigatorio'], 
            trim: true, 
            unique: [true, 'O link ou formulário do produto deve ser único']
        }
    }],
    whatsapp: {
        type: String,
        required: [true, 'O whatsapp é obrigatorio'],
        trim: true
    },
    ativo:{
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('ModeloN', schema);