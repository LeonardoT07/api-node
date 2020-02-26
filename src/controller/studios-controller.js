'use strict';

// Exportação do modelo para uso
const repository = require('../repositories/studios-repository');

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
// GET passando Especializacao
exports.getByEspecializacao = async(req, res, next) => {
    try{
        const data = await repository.getByEspecializacao(req.params.especializacao);
        res.status(200).send(data);
    } catch(e){
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
}

// GET passando Endereco
exports.getByEndereco = async(req, res, next) => {
    try{
        const data = await repository.getByEndereco(req.params.endereco);
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
        await repository.delete(req.params.id);
        res.status(200).send({message: "Produto removido!"});
    } catch (e) {
        res.status(500).send({
            message: "Falha ao deletar o produto!"
        });
    }
};