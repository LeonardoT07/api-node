'use strict';

// Exportação do modelo para uso
const repository = require('../repositories/modelo-repository');

// Controlers de GET
exports.get = async(req, res, next) => {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}
// GET passando o Slug
exports.getBySlug = async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }

}
// GET passando o ID
exports.getById = async(req, res, next) => {
    try{
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}


// Controler de Criação de Studio
exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message : "Modelo cadastrado!"
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha ao cadastrar modelo!"
        });
    }
};

// Controler de Update
exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({message : "Modelo atualizado!"});
    }catch (e) {
        res.status(500).send({
            message: "Falha ao atualizar o modelo!"
        });
    }
};

// Controler de Delete
exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id);
        res.status(200).send({message: "Modelo removido!"});
    } catch (e) {
        res.status(500).send({
            message: "Falha ao deletar o modelo!"
        });
    }
};