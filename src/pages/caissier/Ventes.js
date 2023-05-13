import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
import Footer from "../../components/Footer";
import PaymentForm from "../../components/caissier/PaymentForm";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Link } from "react-router-dom";
const Ventes = () => {
  const columns = [
    {
      dataField: "reférence",
      text: "reférence",
    },
    {
      dataField: "code_client",
      text: "code client",
    },
    {
      dataField: "date",
      text: "date",
    },

    {
      dataField: "status",
      text: "status",
    },
    {
      dataField: "total",
      text: "total",
    },
    {
      dataField: "payer",
      text: "payer",
    },
    {
      dataField: "recu_final",
      text: "recu final",
    },
  ];
  const data = [
    {
      reférence: "19872",
      code_client: "xxx",
      date: "jj/dd/yyyy",

      status: "payé",
      total: "123",
      payer: (
        <td
          style={{ display: "flex", justifyContent: "center", border: "none" }}
        >
          {" "}
          <span
            style={{
              background: "green",
              padding: "5px 10px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            payé
          </span>
        </td>
      ),
      recu_final: (
        <td
          style={{ display: "flex", justifyContent: "center", border: "none" }}
        >
          <button style={{ border: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "30px" }}
            >
              <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </button>
        </td>
      ),
    },
    {
      reférence: "19872",
      code_client: "xxx",
      date: "jj/dd/yyyy",
      status: "payé",
      total: "123",
      payer: (
        <td
          style={{ display: "flex", justifyContent: "center", border: "none" }}
        >
          <Link to="/caissiere/ticket/add">
            <span
              style={{
                background: "blue",
                padding: "5px 10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              en cours
            </span>
          </Link>
        </td>
      ),
      recu_final: (
        <td
          style={{ display: "flex", justifyContent: "center", border: "none" }}
        >
          <button style={{ border: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "30px" }}
            >
              <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </button>
        </td>
      ),
    },
    {
      reférence: "19872",
      code_client: "xxx",
      date: "jj/dd/yyyy",

      status: "payé",
      total: "123",
      payer: (
        <td
          style={{ display: "flex", justifyContent: "center", border: "none" }}
        >
          {" "}
          <Link to="/caissiere/ticket/add">
            <span
              style={{
                background: "red",
                padding: "5px 10px",
                color: "white",
                borderRadius: "5px",
              }}
            >
              non payé
            </span>
          </Link>
        </td>
      ),
      recu_final: (
        <td
          style={{ display: "flex", justifyContent: "center", border: "none" }}
        >
          <button style={{ border: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "30px" }}
            >
              <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
            </svg>
          </button>
        </td>
      ),
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
            <div className="mb-2">
              <h1 className="mb-3 text-dark">Les ventes</h1>
              <div className="card p-2">
                <div className="filtres row mb-3 ">
                  <div className="filtre col-2">
                    <label>code client:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="filtre col-2">
                    <label>référence:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="filtre col-2">
                    <label>statust:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="filtre col-2">
                    <label>date début:</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="filtre col-2">
                    <label>date fin:</label>
                    <input type="date" className="form-control" />
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
              {/* <table class="table  table-bordered  ">
                <thead>
                  <tr>
                    <th scope="col">référence</th>
                    <th scope="col">code client</th>
                    <th scope="col">date</th>
                    <th scope="col">code de trasaction</th>
                    <th scope="col">statuss</th>
                    <th scope="col">total</th>
                    <th scope="col">payer</th>
                    <th scope="col">recu final</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">18987</th>
                    <td>xxx</td>
                    <td>JJ/DD/YYYY</td>
                    <td>873467</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      <span
                        style={{
                          background: "green",
                          padding: "5px 10px",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        payé
                      </span>
                    </td>
                    <td>120$</td>
                    <td>
                      <PaymentForm />
                    </td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ border: "none" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{ width: "30px" }}
                        >
                          <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">19987</th>
                    <td>xxx</td>
                    <td>JJ/DD/YYYY</td>
                    <td>873467</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      <span
                        style={{
                          background: "blue",
                          padding: "5px 10px",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        en cours
                      </span>
                    </td>
                    <td>120$</td>
                    <td>
                      <PaymentForm />
                    </td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ border: "none" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{ width: "30px" }}
                        >
                          <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">13434</th>
                    <td>xxx</td>
                    <td>JJ/DD/YYYY</td>
                    <td>873467</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      {" "}
                      <span
                        style={{
                          background: "red",
                          padding: "5px 10px",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        non payé
                      </span>
                    </td>
                    <td>120$</td>
                    <td>
                      <PaymentForm />
                    </td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ border: "none" }} disabled>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          style={{ width: "30px" }}
                        >
                          <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
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
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ventes;
