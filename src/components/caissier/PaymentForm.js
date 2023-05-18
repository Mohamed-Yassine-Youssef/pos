import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const PaymentForm = ({
  total,
  tableData,
  sousTotal,
  tax,
  promo,
  selectedClientName,
  selectedClientId,
  saleID,
  caissier,
  vendeur,
}) => {
  const [method, setMethod] = useState();
  const [montantPourPayer, setMontantPourPayer] = useState(0);
  const [montantRest, setMontantRest] = useState();
  const endpoint = useLocation();

  const handleMontant = (e) => {
    setMontantPourPayer(e.target.value);
  };

  const addSale = async () => {
    try {
      await axios.post("/api/sale", {
        nom_client: selectedClientName,
        client: selectedClientId || null,
        mode_paiement: method,
        products: tableData,
        total: total,
        status: total - montantPourPayer > 0 ? "en cours" : "payé",
        montantRestant: total - montantPourPayer,
        caissier_name: caissier,
        vendeur_name: vendeur,
      });

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
  
          ${tableData
            .map((item) => {
              return `
                  <div class="tableRow">
                    <p>${item.name}</p>
                    <p>${item.quantity}</p>
                    <p>${item.price * item.quantity}</p>
                  </div>
                `;
            })
            .join("")}
         
          <div class=' totalRow'>
          <div class='tableRow '>
          <h3>sous totale</h3>
          <p>${sousTotal}</p>
          </div>
          <div class='tableRow '>
          <h3>Tax</h3>
          <p>${tax}%</p>
          </div>
  
          <div class='tableRow '>
          <h3>Remise</h3>
          <p>${promo}%</p>
          </div>
  
            <div class='tableRow '>
            <h3>Total</h3>
            <p>${total}</p>
            </div>
            <div class='tableRow '>
            <h3>montant payé </h3>
            <p>${montantPourPayer}</p>
            </div>
            <div class='tableRow '>
            <h3>montant restant</h3>
            <p>${
              montantRest > 0
                ? Number(montantRest - montantPourPayer).toFixed(2)
                : (total - montantPourPayer).toFixed(2)
            }</p>
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
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/sale/getSales");
      const salesdata = response.data;
      const filteredData = salesdata.filter((sale) => {
        return sale._id === saleID;
      });
      setMontantRest(filteredData[0].montantRestant);
    } catch (error) {
      console.log(error);
    }
  };
  const updateSale = async () => {
    try {
      await axios.put("/api/sale/updateSale/" + saleID, {
        status: montantRest - montantPourPayer > 0 ? "en cours" : "payé",
        montantRestant: montantRest - montantPourPayer,
      });

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
  
          ${tableData
            .map((item) => {
              return `
                  <div class="tableRow">
                    <p>${item.name}</p>
                    <p>${item.quantity}</p>
                    <p>${item.price * item.quantity}</p>
                  </div>
                `;
            })
            .join("")}
         
          <div class=' totalRow'>
          <div class='tableRow '>
          <h3>sous totale</h3>
          <p>${sousTotal}</p>
          </div>
          <div class='tableRow '>
          <h3>Tax</h3>
          <p>${tax}%</p>
          </div>
  
          <div class='tableRow '>
          <h3>Remise</h3>
          <p>${promo}%</p>
          </div>
  
            <div class='tableRow '>
            <h3>Total</h3>
            <p>${total}</p>
            </div>
            <div class='tableRow '>
            <h3>montant payé </h3>
            <p>${Number(
              Number(total - montantRest) + Number(montantPourPayer)
            ).toFixed(2)}</p>
            </div>
            <div class='tableRow '>
            <h3>montant restant</h3>
            <p>${
              montantRest > 0
                ? Number(montantRest - montantPourPayer).toFixed(2)
                : (total - montantPourPayer).toFixed(2)
            }</p>
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
      if (montantRest - montantPourPayer <= 0) {
        window.location.href = "/caissiere";
      } else window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
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
                  {montantRest && montantRest > 0 && (
                    <label>
                      montant Restant: {Number(montantRest).toFixed(2)}
                    </label>
                  )}
                  <label>montant à payer:</label>
                  <input
                    className="form-control"
                    type="number"
                    onChange={(e) => handleMontant(e)}
                  />
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
                  {montantRest > 0 ? (
                    <button
                      className="btn btn-primary"
                      style={{ marginTop: "10px" }}
                      onClick={updateSale}
                    >
                      confirmer
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      style={{ marginTop: "10px" }}
                      onClick={addSale}
                    >
                      confirmer
                    </button>
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
