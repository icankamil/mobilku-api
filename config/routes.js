const express = require("express");
const controllers = require("../app/controllers");
const api = express.Router();

api.post("/insert", controllers.dataController.insert);
api.get("/get/:id", controllers.dataController.get);
api.put("/update/:id", controllers.dataController.update);
api.get("/get", controllers.dataController.getAll);
api.delete("/delete/:id", controllers.dataController.delete);

api.use(controllers.main.onLost);
api.use(controllers.main.onError);

module.exports = api;
