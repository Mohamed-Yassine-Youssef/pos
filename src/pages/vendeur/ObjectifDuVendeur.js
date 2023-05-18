import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/vendeur/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineChart from "../../components/caissier/LineChart";
import { Context } from "../../context/Context";
import axios from "axios";
const ObjectifDuVendeur = () => {
  const { user, dispatch } = useContext(Context);
  const [data, setData] = useState();

  const ObjectifVendeurData = async () => {
    const data = await axios.get("/api/sale/getVendeurTotalSales/" + user.name);
    setData(data.data);
  };
  useEffect(() => {
    ObjectifVendeurData();
  }, []);

  return (
    <div>
      <Header />
      <SideBar />

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Objectif</h1>
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
                <LineChart data={data} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ObjectifDuVendeur;
