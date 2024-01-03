const { getCategoriesMySql, addCategoriesMySql, changeNameMySql, searchCategoriesMySql, deleteCategoryMySql } = require("../services/categories.service");

async function getCategories(req, res) {
    const data = await getCategoriesMySql();
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function addCategories(req, res) {
    const { name } = req.body
    const data = await addCategoriesMySql(name);
    if (data == null) {
        return res.status(200).json({
            data: null,
            message: "Trung name"
        })
    }
    return res.status(201).json({
        data,
        message: "Ban la admin",
    });
}

async function changeName(req, res) {
    const { id, name } = req.body
    const data = await changeNameMySql(id, name);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function searchCategories(req, res) {
    const { textSearch } = req.query
    const data = await searchCategoriesMySql(textSearch);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

async function deleteCategory(req, res) {
    const { id } = req.params
    const data = await deleteCategoryMySql(id);
    return res.status(200).json({
        data,
        message: "Ban la admin",
    });
}

module.exports = {
    getCategories,
    addCategories,
    changeName,
    searchCategories,
    deleteCategory
}