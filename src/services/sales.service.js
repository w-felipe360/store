const { salesModel } = require('../models');
const { validateNewSale } = require('./validations/validateValues');
const { productsModel } = require('../models');

const validaId = async (products) => {
  const resultado = await Promise.all(
    products.map((produto) => { 
      console.log(produto);
      return productsModel.findById(produto.productId);
    }),
  );
  console.log('validaId', resultado);
  if (resultado.some((res) => res.length === 0)) {
    return { status: 404, message: 'Product not found' };
  }
};

const writeNewSale = async (products) => {
  const { status, message } = await validateNewSale(products);
  if (message) {
    return { status, message };
  }
  const valid = await validaId(products);
  if (valid) {
    return valid;
  }
  
  const id = await salesModel.insertNewSale();
  
  await Promise.all(
    products.map((produto) =>
      salesModel.insertProcutsInSale({ ...produto, id })),
  );
  return {
    status,
    result: { id, itemsSold: products,
    },
  };
};

module.exports = {
  writeNewSale,
};
