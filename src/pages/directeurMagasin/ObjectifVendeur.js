import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const ObjectifVendeur = () => {
  const columns = [
    {
      dataField: "cin",
      text: "cin",
    },
    {
      dataField: "nomVendeur",
      text: "nom vendeur",
    },
    {
      dataField: "chiffre_actuelle",
      text: "chiffre d'affaire actuelle",
    },
    {
      dataField: "objectif",
      text: "objectif",
    },
  ];
  const data = [
    {
      cin: "xx xxx xxx",
      nomVendeur: "sami",
      objectif: 130,
      chiffre_actuelle: 100,
    },
    {
      cin: "xx xxx xxx",
      nomVendeur: "rami",
      objectif: 110,
      chiffre_actuelle: 140,
    },
    {
      cin: "xx xxx xxx",
      nomVendeur: "amine",
      objectif: 190,
      chiffre_actuelle: 300,
    },
  ];
  const [nomVendeur, setNomVendeur] = useState("");
  // const [filteredData, setFilteredData] = useState(vendeurs);
  const handleNomVendeurChange = (e) => {
    setNomVendeur(e.target.value);
  };
  // useEffect(() => {
  //   const filteredVendeur = vendeurs.filter((vendeur) => {
  //     if (nomVendeur === "") {
  //       return true;
  //     }
  //     return vendeur.nomVendeur == nomVendeur;
  //   });
  //   setFilteredData(filteredVendeur);
  // }, [nomVendeur]);
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
                  <h1 className="m-0 text-dark">Objectif des vendeurs</h1>
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
                <div className="col -6">
                  <label>Nom du vendeur:</label>
                  <input
                    type="text"
                    value={nomVendeur}
                    className="form-control"
                    onChange={handleNomVendeurChange}
                  />
                </div>
                <div className="col -6">
                  <label>CIN du vendeur:</label>
                  <input
                    type="text"
                    value={nomVendeur}
                    className="form-control"
                    onChange={handleNomVendeurChange}
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
