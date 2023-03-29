const { expect } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const productsController = require("../../../src/controllers/products.controller");
const salesController = require("../../../src/controllers/sales.controller");
const productsService = require("../../../src/services/products.service");
const salesService = require("../../../src/services/sales.service");
const { allProducts } = require("../productsMocks");
const { allSales } = require('../salesMocks')

chai.use(sinonChai);

describe("Controllers", () => {
  describe("Products Controller", () => {
    describe("listProducts", () => {
      it("should return all products", async function () {
        const response = {};
        const request = {};

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon
          .stub(productsService, "findAll")
          .resolves({ status: 200, message: allProducts[0] });

        await productsController.listProducts(request, response);
        expect(response.status).to.have.been.calledWith(200);
      });
    });

    describe("findProduct", () => {
      it("should return a product based on its id", async function () {
        const response = {};
        const request = { params: { id: 1 } };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon
          .stub(productsService, "findById")
          .resolves({ status: 200, message: allProducts[0] });

        await productsController.findProduct(request, response);
        expect(response.status).to.have.been.calledWith(200);
      });
    });
  });

  describe("Sales Controller", () => {
    describe("listSales", () => {
      it("should return all sales", async function () {
        const response = {};
        const request = {};
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(salesService, "findAllSales").resolves(allSales);
        await salesController.listSales(request, response);
      });
    });

    describe("findSaleById", () => {
      it("should return a sale based on its id", async function () {
        const response = {};
        const request = { params: { id: 1 } };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon
          .stub(salesService, "findSaleById")
          .resolves({ status: 200, message: allSales[0] });

        await salesController.findSale(request, response);
        expect(response.status).to.have.been.calledWith(200);
        expect(response.json).to.have.been.calledWith({
          status: 200,
          message: allSales[0],
        });
      });
    });
  });

  afterEach(() => {
    sinon.restore();
  });
});
