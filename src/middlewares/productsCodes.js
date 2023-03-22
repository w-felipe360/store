// // const joi = require('joi');
// const { schemaProduct } = require('../services/validations/schemas');

// const testeValidation = (req, res, next) => {
//   const { error } = schemaProduct.validate(req.body);
//   if (error) {
//     return next({ status: 400, message: error.message });
//   }
//   return res.status(201).json();
//   };

// module.exports = {
//   testeValidation,
// };

const validationProduct = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  if (name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  validationProduct,
};