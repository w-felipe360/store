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

module.exports = {
  insertNewSale,
  insertProcutsInSale,
};