const asyncHandler = require("express-async-handler");
const {
  Brand,
  Family,
  subFamily,
  Category,
  Product,
  Pack,
} = require("../models/ProductsModel");

// creer brand
const createBrand = asyncHandler(async (req, res) => {
  const newData = new Brand(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// creer family
const createFamily = asyncHandler(async (req, res) => {
  const newData = new Family(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// creer sous family
const createSubFamily = asyncHandler(async (req, res) => {
  const newData = new subFamily(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// creer category
const createCategory = asyncHandler(async (req, res) => {
  const newData = new Category(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// creer produit
const createProduct = asyncHandler(async (req, res) => {
  const newData = new Product(req.body);
  await newData.save();
  res.status(201).json(newData);
});

// creer pack
const createPack = asyncHandler(async (req, res) => {
  const newData = new Pack(req.body);
  await newData.save();
  res.status(201).json(newData);
});

//get brands
const getBrands = asyncHandler(async (req, res) => {
  const Data = await Brand.find();
  res.status(200).json(Data);
});
//get families
const getFamilies = asyncHandler(async (req, res) => {
  const Data = await Family.find();
  res.status(200).json(Data);
});
//get subFamilies
const getSubFamilies = asyncHandler(async (req, res) => {
  const Data = await subFamily.find();
  res.status(200).json(Data);
});
//get categories
const getCategories = asyncHandler(async (req, res) => {
  const Data = await Category.find();
  res.status(200).json(Data);
});
//get products
const getProducts = asyncHandler(async (req, res) => {
  const Data = await Product.find();
  res.status(200).json(Data);
});

//get packs
const getPacks = asyncHandler(async (req, res) => {
  const Data = await Pack.find();
  res.status(200).json(Data);
});

//get pack products
const getPackProducts = asyncHandler(async (req, res) => {
  const Data = await Pack.findById(req.params.id).populate("products");
  res.status(200).json(Data);
});
module.exports = {
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
};
