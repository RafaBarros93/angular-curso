const { Router } = require("express");
const ContactController = require("../controllers/ContactController");

const routes = Router();

routes.get("/contacts", ContactController.view);
routes.post("/contacts/add", ContactController.create);
routes.put("/contacts/:id", ContactController.update);
routes.delete("/contacts/:id", ContactController.remove);

module.exports = routes;
