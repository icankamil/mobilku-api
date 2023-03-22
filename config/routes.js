const express = require("express");
const controllers = require("../app/controllers");
const api = express.Router();

api.get("/get/:id", controllers.profileController.get);
api.post("/insert", controllers.profileController.insert);
api.put("/update/:id", controllers.profileController.update);
api.get("/get", controllers.profileController.getAll);
api.delete("/delete/:id", controllers.profileController.delete);

// api.use(controllers.main.onLost);
// api.use(controllers.main.onError);

module.exports = api;
