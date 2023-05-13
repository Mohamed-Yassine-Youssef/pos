const express = require("express");
const {
  createObjectif,
  getObjectif,
} = require("../controllers/objectifMagasinController");
const objectifMagasinRouter = express.Router();

objectifMagasinRouter.post("/", createObjectif);
objectifMagasinRouter.get("/getObjectifMagasin", getObjectif);
module.exports = objectifMagasinRouter;
