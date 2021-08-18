'use strict'

const express = require('express');
const productCtrol = require('../controllers/product');
const userCtrol = require('../controllers/user');
const auth = require('../middlewares/auth');
const api = express.Router();


api.get('/product', productCtrol.getProducts);

api.get('/product/:productId', productCtrol.getProduct);

api.post('/product', productCtrol.saveProduct);

api.put('/product/:productId', productCtrol.updateProduct);

api.delete('/product/:productId', productCtrol.deleteProduct);

api.post('/signUp', userCtrol.signUp);
api.post('/signIn', userCtrol.signIn);

api.get('/private', auth.isAuth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' });
})


module.exports = api;