const { productsService } = require('../services');
// const { testeValidation } = require('../middlewares/productsCodes');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) {
    return res.status(type).json(message);
  }
  return res.status(200).json(message);
};

const findProduct = async (req, res) => {
  const { id } = req.params;
  const { message } = await productsService.findById(id);
  if (message.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(message[0]);
};
const writeProduct = async (req, res) => {
  const { name } = req.body;
  const { status, message } = await productsService.writeNewProduct(name);
  if (status !== 201) return res.status(status).json({ message });
  return res.status(status).json(message);
};
const updateProductById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { erro, response, status, message } = await productsService.updateProductById(id, name);
 if (message) return res.status(status).json({ message });
  if (erro) return res.status(404).json(erro.message);
  return res.status(200).json(response);
};

module.exports = {
  listProducts,
  findProduct,
  writeProduct,
  updateProductById,
};