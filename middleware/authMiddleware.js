const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const directeurMagasin = (req, res, next) => {
  if (req.user && req.user.Role == "directeurMagasin") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as directeurMagasin");
  }
};

const vendeur = (req, res, next) => {
  if (req.user && req.user.Role == "vendeur") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an vendeur");
  }
};

const responsablevente = (req, res, next) => {
  if (req.user && req.user.Role == "responsableVente") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as  responsableVente");
  }
};

const caissier = (req, res, next) => {
  if (req.user && req.user.Role == "caissier") {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as caissier");
  }
};
module.exports = {
  protect,
  caissier,
  responsablevente,
  vendeur,
  directeurMagasin,
};
