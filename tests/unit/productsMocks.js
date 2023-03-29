const allProducts = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América"
      }
    ];


const firstProduct = {
  "id": 1,
  "name": "Martelo de Thor"
};

const firstProductMessageAndType = {
  "message": {
    "id": 1,
    "name": "Martelo de Thor"
  },
  "type": null
};

const productsMessageAndType = {
  "message": [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    },
  ],
  "type": null,
};

module.exports = {
  allProducts,
  firstProduct,
  firstProductMessageAndType,
  productsMessageAndType,
}