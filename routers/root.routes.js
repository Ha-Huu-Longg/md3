const authRouter = require("./auth.routes")
const categoryRouter = require("./categories.routes")
const userRouter = require("./users.routes")

const rootRouter = (app) => {
    authRouter(app)
    userRouter(app)
    categoryRouter(app)
}

module.exports = rootRouter