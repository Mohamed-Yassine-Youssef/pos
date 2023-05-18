import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import LineChart from "../../components/caissier/LineChart";
import axios from "axios";

const ObjectifMagasin = () => {
  const [data, setData] = useState();
  const ObjectifMagasinSales = async () => {
    const data = await axios.get("/api/sale/getTotalSales");
    console.log(data.data);
    setData(data.data);
  };
  useEffect(() => {
    ObjectifMagasinSales();
  }, []);

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
