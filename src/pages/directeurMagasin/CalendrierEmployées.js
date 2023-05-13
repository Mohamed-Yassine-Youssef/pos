import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const CalendrierEmployées = () => {
  const columns = [
    {
      dataField: "nomEmployer",
      text: "nom de l'employer",
    },
    {
      dataField: "lundi",
      text: "lundi",
    },
    {
      dataField: "mardi",
      text: "mardi",
    },
    {
      dataField: "mercredi",
      text: "mercredi",
    },
    {
      dataField: "jeudi",
      text: "vendredi",
    },
    {
      dataField: "samedi",
      text: "dimanche",
    },
  ];
  const data = [
    {
      nomEmployer: "jean",
      lundi: "Absent",
      mardi: "8h-12h",
      mercredi: "8h-12h",
      jeudi: "8h-12h",
      vendredi: "Absent",
      samedi: "Absent",
      dimanche: "Absent",
    },
    {},
  ];
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
                  <h1 className="m-0 text-dark">Calendrier des Employées</h1>
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
                <div className="col-4">
                  <label> Date debut:</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-4">
                  <label>Date fin:</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="card mt-3">
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

export default CalendrierEmployées;
