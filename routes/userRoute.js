const express = require("express");

const { registerUser, authUser } = require("../controllers/userControllers");

const userRouter = express.Router();
userRouter.route("/").post(registerUser);
userRouter.post("/login", authUser);

module.exports = userRouter;
