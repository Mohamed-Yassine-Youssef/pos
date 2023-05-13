import React, { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import LineChart from "../../components/caissier/LineChart";

const ObjectifMagasin = () => {
  const data = {
    line1: {
      "2022-03-02": 20,
      "2022-03-03": 10,
      "2022-03-10": 60,
      "2022-03-20": 50,
      "2022-04-05": 20,
      "2022-05-02": 20,
      "2022-05-12": 20,
      "2022-03-02": 20,
      "2022-06-02": 20,
      "2022-06-12": 20,
      "2022-10-02": 20,
      "2022-12-02": 20,
      "2022-03-02": 20,
      "2023-02-02": 20,
      "2023-03-02": 20,
      "2023-03-06": 20,
      "2022-03-20": 20,
      "2023-04-23": 20,
      "2023-04-29": 20,
      "2023-05-02": 20,
      "2023-05-10": 20,
      "2023-09-02": 20,
      "2023-09-05": 20,
      "2023-11-12": 20,
      "2023-12-02": 20,
      "2023-12-20": 20,
      "2023-12-21": 20,
      "2023-12-22": 20,
      "2023-12-23": 20,
      "2023-12-24": 20,
    },
    line2: {
      "2022-03-02": 40,
      "2022-03-03": 40,
      "2022-03-20": 40,
      "2022-04-02": 40,
      "2022-04-05": 40,
      "2022-05-02": 40,
      "2022-05-12": 40,
      "2023-03-02": 40,
      "2023-04-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
      "2022-03-02": 40,
    },
  };

  return (
    <>
      <Header />
      <SideBar />
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Objectif Magasin</h1>
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
                <div style={{ width: 700 }} className=" px-3 py-4">
                  <LineChart data={data} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObjectifMagasin;
