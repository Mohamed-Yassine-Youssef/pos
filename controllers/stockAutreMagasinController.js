const asyncHandler = require("express-async-handler");
const StockAutreMagasin = require("../models/stockAutreMagasinsModel");

// creer stock
const createStock = asyncHandler(async (req, res) => {
  const newData = new StockAutreMagasin(req.body);
  await newData.save();
  res.status(201).json(newData);
});
// get stock
const getStock = asyncHandler(async (req, res) => {
  const Data = await StockAutreMagasin.find();
  res.status(200).json(Data);
});

module.exports = { createStock, getStock };
