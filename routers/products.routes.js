const { addProduct, getProducts, searchProducts, deleteProduct, updateProudct } = require("../controllers/products.controllers");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router()

const productRouter = (app) => {
    router.get("/api/products", getProducts);
    router.get("/api/products/search", searchProducts);
    router.post("/api/products", verifyToken, addProduct)
    router.delete("/api/products/:id", verifyToken, deleteProduct)
    router.put("/api/products/", verifyToken, updateProudct)

    return app.use("/", router)
};
module.exports = productRouter