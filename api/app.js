const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index.js");
const errorHandler = require("./src/utils/middleware/errorHandler");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/", routes);
app.use(errorHandler);

module.exports = app;
