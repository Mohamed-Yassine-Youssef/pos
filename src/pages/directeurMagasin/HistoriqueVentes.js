import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";

const HistoriqueVentes = () => {
  const [data, setData] = useState([]);

  const [filterDateDebut, setFilterDateDebut] = useState("");
  const [filterDateFin, setFilterDateFin] = useState("");
  const columns = [
    {
      dataField: "refVente",
      text: "référence de la vente",
    },
    {
      dataField: "nomclient",
      text: "Nom du client",
    },
    {
      dataField: "methodePaimement",
      text: "méthode paiement",
    },
    {
      dataField: "montantvente",
      text: "montant de lavente",
    },
  ];

  const fetchSales = async () => {
    try {
      const response = await axios.get("/api/sale/getSales");
      const salesdata = response.data;

      const filteredData = salesdata
        .filter((sale) => {
          return sale.status === "payé";
        })
        .filter((sale) => {
          if (filterDateDebut !== "") {
            return new Date(sale.createdAt) >= new Date(filterDateDebut);
          }
          return true;
        })
        .filter((sale) => {
          if (filterDateFin !== "") {
            return new Date(sale.createdAt) <= new Date(filterDateFin);
          }
          return true;
        })
        .map((sale) => ({
          refVente: sale.reference,
          nomclient: sale.nom_client,
          methodePaimement: sale.mode_paiement,
          montantvente: sale.total,
        }));

      setData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSales();
  }, [data]);
  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper ">
        <div className="content-header">
          <div className="container">
            {/* /.row */}
            <h1 className="mb-3 text-dark">Historique des ventes</h1>

            <div className="row">
              <div className="col-6 d-block">
                <label>date debut</label>
                <input
                  type="date"
                  className="form-control mb-3 "
                  onChange={(e) => setFilterDateDebut(e.target.value)}
                />
              </div>
              <div className="col-6 d-block">
                <label>date fin</label>
                <input
                  type="date"
                  className="form-control mb-3 "
                  onChange={(e) => setFilterDateFin(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div>
          <section className="content container card p-5">
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={data}
              columns={columns}
              pagination={paginationFactory()}
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoriqueVentes;
