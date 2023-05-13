const express = require("express");

const {
  createStock,
  getStock,
} = require("../controllers/stockAutreMagasinController");
const stockAutreMagasinRouter = express.Router();

stockAutreMagasinRouter.post("/", createStock);
stockAutreMagasinRouter.get("/getStockAutreMagasin", getStock);
module.exports = stockAutreMagasinRouter;
