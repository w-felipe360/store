const express = require('express');
const { salesControllers } = require('../controllers');

const salesRouter = express.Router();

salesRouter.post('/', salesControllers.writeSale);

// salesRouter.get('/', salesControllers.listSales);

// salesRouter.get('/:id', salesControllers.findSale);

module.exports = salesRouter;
