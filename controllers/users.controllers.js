const { getAllUsers, searchUserMySql, changeStatusMySql } = require("../services/users.service");

async function getUsers(req, res) {
    const users = await getAllUsers();
    return res.status(200).json({
        users,
        message: "Ban la admin",
    });
}

async function searchUsers(req, res) {
    const { textSearch } = req.query
    const users = await searchUserMySql(textSearch)
    return res.status(200).json({
        users,
        message: "Ban la admin"
    })
}

async function changeStatus(req, res) {
    const { userId } = req.body
    const result = await changeStatusMySql(userId)
    return res.status(200).json({
        result,
        message: "Ban la admin"
    })
}

module.exports = {
    getUsers,
    searchUsers,
    changeStatus
    // updateStatusUser
};