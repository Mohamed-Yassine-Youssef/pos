import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
import Footer from "../../components/Footer";
import AddClient from "../../components/caissier/AddClient";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";

const GestionClient = () => {
  const [data, setData] = useState();
  const columns = [
    {
      dataField: "cin",
      text: "cin",
    },
    {
      dataField: "name",
      text: "nom",
    },
    {
      dataField: "address",
      text: "addresse",
    },
    {
      dataField: "phoneNumber",
      text: "numéro télephone",
    },
    {
      dataField: "birthDate",
      text: "date naissance",
      formatter: (cell) => cell.substring(0, 10),
    },
    {
      dataField: "email",
      text: "addresse email",
    },
    {
      dataField: "numberOfPurchases",
      text: "nombre d'achat",
    },
    {
      dataField: "spentMoney",
      text: "montant total des achats",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const userdata = await axios.get("/api/client/getClients");

      setData(userdata.data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper ">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="mb-2 text-dark">Gestion Client</h1>
                <AddClient />
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
          <section className="content container card p-5">
            {data && (
              <BootstrapTable
                bootstrap4
                keyField="id"
                data={data}
                columns={columns}
                pagination={paginationFactory()}
              />
            )}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GestionClient;
