const { schemaProduct } = require('./schemas');

const validateNewProduct = (name) => {
  const { error } = schemaProduct.validate(name);
  if (error) { 
    const [status, message] = error.message.split('#');
    
    return { status: +status, message };
  } 
  return { status: 201 };
};

module.exports = {
  validateNewProduct,
};