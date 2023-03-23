const joi = require('joi');

const schemaProduct = joi.string().min(5).required().messages({
  'string.min': '422#"name" length must be at least 5 characters long',
  'string.empty': '422#"name" length must be at least 5 characters long',
  'any.required': '400#"name" is required',
});
const vrau = joi.object({
  productId: joi.required().messages({
    'any.required': '400#"productId" is required',
  }),
  quantity: joi.number().integer().min(1).required()
.messages({
    'any.required': '400#"quantity" is required',
    'number.min': '422#"quantity" must be greater than or equal to 1',
  }),
});
const schemaSale = joi.array().items(vrau);

module.exports = {
  schemaProduct,
  schemaSale,
};