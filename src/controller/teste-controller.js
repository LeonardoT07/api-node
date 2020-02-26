'use strict';

// Exportação do modelo para uso
const repository = require('../repositories/teste-repository');

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

// Controler de Criação de Studio
exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({
            message : "Produto cadastrado!"
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha ao cadastrar produto!"
        });
    }
};

// Controler de Update
exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id, req.body);
        res.status(200).send({message : "Produto atualizado!"});
    }catch (e) {
        res.status(500).send({
            message: "Falha ao atualizar o produto!"
        });
    }
};

// Controler de Delete
exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.body.id);
        res.status(200).send({message: "Produto removido!"});
    } catch (e) {
        res.status(500).send({
            message: "Falha ao deletar o produto!"
        });
    }
};