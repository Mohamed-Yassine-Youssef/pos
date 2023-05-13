import "./App.css";
import Login from "./pages/Login";
import GestionClient from "./pages/caissier/GestionClient";
import ImprimerRecu from "./pages/caissier/Ventes";
import Objectif from "./pages/caissier/Objectif";
import Pos from "./pages/caissier/Pos";
import RapportInventaire from "./pages/caissier/HistoriqueVentes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/directeurMagasin/Home";
import ObjectifMagasin from "./pages/directeurMagasin/ObjectifMagasin";
import VentesCaissieres from "./pages/directeurMagasin/VentesCaissieres";
import EtatDuStock from "./pages/directeurMagasin/EtatDuStock";
import ObjectifVendeur from "./pages/directeurMagasin/ObjectifVendeur";
import StockAutreMagasin from "./pages/directeurMagasin/StockAutreMagasin";
import RapportVentes from "./pages/directeurMagasin/RapportVentes";
import TransfertStock from "./pages/directeurMagasin/TransfertStock";
import CalendrierEmployées from "./pages/directeurMagasin/CalendrierEmployées";
import Ventes from "./pages/caissier/Ventes";
import ObjectifDuVendeur from "./pages/vendeur/ObjectifDuVendeur";
import CalendrierVendeur from "./pages/vendeur/CalendrierVendeur";
import EtatMagasin from "./pages/responsableDeVente/EtatMagasin";
import PanierMoyen from "./pages/responsableDeVente/PanierMoyen";
import StockAutreMagasinPourCaissier from "./pages/caissier/StockAutreMagasinPourCaissier";
import HistoriqueVentes from "./pages/caissier/HistoriqueVentes";
import AjouterProduitsATicket from "./pages/caissier/AjouterProduitsATicket";
import { useState } from "react";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
          </Route>
          <Route path="caissiere/">
            <Route index element={<Pos />} />
            <Route path="gestion_client" element={<GestionClient />} />
            <Route path="objectif" element={<Objectif />} />
            <Route path="ventes" element={<Ventes />} />
            <Route path="ticket/add" element={<AjouterProduitsATicket />} />
            <Route
              path="/caissiere/historique_ventes"
              element={<HistoriqueVentes />}
            />
            <Route
              path="stockDesAutresMagasins"
              element={<StockAutreMagasinPourCaissier />}
            />
          </Route>

          <Route path="directeurMagasin/">
            <Route index element={<Home />} />
            <Route path="objectifMagasin" element={<ObjectifMagasin />} />
            <Route path="VentesCaissieres" element={<VentesCaissieres />} />
            <Route path="etatDuStock" element={<EtatDuStock />} />
            <Route path="objectifDesVendeurs" element={<ObjectifVendeur />} />
            <Route
              path="stockDesAutresMagasins"
              element={<StockAutreMagasin />}
            />
            <Route path="RapportVentes" element={<RapportVentes />} />
            <Route path="transfertStock" element={<TransfertStock />} />
            <Route
              path="CalendrierEmployees"
              element={<CalendrierEmployées />}
            />
          </Route>

          <Route path="/vendeur" element={<ObjectifDuVendeur />} />
          <Route path="/vendeur/objectif" element={<ObjectifDuVendeur />} />
          <Route path="/vendeur/calendrier" element={<CalendrierVendeur />} />
          <Route path="/responsableDesVentes" element={<EtatMagasin />} />
          <Route
            path="/responsableDesVentes/etatMagasin"
            element={<EtatMagasin />}
          />
          <Route
            path="/responsableDesVentes/panierMoyen"
            element={<PanierMoyen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
