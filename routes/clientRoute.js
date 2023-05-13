const express = require("express");
const {
  registerClient,
  getClients,
} = require("../controllers/clientController");
const { protect, caissier } = require("../middleware/authMiddleware");
const clientRouter = express.Router();

clientRouter.post("/", protect, caissier, registerClient);
clientRouter.get("/getClients", getClients);
module.exports = clientRouter;
