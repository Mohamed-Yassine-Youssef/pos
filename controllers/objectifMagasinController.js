const asyncHandler = require("express-async-handler");
const ObjectifMagasin = require("../models/objectifMagasinModel");

// creer objectif
const createObjectif = asyncHandler(async (req, res) => {
  const newData = new ObjectifMagasin(req.body);
  await newData.save();
  res.status(201).json(newData);
});
// get objectif
const getObjectif = asyncHandler(async (req, res) => {
  const Data = await ObjectifMagasin.find();
  res.status(200).json(Data);
});

module.exports = { createObjectif, getObjectif };
