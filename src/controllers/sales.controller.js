const { salesService } = require('../services');

const writeSale = async (req, res) => {
  const { body } = req;
  const { status, message, result } = await salesService.writeNewSale(body);
  // console.log('mensagem', message, 'status', status);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(result);
};
const listSales = async (_req, res) => {
  const { type, message } = await salesService.findAllSales();

  if (type) {
    return res.status(type).json(message);
  }
  return res.status(200).json(message);
};
const findSale = async (req, res) => {
  const { id } = req.params;
  const resposta = await salesService.findSaleById(id);
  // console.log('resposta aqui:', resposta);
  if (resposta.length === 0) {
    return res.status(404).send({ message: 'Sale not found' });
  }
  res.status(200).json(resposta);
};

module.exports = {
  writeSale,
  listSales,
  findSale,
};