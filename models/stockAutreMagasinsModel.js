const mongoose = require("mongoose");

const stockAuteMagasinsModel = mongoose.Schema(
  {
    nonMagasin: { type: "String", required: true },
    codeArticle: { type: "String", unique: true, required: true },
    nomProduit: { type: "String", required: true },
    prixVente: { type: "String", required: true },
    qteEnStock: { type: "String", required: true },
  },
  { timestaps: true }
);

const StockAuteMagasins = mongoose.model(
  "StockAuteMagasins",
  stockAuteMagasinsModel
);
module.exports = StockAuteMagasins;
