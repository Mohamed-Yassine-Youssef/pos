import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const VentesCaissieres = () => {
  const columns = [
    {
      dataField: "nom_caissier",
      text: "nom caissier",
    },
    {
      dataField: "date_debut",
      text: "date debut",
    },
    {
      dataField: "date_fin",
      text: "date fin",
    },
    {
      dataField: "ventes",
      text: "ventes",
    },
    {
      dataField: "temps_service",
      text: "temps service",
    },
  ];
  const data = [
    {
      nom_caissier: "John Smith",
      date_debut: "2022-02-15",
      date_fin: "2023-01-15",
      ventes: 100.0,
      temps_service: "6h",
    },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [filteredData, setFilteredData] = useState(caissiers);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  // useEffect(() => {
  //   const filteredCaissiers = caissiers.filter((caissier) => {
  //     if (startDate === "" || endDate === "") {
  //       return true;
  //     }
  //     return caissier.date_debut >= startDate && caissier.date_fin <= endDate;
  //   });
  //   setFilteredData(filteredCaissiers);
  // }, [startDate, endDate]);

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
                <input type="text" className="form-control" />
              </div>
              <div className="col-4">
                <label> Date debut:</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-4">
                <label>Date fin:</label>
                <input type="date" className="form-control" />
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
