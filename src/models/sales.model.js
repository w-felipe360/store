const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

const insertNewSale = async () => {
  const [data] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (now())',
  );
  return data.insertId;
};

const insertProcutsInSale = async ({ id, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [id, productId, quantity],
  );
};
const findAllSales = async () => {
  const [result] = await connection.execute(
    `
      SELECT 
      sales_products.sale_id as saleId, sales_products.product_id as productId,
      sales_products.quantity, sales.date
      FROM
      StoreManager.sales_products
      INNER JOIN
      StoreManager.sales ON sales_products.sale_id = sales.id
    `,
  );
  return result;
};

const findSaleById = async (id) => {
  const [result] = await connection.execute(
    `
    SELECT 
      product_id AS productId, quantity, date
    FROM
      StoreManager.sales_products
        INNER JOIN
      StoreManager.sales ON sales_products.sale_id = sales.id
    WHERE
      sales.id = ?`,
    [id],
  );
  return result;
};
module.exports = {
  insertNewSale,
  insertProcutsInSale,
  findAllSales,
  findSaleById,
};