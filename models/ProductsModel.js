const mongoose = require("mongoose");
// Modèle brand
const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Brand = mongoose.model("Brand", brandSchema);

// Modèle Family
const familySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
});

const Family = mongoose.model("Family", familySchema);

// Modèle sous Family
const subFamilySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  family_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Family",
    required: true,
  },
  created_at: { type: Date, default: Date.now },
});

const subFamily = mongoose.model("SubFamily", subFamilySchema);

// Modèle Category
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  family_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Family",
    required: true,
  },
  subFamily_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubFamily",
    required: true,
  },
  created_at: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", categorySchema);

// Modèle Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  subFamily_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubFamily",
    required: true,
  },
  family_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Family",
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

const packSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  price: { type: Number, required: true },
  quantity: { type: Number },
  created_at: { type: Date, default: Date.now },
});

const Pack = mongoose.model("Pack", packSchema);

module.exports = {
  Brand,
  Family,
  Category,
  Product,
  subFamily,
  Pack,
};
