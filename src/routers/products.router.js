const express = require('express');
const { productsControllers } = require('../controllers');

const productsRouter = express.Router();

productsRouter.get('/', productsControllers.listProducts);

productsRouter.get('/:id', productsControllers.findProduct);

module.exports = productsRouter;