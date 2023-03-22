const express = require("express");
const morgan = require("morgan");
const routes = require("../config/routes");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));

app.use(routes);

module.exports = app;
