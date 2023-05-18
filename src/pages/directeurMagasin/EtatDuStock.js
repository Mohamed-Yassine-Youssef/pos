import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";
const EtatDuStock = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      dataField: "code",
      text: "code produit",
    },
    {
      dataField: "name",
      text: "nom produit",
    },
    {
      dataField: "price",
      text: "prix produit",
    },
    {
      dataField: "quantity",
      text: "qte en stock",
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

  const fetchSales = async () => {
    try {
      const response = await axios.get("/api/products/getProducts");
      const productsdata = response.data;

      const filteredData = productsdata

        .filter((p) => {
          if (codeProduit !== "") {
            return p.code.toLowerCase().includes(codeProduit.toLowerCase());
          }
          return true;
        })
        .filter((p) => {
          if (nomProduit !== "") {
            return p.name.toLowerCase().includes(nomProduit.toLowerCase());
          }
          return true;
        })
        .map((p) => ({
          code: p.code,
          name: p.name,
          price: p.price,
          quantity: p.quantity,
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
