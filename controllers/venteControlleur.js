const Vente = require("../models/venteModel");
const { Product } = require("../models/ProductsModel");
const Client = require("../models/clientModel");
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const moment = require("moment"); // For working with dates
let referenceCounter = 1000; // Initialize the reference counter
const createSale = async (req, res) => {
  const {
    client,
    nom_client,
    caissier_name,
    vendeur_name,
    mode_paiement,
    total,
    status,
    products,
    montantRestant,
  } = req.body;

  try {
    referenceCounter++;
    // Create a new sale
    const sale = new Vente({
      client,
      caissier_name,
      vendeur_name,
      nom_client,
      reference: `REF-${referenceCounter}`, // Use the incremented reference
      mode_paiement,
      total,
      products,
      status,
      montantRestant,
      createdAt: new Date(), // Add createdAt timestamp
      updatedAt: new Date(), // Add updatedAt timestamp
    });

    // Update the stock of each product sold
    // Update the stock of each product sold
    const productIds = products.map((product) => product._id);
    const soldProducts = await Product.find({ _id: { $in: productIds } });
    soldProducts.forEach((product, index) => {
      product.quantity -= products[index].quantity;
    });
    await Promise.all(soldProducts.map((product) => product.save()));

    await sale.save();
    // Increase the number of payments made by the client
    const clientUpdates = {
      $inc: {
        numberOfPurchases: 1,
        spentMoney: total,
      },
    };
    await Client.findByIdAndUpdate(client, clientUpdates, { new: true });

    const userUpdates = {
      $inc: {
        ventes: total,
      },
    };

    await User.findOneAndUpdate({ name: caissier_name }, userUpdates, {
      new: true,
    });
    await User.findOneAndUpdate({ name: vendeur_name }, userUpdates, {
      new: true,
    });

    res.status(201).json({ success: true, data: sale });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getSales = expressAsyncHandler(async (req, res) => {
  const Data = await Vente.find();
  res.status(200).json(Data);
});

const updateSale = async (req, res) => {
  try {
    // Create a new sale

    // Update the stock of each product sold
    const sale = await Vente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Increase the number of payments made by the client
    // const clientUpdates = {
    //   $inc: {
    //     numberOfPurchases: 1,
    //     spentMoney: req.body.total,
    //   },
    // };
    // await Client.findByIdAndUpdate(client, clientUpdates, { new: true });

    res.status(201).json({ success: true, data: sale });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getSalesById = expressAsyncHandler(async (req, res) => {
  const Data = await Vente.findOne({
    client: req.params.id,
    status: { $ne: "payé" },
  });

  res.status(200).json(Data);
});

const generateRapportVente = async (req, res) => {
  try {
    const { dateDebut, dateFin, nomProduit } = req.params;

    // Convertir les dates de début et de fin en objets Date
    const startDate = new Date(dateDebut);
    const endDate = new Date(dateFin);

    // Options pour la date en français
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      locale: "fr-FR",
    };

    // Créer un objet de filtre pour la recherche des ventes
    const venteFilter = {
      createdAt: { $gte: startDate, $lte: endDate },
    };

    // Ajouter le nom du produit au filtre s'il est spécifié
    if (nomProduit) {
      venteFilter["products.name"] = nomProduit;
    }

    // Récupérer les ventes correspondant au filtre
    const ventes = await Vente.find(venteFilter);

    // Initialiser les totaux
    let totalQuantiteVendue = 0;
    let totalMontantVendu = 0;

    // Tableau pour stocker les ventes par jour
    const ventesParJour = {};

    ventes.forEach((vente) => {
      // Filtrer les produits de la vente par nom du produit si spécifié
      const produitsVendus = nomProduit
        ? vente.products.filter((product) => product.name === nomProduit)
        : vente.products;

      if (produitsVendus.length > 0) {
        // Calculer la quantité totale vendue et le montant total vendu pour les produits filtrés
        const quantiteVendue = produitsVendus.reduce(
          (total, product) => total + product.quantity,
          0
        );
        const montantVendu = produitsVendus.reduce(
          (total, product) => total + product.quantity * product.price,
          0
        );

        totalQuantiteVendue += quantiteVendue;
        totalMontantVendu += montantVendu;

        // Stocker les ventes par jour
        const date = vente.createdAt.toLocaleDateString("fr-FR", options);
        if (!ventesParJour[date]) {
          ventesParJour[date] = {
            quantite: quantiteVendue,
            montant: montantVendu,
          };
        } else {
          ventesParJour[date].quantite += quantiteVendue;
          ventesParJour[date].montant += montantVendu;
        }
      }
    });

    // Générer le rapport de vente
    const rapportVente = {
      dateDebut: startDate.toLocaleDateString("fr-FR", options),
      dateFin: endDate.toLocaleDateString("fr-FR", options),
      nomProduit,
      totalQuantiteVendue,
      totalMontantVendu,
      ventesParJour,
    };

    res.json(rapportVente);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "Une erreur s'est produite lors de la génération du rapport de vente.",
    });
  }
};

const getMagasinSales = async (req, res) => {
  try {
    const today = moment().startOf("day"); // Get the start of the current day

    // Retrieve the number of products
    const productCount = await Vente.aggregate([
      { $unwind: "$products" }, // Separate each product into individual documents
      { $group: { _id: null, count: { $sum: 1 } } }, // Count the products
    ]);

    // Retrieve the total sales
    const totalSales = await Vente.aggregate([
      { $group: { _id: null, total: { $sum: "$total" } } }, // Calculate the sum of total field
    ]);

    // Retrieve the daily revenue
    const dailyRevenue = await Vente.aggregate([
      { $match: { createdAt: { $gte: today.toDate() } } }, // Filter sales for today
      { $group: { _id: null, revenue: { $sum: { $toDouble: "$total" } } } }, // Convert total to double and calculate the sum
    ]);

    // Prepare the response object
    const stats = {
      productCount: productCount.length > 0 ? productCount[0].count : 0,
      totalSales: totalSales.length > 0 ? totalSales[0].total : 0,
      dailyRevenue: dailyRevenue.length > 0 ? dailyRevenue[0].revenue : 0,
    };

    res.json(stats); // Send the stats as a JSON response
  } catch (error) {
    console.error("Error retrieving sales stats:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const getAverageSales = async (req, res) => {
  try {
    // Obtention de la moyenne des ventes par jour
    const averageSales = await Vente.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          average: { $avg: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et la moyenne comme valeur
    const averageSalesObj = {};
    averageSales.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      averageSalesObj[dateKey] = result.average;
    });

    // Génération de données factices d'objectifs
    const fakeObjectives = await Vente.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et l'objectif comme valeur
    const fakeObjectivesObj = {};
    fakeObjectives.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      fakeObjectivesObj[dateKey] = result.total * 1.1; // Objectif factice à 110% de la moyenne
    });

    // Tableau contenant les deux objets
    const salesData = {
      line1: averageSalesObj,
      line2: fakeObjectivesObj,
    };

    res.json(salesData);
  } catch (error) {
    console.error("Error retrieving sales data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
const getTotalSales = async (req, res) => {
  try {
    // Obtention du total des ventes par jour
    const totalSales = await Vente.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et le total comme valeur
    const totalSalesObj = {};
    totalSales.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      totalSalesObj[dateKey] = result.total;
    });

    // Génération de données factices d'objectifs
    const fakeObjectives = await Vente.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et l'objectif comme valeur
    const fakeObjectivesObj = {};
    fakeObjectives.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      fakeObjectivesObj[dateKey] = result.total * 1.1; // Objectif factice à 110% du total
    });

    // Tableau contenant les deux objets

    const salesData = {
      line1: totalSalesObj,
      line2: fakeObjectivesObj,
    };
    res.json(salesData);
  } catch (error) {
    console.error("Error retrieving sales data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const getVendeurTotalSales = async (req, res) => {
  try {
    const vendeurName = req.params.vendeur_name; // Assuming the vendeur_name is passed as a URL parameter

    // Obtention du total des ventes par jour pour le vendeur spécifié
    const totalSales = await Vente.aggregate([
      {
        $match: { vendeur_name: vendeurName },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et le total comme valeur
    const totalSalesObj = {};
    totalSales.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      totalSalesObj[dateKey] = result.total;
    });

    // Génération de données factices d'objectifs pour le vendeur spécifié
    const fakeObjectives = await Vente.aggregate([
      {
        $match: { vendeur_name: vendeurName },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et l'objectif comme valeur
    const fakeObjectivesObj = {};
    fakeObjectives.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      fakeObjectivesObj[dateKey] = result.total * 1.1; // Objectif factice à 110% du total
    });

    // Tableau contenant les deux objets
    const salesData = {
      line1: totalSalesObj,
      line2: fakeObjectivesObj,
    };
    res.json(salesData);
  } catch (error) {
    console.error("Error retrieving sales data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const getCaissierTotalSales = async (req, res) => {
  try {
    const caissierName = req.params.caissier_name; // Assuming the vendeur_name is passed as a URL parameter

    // Obtention du total des ventes par jour pour le vendeur spécifié
    const totalSales = await Vente.aggregate([
      {
        $match: { caissier_name: caissierName },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et le total comme valeur
    const totalSalesObj = {};
    totalSales.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      totalSalesObj[dateKey] = result.total;
    });

    // Génération de données factices d'objectifs pour le vendeur spécifié
    const fakeObjectives = await Vente.aggregate([
      {
        $match: { caissier_name: caissierName },
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
            day: { $dayOfMonth: "$createdAt" },
          },
          total: { $sum: "$total" },
        },
      },
    ]);

    // Conversion des résultats en un objet avec la date comme clé et l'objectif comme valeur
    const fakeObjectivesObj = {};
    fakeObjectives.forEach((result) => {
      const { year, month, day } = result._id;
      const dateKey = `${year}-${month}-${day}`;
      fakeObjectivesObj[dateKey] = result.total * 1.1; // Objectif factice à 110% du total
    });

    // Tableau contenant les deux objets
    const salesData = {
      line1: totalSalesObj,
      line2: fakeObjectivesObj,
    };
    res.json(salesData);
  } catch (error) {
    console.error("Error retrieving sales data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
module.exports = {
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
};
