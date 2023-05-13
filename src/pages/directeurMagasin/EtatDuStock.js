import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const EtatDuStock = () => {
  const columns = [
    {
      dataField: "codeProduit",
      text: "code produit",
    },
    {
      dataField: "nomProduit",
      text: "nom produit",
    },
    {
      dataField: "prixProduit",
      text: "prix produit",
    },
    {
      dataField: "qteEnStock",
      text: "qte en stock",
    },
  ];
  const data = [
    {
      codeProduit: "1A23",
      nomProduit: "lorem1",
      prixProduit: 120,
      qteEnStock: 3,
    },
    {
      codeProduit: "2B23",
      nomProduit: "lorem2",
      prixProduit: 120,
      qteEnStock: 3,
    },
    {
      codeProduit: "1B03",
      nomProduit: "lorem2",
      prixProduit: 120,
      qteEnStock: 3,
    },
  ];
  const [codeProduit, setCodeProduit] = useState("");
  const [nomProduit, setNomProduit] = useState("");
  // const [filteredData, setFilteredData] = useState(stock);

  const handleCodeProduitChange = (event) => {
    setCodeProduit(event.target.value);
  };

  const handleNomProduitChange = (event) => {
    setNomProduit(event.target.value);
  };

  // useEffect(() => {
  //   const filteredStock = stock.filter((stk) => {
  //     if (nomProduit === "" && codeProduit === "") {
  //       return true;
  //     }
  //     return stk.codeProduit == codeProduit || stk.nomProduit == nomProduit;
  //   });
  //   setFilteredData(filteredStock);
  // }, [codeProduit, nomProduit]);
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
                  <h1 className="m-0 text-dark">Etat Du Stock</h1>
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
                <div className="col-6">
                  <label>Code produit:</label>
                  <input
                    type="text"
                    value={codeProduit}
                    className="form-control"
                    onChange={handleCodeProduitChange}
                  />
                </div>
                <div className="col-6">
                  <label>Nom produit:</label>
                  <input
                    type="text"
                    value={nomProduit}
                    className="form-control"
                    onChange={handleNomProduitChange}
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

export default EtatDuStock;
