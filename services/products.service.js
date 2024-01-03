const db = require("../configs/db.config")

async function addProductMySql(product) {
    try {
        const [result] = await db.execute(
            "insert into products (category_id, name, image, price, description, stock) values (?, ?, ?, ?, ?, ?)",
            [parseInt(product.category_id), product.name, product.image, parseInt(product.price), product.description, parseInt(product.stock)]
        );
        if (result.insertId) {
            return result
        } else {
            return null
        }
    } catch (error) {
        console.log(error);
    }
}

async function getProductsMySql() {
    try {
        const [result] = await db.execute(
            "select * from products",
        );
        return result
    } catch (error) {
        console.log(error);
    }
}

async function searchProductsMySql(textSearch) {
    try {
        const [result] = await db.execute(
            `select * from products where name like '%${textSearch}%'`,
        );
        return result
    } catch (error) {
        console.log(error);
    }
}

async function deleteProductMySql(id) {
    try {
        const [result] = await db.execute(
            `delete from products where id = ?`, [id]
        );
        return result
    } catch (error) {
        console.log(error);
    }
}

async function updateProudctMySql(product) {
    try {
        const [result] = await db.execute(
            `update products set category_id = ?, name = ?, image = ?, price = ?, description = ?, stock = ? where id = ?`,
            [parseInt(product.category_id), product.name, product.image, parseInt(product.price),
            product.description, parseInt(product.stock), parseInt(product.id)]
        );
        return result
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    addProductMySql,
    getProductsMySql,
    searchProductsMySql,
    deleteProductMySql,
    updateProudctMySql
}