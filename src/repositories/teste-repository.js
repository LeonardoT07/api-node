'use strict'

const mongoose = require('mongoose');
const Teste = mongoose.model('Teste');

exports.get = async() => {
    const res = await Teste.find({});
    
    return res;
}

// Controler de Criação de Studio
exports.create = async(data) => {
    var testeapi = new Teste(data);
    await testeapi.save();
}

// Controler de UPDATE
exports.update = async(id, data) => {
    await Teste
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                mensagem: data.mensagem
            }
        });
}

// Controler de DELETE
exports.delete = async(id) => {
    await Teste
        .findByIdAndRemove(id);
}