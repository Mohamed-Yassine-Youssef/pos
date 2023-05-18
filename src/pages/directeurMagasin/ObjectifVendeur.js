import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";
const ObjectifVendeur = () => {
  const [filterNomVendeur, setFilterNomVendeur] = useState("");
  const [filterDateDebut, setFilterDateDebut] = useState("");
  const [filterDateFin, setFilterDateFin] = useState("");
  const [data, setData] = useState([]);

  const columns = [
    {
      dataField: "vendeur_name",
      text: "nom vendeur",
    },
    {
      dataField: "total",
      text: "Montant des ventes",
    },
  ];

  const fetchSales = async () => {
    try {
      const response = await axios.get("/api/sale/getSales");
      const salesdata = response.data;

      const salesByDate = {};

      salesdata.forEach((sale) => {
        const date = new Date(sale.updatedAt).toDateString();
        if (!salesByDate[date]) {
          salesByDate[date] = {};
        }
        if (!salesByDate[date][sale.vendeur_name]) {
          salesByDate[date][sale.vendeur_name] = {
            vendeur_name: sale.vendeur_name,
            total: sale.total,
          };
        } else {
          salesByDate[date][sale.vendeur_name].total += sale.total;
        }
      });

      const filteredData = [];

      Object.entries(salesByDate).forEach(([date, sales]) => {
        Object.values(sales).forEach((sale) => {
          filteredData.push({
            date,
            vendeur_name: sale.vendeur_name,
            total: sale.total,
          });
        });
      });

      let finalData = filteredData;

      if (filterNomVendeur !== "") {
        finalData = finalData.filter((sale) =>
          sale.vendeur_name
            .toLowerCase()
            .includes(filterNomVendeur.toLowerCase())
        );
      }

      if (filterDateDebut !== "") {
        finalData = finalData.filter(
          (sale) => new Date(sale.date) >= new Date(filterDateDebut)
        );
      }

      if (filterDateFin !== "") {
        finalData = finalData.filter(
          (sale) => new Date(sale.date) <= new Date(filterDateFin)
        );
      }

      setData(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSales();
  }, [filterNomVendeur, filterDateDebut, filterDateFin]);

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
                  <h1 className="m-0 text-dark">ventes des vendeurs</h1>
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
            <div className="container-fluid ">
              <div className="row">
                <div className="col-4">
                  <label>nom vendeur:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFilterNomVendeur(e.target.value)}
                  />
                </div>
                <div className="col-4">
                  <label> Date debut:</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setFilterDateDebut(e.target.value)}
                  />
                </div>
                <div className="col-4">
                  <label>Date fin:</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setFilterDateFin(e.target.value)}
                  />
                </div>
              </div>
              <div className="card mt-3 p-3">
                <BootstrapTable
                  bootstrap4
                  keyField="id"
                  data={data}
                  columns={columns}
                  pagination={paginationFactory()}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ObjectifVendeur;
