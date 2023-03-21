const express = require("express");
const morgan = require("morgan");
const routes = require("../config/routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(routes);

module.exports = app;
