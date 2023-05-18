const asyncHandler = require("express-async-handler");
const CalendrierEmployer = require("../models/CalendrierEmployersModel");

// creer calendar
const createCalendar = asyncHandler(async (req, res) => {
  const newData = new CalendrierEmployer(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// get calendar
const getCalendar = asyncHandler(async (req, res) => {
  const Data = await CalendrierEmployer.find();
  res.status(200).json(Data);
});
module.exports = { createCalendar, getCalendar };
