const express = require("express");
const app = express();
app.use(express.json());
var mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoute");
const clientRoutes = require("./routes/clientRoute");
const objectifMagasinRoutes = require("./routes/objectifMagasinRoute");
const stockAuteMagasinsRoutes = require("./routes/stockAutreMagasin");
const productRoutes = require("./routes/ProductRoute");
const saleRoutes = require("./routes/vente.Route");
const transfertRoutes = require("./routes/demandeTransfertRouter");
const calendarRoutes = require("./routes/CalendarRoutes");
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/objectifMagasin", objectifMagasinRoutes);
app.use("/api/stockAutreMagasins", stockAuteMagasinsRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sale", saleRoutes);
app.use("/api/transfert", transfertRoutes);
app.use("/api/calendar", calendarRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running  on port ${PORT}`));
//connection to data base
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));
