const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venteSchema = new Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    caissier_name: {
      type: "String",
    },
    vendeur_name: {
      type: "String",
    },
    nom_client: {
      type: "String",
    },
    reference: {
      type: "String",
    },
    code_vendeur: {
      type: String,
    },
    montantRestant: {
      type: String,
    },
    mode_paiement: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    products: [{}],
    status: {
      type: String,
      default: "non-payé",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vente", venteSchema);
