const { schemaProduct, schemaSale } = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = schemaProduct.validate(name);
  if (error) { 
    const [status, message] = error.message.split('#');
    
    return { status: +status, message };
  } 
  return { status: 201 };
};
const validateNewSale = (sale) => {
  const { error } = schemaSale.validate(sale);
  // console.log(error);
  if (error) {
    const [status, message] = error.message.split('#');

    return { status: +status, message };
  }
  return { status: 201 };
};
module.exports = {
  validateNewProduct,
  validateNewSale,
};