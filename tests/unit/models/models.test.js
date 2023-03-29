const { expect } = require("chai");
const sinon = require("sinon");

const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || "StoreManager",
});

const productsModel = require("../../../src/models/products.model");
const { allProducts, firstProduct } = require("../productsMocks");

describe("Products Model", () => {
  it("should return all products successfully", async function () {
    sinon.stub(connection, "execute").resolves(allProducts);
    const result = await productsModel.findAll();
    expect(result).to.deep.equal(allProducts);
  });
  it("should return a product based on its ID successfully", async () => {
    sinon.stub(connection, "execute").resolves({ rows: [firstProduct] });
    const result = await productsModel.findById(1);
    expect(result[0]).to.deep.equal(firstProduct);
  });

  afterEach(sinon.restore);
});
