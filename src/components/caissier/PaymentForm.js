import React, { useState } from "react";
import Facture from "./Facture";
import ReactDOMServer from "react-dom/server";
import { useLocation } from "react-router-dom";
const PaymentForm = () => {
  const [method, setMethod] = useState();
  const endpoint = useLocation();
  const printPdf = (e) => {
    e.preventDefault();
    const element = ReactDOMServer.renderToString(<Facture />); // replace with the ID of your component
    console.log(element);
    const html = `
    <html>
      <head>
        <title> </title>
        <style>
        .container {
          width: 300px;
        }
        
        .tableRow {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center; /* added */
          margin-bottom: 8px;
        }
        .totalRow {
          border-top: 1px solid black;
          border-bottom: 1px solid black;
        }
        .tableRow h3,
        .tableRow p {
          flex-basis: 25%; /* changed */
          text-align: center; /* added */
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
          <h3>Particulars</h3>
          <h3>Rate</h3>
          <h3>Qty</h3>
          <h3>Amount</h3>
        </div>
        <div class='tableRow'>
          <p>Head and Shoulder</p>
          <p>100</p>
          <p>2</p>
          <p>200</p>
        </div>
        <div class='tableRow'>
          <p>Britania</p>
          <p>25</p>
          <p>2</p>
          <p>50</p>
        </div>
        <div class='tableRow'>
          <p>Tomatoes</p>
          <p>40</p>
          <p>1</p>
          <p>40</p>
        </div>
        <div class='tableRow'>
          <p>Chocolates</p>
          <p>5</p>
          <p>1</p>
          <p>40</p>
        </div>
        <div class='tableRow totalRow'>
          <p />
          <h3>Total</h3>
          <p />
          <p>385</p>
        </div>
      </div>
      <div class='footer'>
        <p class='footerText'>Thank you for shopping with us!</
    
    div>
      </body>
    </html>
  `;

    const win = window.open("", "", "height=700,width=700");
    win.document.write(html);
    win.document.close();
    win.print();
  };
  return (
    <div>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal2"
          style={{
            background: "#252525",
            color: "white",
            borderRadius: "5px",
            padding: "3px 5px",
            borderColor: "transparent",
            outline: "none",
          }}
          className={`nav-link ${
            endpoint.pathname == "/caissiere" ? " bg-success" : ""
          }`}
        >
          payer
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ color: "black" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  payment
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="filtre col-6 ">
                  <label>montant à payer:</label>
                  <input className="form-control" type="number" />
                </div>
                <div className="filtre col-12 mt-3 pb-2">
                  <label>choisir méthode de payment</label>
                  <div className="d-flex justify-content-space-arround">
                    <input
                      type="radio"
                      name="method"
                      defaultValue="espece"
                      className="mr-1"
                      onChange={(e) => setMethod(e.target.value)}
                    />{" "}
                    espéce
                    <br />
                    <input
                      type="radio"
                      name="method"
                      defaultValue="chéque"
                      className="ml-5 mr-1"
                      onChange={(e) => setMethod(e.target.value)}
                    />{" "}
                    chéque
                    <br />
                    <input
                      type="radio"
                      name="method"
                      defaultValue="carteBancaire"
                      className="ml-5 mr-1"
                      onChange={(e) => setMethod(e.target.value)}
                    />{" "}
                    carte bancaire
                  </div>
                  {method == "espece" && (
                    <button
                      className="btn btn-primary"
                      style={{ marginTop: "20px" }}
                      onClick={printPdf}
                    >
                      confirmer
                    </button>
                  )}
                  {method == "chéque" && (
                    <div className="row mt-4">
                      <div className="filtre col-4">
                        <label>banque</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="filtre col-4">
                        <label>agence</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="filtre col-4">
                        <label>code</label>
                        <input type="text" className="form-control" />
                      </div>
                      <button
                        className="btn btn-primary"
                        style={{ marginTop: "10px" }}
                      >
                        confirmer
                      </button>
                    </div>
                  )}

                  {method == "carteBancaire" && (
                    <div className=" mt-4">
                      <div className="filtre col-4">
                        <label>Num transaction</label>
                        <input type="text" className="form-control" />
                      </div>

                      <button
                        className="btn btn-primary"
                        style={{ marginTop: "20px" }}
                        onClick={printPdf}
                      >
                        confirmer
                      </button>
                    </div>
                  )}
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
