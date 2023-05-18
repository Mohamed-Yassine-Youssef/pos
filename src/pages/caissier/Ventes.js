import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
import Footer from "../../components/Footer";
import PaymentForm from "../../components/caissier/PaymentForm";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Ventes = () => {
  const [data, setData] = useState([]);
  const [filterNomClient, setFilterNomClient] = useState("");
  const [filterDateDebut, setFilterDateDebut] = useState("");
  const [filterDateFin, setFilterDateFin] = useState("");
  const [reference, setReference] = useState("");
  const columns = [
    {
      dataField: "reférence",
      text: "reférence",
    },
    {
      dataField: "nom_client",
      text: "nom client",
    },
    {
      dataField: "date",
      text: "date",
      formatter: (cell) => cell.substring(0, 10),
    },

    {
      dataField: "total",
      text: "total",
    },
    {
      dataField: "status",
      text: "status",
    },
    {
      dataField: "recu_final",
      text: "recu final",
    },
  ];

  const printPdf = (total, products) => {
    const productsHtml = products
      ? products
          .map((item) => {
            const totalPrice = item.price * item.quantity;
            return `
            <div class="tableRow">
              <p>${item.name}</p>
              <p>${item.quantity}</p>
              <p>${totalPrice}</p>
            </div>
          `;
          })
          .join("")
      : "";
    const html = `
    <html>
      <head>
        <title> </title>
        <style>
        .container {
          width: 300px;
        }
        .tableRow1 {
        align-items: center; /* added */
        }
        .tableRow {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center; /* added */
          
        }
        
        .totalRow {
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          
        }
        .tableRow h3,
        .tableRow p {
          text-align: center; /* added */
          margin-top:0px
        }
      </style>
      </head>
      <body>
      <div class='container'>
      <div class='header'>
        <h1 class='companyName'>AMIT CHAMBIAL PVT LTD</h1>
        <p class='address'>
          FLoor 2 Building No 34 India <br /> Phone No- 0192083910
        </p>
        <p class='panTin'>PAN: AAKPS9298A TIN: 09820163701</p>
        <h2 class='invoiceTitle'>RETAIL INVOICE</h2>
        <div class='billInfoContainer'>
          <div class='billInfoRow'>
            <p>BILL NO: 091</p>
            <p>TABLE NO: 091</p>
          </div>
          <div class='billInfoRow'>
            <p>BILL DATE: 10/Mar/2022</p>
            <p>TIME: 14:10</p>
          </div>
        </div>
      </div>
      <div class='tableContainer'>

      <div class='tableRow'>
          <h3>Article</h3>
         
          <h3>Qte</h3>
          <h3>Montant</h3>
        </div>

        ${productsHtml}
       
        <div class=' totalRow'>

          <div class='tableRow '>
          <h3>Total</h3>
          <p>${total}</p>
          </div>
          <div class='tableRow '>
          <h3>montant payé </h3>
          <p>${Number(total).toFixed()}</p>
          </div>
          
        </div>
      </div>
      <div class='footer'>
        <p class='footerText'>Merci de votre achat ! </
    
    div>
      </body>
    </html>
  `;

    const win = window.open("", "", "height=700,width=700");
    win.document.write(html);
    win.document.close();
    win.print();
  };
  const fetchSales = async () => {
    try {
      const response = await axios.get("/api/sale/getSales");
      const salesdata = response.data;

      const filteredData = salesdata
        .filter((sale) => {
          if (filterNomClient !== "") {
            return sale.nom_client
              .toLowerCase()
              .includes(filterNomClient.toLowerCase());
          }
          return true;
        })
        .filter((sale) => {
          if (reference !== "") {
            return sale.reference
              .toLowerCase()
              .includes(reference.toLowerCase());
          }
          return true;
        })
        .filter((sale) => {
          if (filterDateDebut !== "") {
            return new Date(sale.createdAt) >= new Date(filterDateDebut);
          }
          return true;
        })
        .filter((sale) => {
          console.log(sale);
          if (filterDateFin !== "") {
            return new Date(sale.createdAt) <= new Date(filterDateFin);
          }
          return true;
        })
        .map((sale) => ({
          reférence: sale.reference,
          nom_client: sale.nom_client,
          date: sale.createdAt,
          total: sale.total,
          status: (
            <td
              style={{
                display: "flex",
                justifyContent: "center",
                border: "none",
              }}
            >
              <span
                style={{
                  background:
                    sale.status === "payé"
                      ? "green"
                      : sale.status === "en cours"
                      ? "blue"
                      : "red",
                  padding: "5px 10px",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                {sale.status === "payé" ? (
                  <span>{sale.status}</span>
                ) : (
                  <Link
                    to={`/caissiere/ticket/${sale._id}`}
                    style={{ color: "white" }}
                  >
                    {sale.status}
                  </Link>
                )}
              </span>
            </td>
          ),
          recu_final: (
            <td
              style={{
                display: "flex",
                justifyContent: "center",
                border: "none",
              }}
            >
              {sale.status === "payé" && (
                <button
                  style={{ border: "none", boxShadow: "none" }}
                  onClick={() => printPdf(sale.total, sale.products)}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/dist/img/printer.png"}
                    style={{ width: "30px" }}
                  />
                </button>
              )}
            </td>
          ),
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
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container">
            <div className="mb-2">
              <h1 className="mb-3 text-dark">Les ventes</h1>
              <div className="card p-2">
                <div className="filtres row mb-3 ">
                  <div className="filtre col-2">
                    <label>nom client:</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setFilterNomClient(e.target.value)}
                    />
                  </div>
                  <div className="filtre col-2">
                    <label>référence:</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setReference(e.target.value)}
                    />
                  </div>

                  <div className="filtre col-2">
                    <label>date début:</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setFilterDateDebut(e.target.value)}
                    />
                  </div>
                  <div className="filtre col-2">
                    <label>date fin:</label>
                    <input
                      type="date"
                      className="form-control"
                      onChange={(e) => setFilterDateFin(e.target.value)}
                    />
                  </div>
                </div>
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
        <div>
          <section className="content container p-5 card">
            <div className="">
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={data}
                columns={columns}
                pagination={paginationFactory()}
              />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ventes;
