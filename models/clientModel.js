const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const clientModel = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    code: { type: Number },
    cin: { type: "String", required: true },
    address: { type: "String", required: true },
    phoneNumber: { type: "String", required: true },
    birthDate: { type: "String", required: true },
    numberOfPurchases: { type: "number", default: 0 },
    spentMoney: { type: "number", default: 0 },
  },
  { timestaps: true }
);

clientModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

clientModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Client = mongoose.model("Client", clientModel);
module.exports = Client;
