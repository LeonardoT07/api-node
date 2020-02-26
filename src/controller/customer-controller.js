'use strict';

// Exportação do modelo para uso
const repository = require('../repositories/customer-repository');
const md5 = require('md5');
const authService = require('../services/auth-service');

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            roles: ['user']
        });
        res.status(201).send({
            message : "Admin cadastrado!"
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha ao cadastrar admin"
        });
    }
};

exports.authenticate = async(req, res, next) => {
    try {
        const customer = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if(!customer){
            res.status(404).send({
                message: "usuário ou senha invalidos"
            });
            return;
        }

        const token = await authService.generateToken({
            email: customer.email,
            name: customer.name
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (e) {
        res.status(500).send({
            message: "Falha ao cadastrar admin"
        });
    }
};