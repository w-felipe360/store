const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const salesModel = require("../../../src/models/sales.model");
const productsService = require("../../../src/services/products.service");
const saleService = require("../../../src/services/sales.service");
const {
  productsMessageAndType,
  firstProductMessageAndType,
  allProducts,
  firstProduct,
} = require("../productsMocks");
const { newSale, messageSaleId } = require("../salesMocks");
describe("Product and Sale Services", () => {
  it("should return all products successfully", async function () {
    sinon.stub(productsModel, "findAll").resolves(allProducts);
    const result = await productsService.findAll();
    expect(result).to.be.deep.equal(productsMessageAndType);
  });
  it("should return a product based on its ID successfully", async function () {
    sinon.stub(productsModel, "findById").resolves(firstProduct);
    const result = await productsService.findById(1);
    expect(result).to.be.deep.equal(firstProductMessageAndType);
  });

  it("should return a sale based on its ID successfully", async function () {
    sinon.stub(salesModel, "findSaleById").resolves(newSale);
    const result = await saleService.findSaleById(1);
    expect(result).to.be.deep.equal(messageSaleId);
  });
  afterEach(sinon.restore);
});
