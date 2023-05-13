const mongoose = require("mongoose");

const objectifMagasinModel = mongoose.Schema(
  {
    line1: {
      type: Map,
      of: Number,
    },
    line2: {
      type: Map,
      of: Number,
    },
  },
  { timestaps: true }
);

const ObjectifMagasin = mongoose.model("ObjectifMagasin", objectifMagasinModel);
module.exports = ObjectifMagasin;
