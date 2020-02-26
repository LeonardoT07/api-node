'use strict'

const mongoose = require('mongoose');
const ModeloN = mongoose.model('ModeloN');

exports.get = async() => {
    const res = await ModeloN.find({}, 
    "franqueado slug produto whatsapp ativo");
    
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await ModeloN
    .findOne({
        slug: slug,
        ativo: true
    }, "franqueado slug produto whatsapp");

    return res;
}

exports.getById = async(id) => {
    const res = await ModeloN
        .findById(id);
    return res;
}


// Controler de Criação de Studio
exports.create = async(data) => {
    var modeloN = new ModeloN(data);
    await modeloN.save();
}

// Controler de UPDATE
exports.update = async(id, data) => {
    await ModeloN
        .findByIdAndUpdate(id, {
            $set: {
                produto: data.produto,
                whatsapp: data.whatsapp,
                ativo: data.ativo
            }
        });
}

// Controler de DELETE
exports.delete = async(id) => {
    await ModeloN
        .findByIdAndRemove(id);
}