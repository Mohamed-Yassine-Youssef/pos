const asyncHandler = require("express-async-handler");
const demandeTransfert = require("../models/demandeTransfert");

// creer stock
const createDemande = asyncHandler(async (req, res) => {
  const newData = new demandeTransfert(req.body);
  await newData.save();
  res.status(201).json(newData);
});

module.exports = { createDemande };
