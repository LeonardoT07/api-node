'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


// Controler de Criação de Studio
exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save()
}

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email, password: data.password
    });
    return res;
}