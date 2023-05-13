import React, { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/responsableDeVente/SideBar";
import Footer from "../../components/Footer";
import LineChart from "../../components/directeurMagasin/LineChart";

const PanierMoyen = () => {
  const data = [
    {
      id: 1,
      month: "janvier",
      objectif: 80000,
    },
    {
      id: 2,
      month: "fevrier",
      objectif: 45677,
    },
    {
      id: 3,
      month: "Mars",
      objectif: 78888,
    },
    {
      id: 3,
      month: "Avril",
      objectif: 78888,
    },
    {
      id: 3,
      month: "Mai",
      objectif: 78888,
    },
    {
      id: 3,
      month: "juin",
      objectif: 78888,
    },
    {
      id: 3,
      month: "juiller",
      objectif: 78888,
    },
    {
      id: 3,
      month: "Aout",
      objectif: 78888,
    },
    {
      id: 3,
      month: "september",
      objectif: 78888,
    },
    {
      id: 3,
      month: "october",
      objectif: 78888,
    },
    {
      id: 3,
      month: "november",
      objectif: 78888,
    },
    {
      id: 3,
      month: "decembre",
      objectif: 78888,
    },
  ];

  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Panier Moyen</h1>
              </div>
              {/* /.col */}

              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="d-flex justify-content-center">
              <div style={{ width: 700 }} className="card px-3 py-4">
                <LineChart chartData={data} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PanierMoyen;
