import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

const HistoriqueVentes = () => {
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  const time = `${date}/${month}/${year}`;

  const columns = [
    {
      dataField: "numfacture",
      text: "Numéro de facture",
    },
    {
      dataField: "nomclient",
      text: "Nom du client",
    },
    {
      dataField: "nomproduit",
      text: "Nom produit",
    },
    {
      dataField: "montantvente",
      text: "Montant de la vente",
    },
    {
      dataField: "nomproduit",
      text: "Nom produit",
    },
    {
      dataField: "montantvente",
      text: "montant de vente",
    },
    {
      dataField: "espece",
      text: "Paiement en espèces",
    },
    {
      dataField: "cheque",
      text: "Paiement en chéque",
    },
    {
      dataField: "crédit",
      text: "Paiement par carte de crédit",
    },
    {
      dataField: "total",
      text: "Total des paiements",
    },
  ];
  const data = [
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
    {
      numfacture: "001",
      nomclient: "Mark",
      nomproduit: "lorem",
      montantvente: "50",
      espece: "50",
      cheque: "60",
      crédit: "",
      total: "100",
    },
  ];
  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container">
            {/* /.row */}
            <h1 className="mb-3 text-dark">Historique des ventes</h1>
            <input type="date" className="form-control col-6 mb-3 mt-3" />
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div>
          <section className="content container card p-5">
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={data}
              columns={columns}
              pagination={paginationFactory()}
            />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoriqueVentes;
