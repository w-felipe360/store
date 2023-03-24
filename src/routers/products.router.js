const express = require('express');
const { productsControllers } = require('../controllers');

// const { testeValidation } = require('../middlewares/productsCodes');

const productsRouter = express.Router();

productsRouter.get('/', productsControllers.listProducts);

productsRouter.get('/:id', productsControllers.findProduct);

productsRouter.post('/', productsControllers.writeProduct);

productsRouter.put('/:id', productsControllers.updateProductById);

module.exports = productsRouter;