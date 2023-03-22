const { productsModel } = require('../models');
const { validateNewProduct } = require('./validations/validateValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (id) => {
  const product = await productsModel.findById(id);
  return { type: null, message: product };
};
const writeNewProduct = async (name) => {
  const { status, message } = await validateNewProduct(name);
  if (message) {
    return { status, message };
  }
  const newProduct = await productsModel.insertNewProduct(name);
  return { status: 201, message: newProduct };
};
module.exports = {
  findAll,
  writeNewProduct,
  findById,
};
