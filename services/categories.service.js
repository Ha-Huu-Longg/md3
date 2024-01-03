const db = require("../configs/db.config")

async function getCategoriesMySql() {
    try {
        const [data] = await db.execute("select * from categories");
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function addCategoriesMySql(name) {
    try {
        try {
            const [data] = await db.execute(`insert into categories (name) values (?)`, [name]);
            return data
        } catch (error) {
            return null
        }
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function changeNameMySql(id, name) {
    try {
        try {
            const [data] = await db.execute(`update categories set name = ? where id = ? `, [name, id]);
            return data
        } catch (error) {
            return null
        }
    } catch (error) {
        console.log(error);
    }
}

async function searchCategoriesMySql(textSearch) {
    try {
        try {
            const [data] = await db.execute(`select * from categories where name like '%${textSearch}%'`);
            return data
        } catch (error) {
            return null
        }
    } catch (error) {
        console.log(error);
    }
}

async function deleteCategoryMySql(id) {
    try {
        try {
            const [data] = await db.execute(`delete from categories where id = ?`, [id]);
            return data
        } catch (error) {
            return null
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCategoriesMySql,
    addCategoriesMySql,
    changeNameMySql,
    searchCategoriesMySql,
    deleteCategoryMySql
}