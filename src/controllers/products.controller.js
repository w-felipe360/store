const { productsService } = require('../services');

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
module.exports = {
  listProducts,
  findProduct,
};