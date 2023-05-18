const mongoose = require("mongoose");

const DemandeTransfertModel = mongoose.Schema(
  {
    destination: { type: "String", required: true },
    refProduit: { type: "String" },
    nomProduit: { type: "String" },
    date: { type: "String" },
  },
  { timestaps: true }
);

const DemandeTransfert = mongoose.model(
  "DemandeTransfert",
  DemandeTransfertModel
);
module.exports = DemandeTransfert;
