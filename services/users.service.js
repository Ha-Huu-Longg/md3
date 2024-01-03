const db = require("../configs/db.config")

async function checkUserByEmail(email) {
    try {
        const [findUser] = await db.execute("select * from users where email = ?", [email]);
        return findUser[0];
    } catch (error) {
        console.log(error);
    }
}

async function getAllUsers() {
    try {
        const [user] = await db.execute("select * from users where role = 0");
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function searchUserMySql(textSearch) {

    try {
        const [user] = await db.execute(`select * from users where role = 0 and email like '%${textSearch}%'`);
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function addUser(phone, password, email) {
    try {
        const [result] = await db.execute(
            "insert into users (phone, password, email) values (?, ?, ?)",
            [phone, password, email]
        );
        return result.insertId;
    } catch (error) {
        console.log(error);
    }
}

async function changeStatusMySql(userId) {
    try {
        const [user] = await db.execute(
            `select * from users where id = ?`,
            [userId]
        );
        const status = !user[0].status
        const [result] = await db.execute(`update users set status = ? where id = ?`, [status, userId])
        if (result.changedRows == 1) {
            return ["oke"]
        }
        return [];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    checkUserByEmail,
    addUser,
    getAllUsers,
    searchUserMySql,
    changeStatusMySql
}