const express = require("express");

const { protect, caissier } = require("../middleware/authMiddleware");
const {
  createBrand,
  createFamily,
  createSubFamily,
  createCategory,
  createProduct,
  getBrands,
  getFamilies,
  getSubFamilies,
  getCategories,
  getProducts,
  createPack,
  getPacks,
  getPackProducts,
} = require("../controllers/productController");
const productRouter = express.Router();

productRouter.post("/createBrand", createBrand);
productRouter.post("/createfamily", createFamily);
productRouter.post("/createSubfamily", createSubFamily);
productRouter.post("/createCategory", createCategory);
productRouter.post("/createProduct", createProduct);
productRouter.post("/createPack", createPack);
productRouter.get("/getBrand", getBrands);
productRouter.get("/getFamilies", getFamilies);
productRouter.get("/getSubFamilies", getSubFamilies);
productRouter.get("/getCategories", getCategories);
productRouter.get("/getProducts", getProducts);
productRouter.get("/getPacks", getPacks);
productRouter.get("/getPack/:id/products", getPackProducts);

module.exports = productRouter;
