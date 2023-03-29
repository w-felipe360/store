const allSales =  [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-29T05:34:23.000Z"
  },
  {
    "saleId": 1,
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-29T05:34:23.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2023-03-29T05:34:23.000Z"
  }
]
const saleTestService = {
  "message": [
  {
    "saleId": 1,
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-27T20:41:55.000Z"
  },
  {
    "saleId": 1,
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-27T20:41:55.000Z"
  },
  {
    "saleId": 2,
    "productId": 3,
    "quantity": 15,
    "date": "2023-03-27T20:41:55.000Z"
  }
  ],
  "type": null
}
const newSale = [
  {
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-28T15:56:35.000Z"
  },
  {
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-28T15:56:35.000Z"
  }
]

const messageSaleId = 
 [
    {
    "productId": 1,
    "quantity": 5,
    "date": "2023-03-28T15:56:35.000Z"
  },
  {
    "productId": 2,
    "quantity": 10,
    "date": "2023-03-28T15:56:35.000Z"
  }
  ]
module.exports = {
    allSales,
  saleTestService,
  newSale,
  messageSaleId,
  }