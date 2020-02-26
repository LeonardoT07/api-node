'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    mensagem: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Teste', schema);