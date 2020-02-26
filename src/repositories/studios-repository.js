'use strict'

const mongoose = require('mongoose');
const Studios = mongoose.model('Studios');

exports.get = async() => {
    const res = await Studios.find({}, 
    "unidade logradouro cidade estado telefone whatsapp email especializacao slug ativo");
    
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Studios
    .findOne({
        slug: slug,
    }, "unidade especializacao endereco slug");

    return res;
}

exports.getById = async(id) => {
    const res = await Studios
        .findById(id);
    return res;
}

exports.getByEspecializacao = async(especializacao) => {
    const res = await Studios
    .find({
        especializacao: especializacao,
        ativo: true
    }, "unidade especializacao slug");
    return res;
}

exports.getByEndereco = async(endereco) => {
    console.log("1 - " + endereco);
    const res = await Studios
    .find({
        endereco: endereco
    });
    console.log("2 - " + endereco);
    return res;
}

// Controler de Criação de Studio
exports.create = async(data) => {
    var studios = new Studios(data);
    await studios.save();
}

// Controler de UPDATE
exports.update = async(id, data) => {
    await Studios
        .findByIdAndUpdate(id, {
            $set: {
                telefone: data.telefone,
                whatsapp: data.whatsapp,
                ativo: data.ativo
            }
        });
}

// Controler de DELETE
exports.delete = async(id) => {
    await Studios
        .findByIdAndRemove(id);
}