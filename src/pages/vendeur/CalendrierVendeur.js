import React from "react";
import SideBar from "../../components/vendeur/SideBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const CalendrierVendeur = () => {
  const columns = [
    {
      dataField: "jour",
      text: "jour",
    },
    {
      dataField: "heure1",
      text: "8h-12h",
    },
    {
      dataField: "heure2",
      text: "13h-17h",
    },
  ];
  const data = [
    {
      jour: "9/01/2023",
      heure1: "absent",
      heure2: "present",
    },
  ];
  return (
    <>
      <Header />
      <SideBar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Calendrier</h1>
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
            <div className="card p-3">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <label>selectionner date debut</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-6">
                  {" "}
                  <label>selectionner date fin</label>
                  <input type="date" className="form-control" />
                </div>
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
      <Footer />
    </>
  );
};

export default CalendrierVendeur;
