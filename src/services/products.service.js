const { productsModel } = require('../models');
const { validateNewProduct, validateNewProductAgain } = require('./validations/validateValues');

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
const updateProductById = async (id, name) => {
  const { status, message } = validateNewProductAgain(name);
  if (message) return { status, message };
  const validId = await productsModel.findById(id);
    const erro = {
    status: 404,
    message: { message: 'Product not found' },
  };
  if (validId.length === 0) return { erro };
  await productsModel.updateProductById(id, name);
   const response = { id, name };
   return { response };
};

module.exports = {
  findAll,
  writeNewProduct,
  findById,
  updateProductById,
};
