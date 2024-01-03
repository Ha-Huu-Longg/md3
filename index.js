const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rootRouter = require("./routers/root.routes");
require("dotenv").config();
// require("./configs/db.config");
// const rootRouter = require("./src/routers/root.routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

rootRouter(app)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});