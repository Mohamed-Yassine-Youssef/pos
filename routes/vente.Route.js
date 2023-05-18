const express = require("express");

const {
  createSale,
  getSales,
  updateSale,
  getSalesById,

  generateRapportVente,
  getMagasinSales,
  getAverageSales,
  getTotalSales,
  getVendeurTotalSales,
  getCaissierTotalSales,
} = require("../controllers/venteControlleur");

const SaleRouter = express.Router();
SaleRouter.route("/").post(createSale);
SaleRouter.route("/updateSale/:id").put(updateSale);
SaleRouter.route("/getSales").get(getSales);
SaleRouter.route("/rapport-vente/:nomProduit/:dateDebut/:dateFin").get(
  generateRapportVente
);
SaleRouter.route("/getSales/:id").get(getSalesById);
SaleRouter.route("/getMagasinSales").get(getMagasinSales);
SaleRouter.route("/getAverageSales").get(getAverageSales);
SaleRouter.route("/getTotalSales").get(getTotalSales);
SaleRouter.route("/getVendeurTotalSales/:vendeur_name").get(
  getVendeurTotalSales
);
SaleRouter.route("/getCaissierTotalSales/:caissier_name").get(
  getCaissierTotalSales
);
module.exports = SaleRouter;
