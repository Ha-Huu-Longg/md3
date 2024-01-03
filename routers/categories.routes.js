const { getCategories, addCategories, changeName, searchCategories, deleteCategory } = require("../controllers/categories.controller");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router()

const categoryRouter = (app) => {
    router.get("/api/categories", getCategories);
    router.post("/api/categories", verifyToken, addCategories)
    router.get("/api/categories/search", searchCategories);
    router.patch("/api/categories", verifyToken, changeName);
    router.delete("/api/categories/:id", verifyToken, deleteCategory);

    return app.use("/", router)
};
module.exports = categoryRouter