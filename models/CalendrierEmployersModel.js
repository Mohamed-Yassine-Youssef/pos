const mongoose = require("mongoose");

const CalendrierEmployerModel = mongoose.Schema(
  {
    cal: [{}],
  },
  { timestaps: true }
);

const CalendrierEmployer = mongoose.model(
  "CalendrierEmployer",
  CalendrierEmployerModel
);
module.exports = CalendrierEmployer;
