import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";
const VentesCaissieres = () => {
  const columns = [
    {
      dataField: "caissier_name",
      text: "nom caissier",
    },

    {
      dataField: "total",
      text: " montant des ventes",
    },
  ];

  const [filterNomCaissier, setFilterNomCaissier] = useState("");
  const [filterDateDebut, setFilterDateDebut] = useState("");
  const [filterDateFin, setFilterDateFin] = useState("");
  const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState(caissiers);

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
        if (!salesByDate[date][sale.caissier_name]) {
          salesByDate[date][sale.caissier_name] = {
            caissier_name: sale.caissier_name,
            total: sale.total,
          };
        } else {
          salesByDate[date][sale.caissier_name].total += sale.total;
        }
      });

      const filteredData = [];

      Object.entries(salesByDate).forEach(([date, sales]) => {
        Object.values(sales).forEach((sale) => {
          filteredData.push({
            date,
            caissier_name: sale.caissier_name,
            total: sale.total,
          });
        });
      });

      let finalData = filteredData;

      if (filterNomCaissier !== "") {
        finalData = finalData.filter((sale) =>
          sale.caissier_name
            .toLowerCase()
            .includes(filterNomCaissier.toLowerCase())
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
  }, [filterNomCaissier, filterDateDebut, filterDateFin]);

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
                <h1 className="m-0 text-dark">Ventes des caissier</h1>
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
            <div className="row">
              <div className="col-4">
                <label>nom caissier:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFilterNomCaissier(e.target.value)}
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
            <div className="card px-3 py-4 mt-3">
              {/* <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">cin</th>
                    <th scope="col">nomCaissier</th>
                    <th scope="col">date debut</th>
                    <th scope="col">date fin</th>
                    <th scope="col">objectif</th>
                    <th scope="col">tempsService</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((caissier, index) => (
                    <tr key={index}>
                      <td>{caissier.cin}</td>
                      <td>{caissier.nomCaissier}</td>
                      <td>{caissier.date_debut}</td>
                      <td>{caissier.date_fin}</td>
                      <td>{caissier.objectif}</td>
                      <td>{caissier.tempsService}</td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
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

      <Footer />
    </>
  );
};

export default VentesCaissieres;
