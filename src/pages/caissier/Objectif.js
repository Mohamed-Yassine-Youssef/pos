import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
import Footer from "../../components/Footer";
import LineChart from "../../components/caissier/LineChart";
import axios from "axios";
import { Context } from "../../context/Context";
const Objectif = () => {
  const { user, dispatch } = useContext(Context);
  const [data, setData] = useState();

  const ObjectifCaissierData = async () => {
    const data = await axios.get(
      "/api/sale/getCaissierTotalSales/" + user.name
    );
    setData(data.data);
  };
  useEffect(() => {
    ObjectifCaissierData();
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            {/* /.row */}
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Objectif</h1>
              </div>
              {/* /.col */}

              {/* /.col */}
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div>
          <section className="content">
            <div className="d-flex justify-content-center">
              <div style={{ width: 700 }} className=" px-3 py-4">
                <LineChart data={data} />{" "}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Objectif;
