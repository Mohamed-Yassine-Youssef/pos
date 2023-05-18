import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import { Dropdown, FormControl } from "react-bootstrap";
import axios from "axios";
const RapportVentes = () => {
  const [productselectedName, setProductSelectedName] = useState("");
  const [productselectedReference, setProductSelectedReference] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();
  const [reportData, setReportData] = useState();
  const [venteParJour, setVenteParJour] = useState([]);
  const handleProductselect = (name, ref) => {
    setProductSelectedName(name);
    setProductSelectedReference(ref);
  };

  async function fetchProductsData() {
    const productsdata = await axios.get("/api/products/getProducts");
    setProductsData(productsdata.data);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const generateReport = async (e) => {
    try {
      e.preventDefault();
      const data = await axios.get(
        `/api/sale/rapport-vente/${productselectedName}/${dateDebut}/${dateFin}`
      );

      setReportData(data.data);
      setVenteParJour(reportData.ventesParJour);
      const html = `
  <html>
  <head>
    <title>Rapport de vente</title>
    <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    
    h1 {
      text-align: center;
    }
    
    .product-info, .sales-info, .sales-table {
      margin-bottom: 30px;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    
    th {
      background-color: #f2f2f2;
    }
    
    </style>
  </head>
  <body>
    <h1>Rapport de vente pour le produit ${productselectedName}</h1>
  
    <div class="product-info">
      <h2>Nom du produit : ${productselectedName}</h2>
      <p>Référence du produit : ${productselectedReference}</p>
     
    </div>
  
    <div class="sales-info">
      <h2>Informations sur les ventes</h2>
      <p>Nombre d'unités vendues : ${reportData.totalQuantiteVendue}</p>
      <p>Montant des ventes générées : ${reportData.totalMontantVendu}</p>
    </div>
  
    <div class="sales-table">
      <h2>Ventes du produit sur la période donnée</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Unités vendues</th>
            <th>Montant des ventes</th>
          </tr>
        </thead>
        <tbody>
        ${Object.keys(venteParJour)
          .map((date) => {
            const item = venteParJour[date];
            return `<tr>
              <td>${date}</td>
              <td>${item.quantite}</td>
              <td>${item.montant}</td>
            </tr>
            <tr>`;
          })
          .join("")}
         
          <!-- Ajoutez les autres lignes de données ici -->
        </tbody>
      </table>
    </div>
  </body>
  </html>
    `;

      const win = window.open("", "", "height=700,width=700");
      win.document.write(html);
      win.document.close();
      win.print();
    } catch (error) {
      console.error("Error generating report:", error);
      // Handle error here
    }
  };
  useEffect(() => {
    fetchProductsData();
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
                  <h1 className="m-0 text-dark">Rapport des ventes</h1>
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
            <div className="container-fluid card p-3">
              <form className="col-6 ml-auto mr-auto">
                <h4 style={{ textAlign: "center" }}>
                  Génerer un rapport de vente
                </h4>
                <div className="form-group ">
                  <label htmlFor="exampleInputddebut">Date début</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputddebut"
                    placeholder="date début"
                    onChange={(e) => {
                      setDateDebut(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputdatefin">Date fin</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputdatefin"
                    placeholder="date fin"
                    onChange={(e) => {
                      setDateFin(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputnomProduit">Nom du produit</label>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className="custom-toggle"
                    >
                      {productselectedName}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-menu">
                      <FormControl
                        type="text"
                        placeholder="chercher..."
                        onChange={handleSearch}
                        className="custom-input"
                      />
                      <Dropdown.Divider />

                      {productsData &&
                        productsData
                          .filter((option) =>
                            option.name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .map((option, index) => (
                            <Dropdown.Item
                              key={index}
                              href="#"
                              className="custom-item"
                              onClick={() =>
                                handleProductselect(option.name, option.code)
                              }
                            >
                              {option.name}
                            </Dropdown.Item>
                          ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-dark mt-3"
                    onClick={generateReport}
                  >
                    Generate
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RapportVentes;
