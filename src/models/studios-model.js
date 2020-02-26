'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    /*
     * o Schame cria automaticamente o ID
     *
     * type: tipo do campo
     * required: se é obrigatorio
     * trim: remover os espaços antes e depois do valor
     */
    unidade: { // 'title' do produto
        type: String,
        required: [true, "O campo unidade (referente ao Nome do studio) é obrigatório"],
        trim: true
    },
    logradouro: {
        type: String,
        required: [true, "O campo logradouro é obrigatório"],
        trim: true
    },
    cidade: {
        type: String,
        required: [true, "O campo cidade é obrigatório"],
        trim: true
    },
    estado: {
        type: String,
        required: [true, "O campo estado é obrigatório"],
        trim: true
    },
    /*
    endereco: {
        logradouro: {
            type: String,
            required: [false, "O campo logradouro é obrigatório"],
            trim: true
        },
        cidade: {
            type: String,
            required: [false, "O campo cidade é obrigatório"],
            trim: true
        },
        estado: {
            type: String,
            required: [false, "O campo estado é obrigatório"],
            trim: true
        }
    },*/
    email: {
        type: String,
        required: [true, "O campo email é obrigatório"],
        trim: true
    },
    telefone: {
        type: String,
        required: [true, "O campo telefone é obrigatório"],
        trim: true
    },
    whatsapp: {
        type: String,
        required: [true, "O campo whatsapp é obrigatório"],
        trim: true
    },
    especializacao: [ // Array de Strings com Especializacoes
        {type: String, required: true, trim: true}
    ],
    slug: { // Nome na Url
        type: String,
        required: [true, "O campo slug é obrigatório"],
        trim: true,
        index: true,
        unique: [true, "O campo slug deve ser unico"]
    },
    ativo:{
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = mongoose.model('Studios', schema);