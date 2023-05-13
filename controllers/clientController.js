const asyncHandler = require("express-async-handler");
const Client = require("../models/clientModel");

// sign up
const registerClient = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const clientExists = await Client.find({ email: req.body.email });

  if (clientExists.length > 0) {
    res.status(400);
    throw new Error("client already exists");
  }

  const user = await Client.create(req.body);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      cin: user.cin,
      address: user.address,
      phoneNumber: user.phoneNumber,
      birthDate: user.birthDate,
      numberOfPurchases: user.numberOfPurchases,
      spentMoney: user.spentMoney,
    });
  } else {
    res.status(400);
    throw new Error("client not found");
  }
});

//get all clients
const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find();

  if (!clients) {
    res.status(404);
    throw new Error("no client found");
  }
  res.status(200).json(clients);
});
module.exports = { registerClient, getClients };
