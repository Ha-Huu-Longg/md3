const { register, login } = require("../controllers/auth.controllers");
const { checkEmpty, checkEmailExist } = require("../middlewares/verifyToken");

const router = require("express").Router()

const authRouter = (app) => {
    router.post("/auth/register", checkEmpty, checkEmailExist, register)
    router.post("/auth/login", checkEmpty, login)

    return app.use("/", router)
}

module.exports = authRouter