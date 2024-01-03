const { addProductMySql, getProductsMySql, searchProductsMySql, deleteProductMySql, updateProudctMySql } = require("../services/products.service");

async function addProduct(req, res) {
    const product = req.body
    const data = await addProductMySql(product);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function getProducts(req, res) {
    const data = await getProductsMySql();
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function searchProducts(req, res) {
    const { textSearch } = req.query
    const data = await searchProductsMySql(textSearch);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function deleteProduct(req, res) {
    const { id } = req.params
    const data = await deleteProductMySql(id);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function updateProudct(req, res) {
    const product = req.body
    const data = await updateProudctMySql(product);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}


module.exports = {
    addProduct,
    getProducts,
    searchProducts,
    deleteProduct,
    updateProudct
};