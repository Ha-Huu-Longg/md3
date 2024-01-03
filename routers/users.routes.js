const { getUsers, searchUsers, changeStatus } = require("../controllers/users.controllers");
const { verifyToken } = require("../middlewares/verifyToken");

const router = require("express").Router()

const userRouter = (app) => {
    router.get("/api/users", verifyToken, getUsers);
    router.get("/api/users/search", verifyToken, searchUsers);
    router.patch("/api/users/status", verifyToken, changeStatus);

    return app.use("/", router)
};
module.exports = userRouter