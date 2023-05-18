const express = require("express");
const { createDemande } = require("../controllers/demandeTransfertController");
const DemandeTransfertRouter = express.Router();

DemandeTransfertRouter.post("/", createDemande);
module.exports = DemandeTransfertRouter;
