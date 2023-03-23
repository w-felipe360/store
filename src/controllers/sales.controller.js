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

module.exports = {
  writeSale,
};