import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";
const CalendrierEmployées = () => {
  const [data, seData] = useState([]);
  const columns = [
    {
      dataField: "nomEmployer",
      text: "nom de l'employer",
    },
    {
      dataField: "lundi",
      text: "lundi",
      dataAlign: "center",
    },
    {
      dataField: "mardi",
      text: "mardi",
      dataAlign: "center",
    },
    {
      dataField: "mercredi",
      text: "mercredi",
      dataAlign: "center",
    },
    {
      dataField: "jeudi",
      text: "jeudi",
      dataAlign: "center",
    },
    {
      dataField: "vendredi",
      text: "vendredi",
      dataAlign: "center",
    },
    {
      dataField: "samedi",
      text: "samedi",
      dataAlign: "center",
    },
    {
      dataField: "dimanche",
      text: "dimanche",
      dataAlign: "center",
    },
  ];

  const getCalendarData = async () => {
    const caldata = await axios.get("/api/calendar/getCalendar");
    const response = caldata.data[0].cal;
    console.log(response);
    const filData = response.map((item) => ({
      nomEmployer: item.nom,
      lundi: item.lundi,
      mardi: item.mardi,
      mercredi: item.mercredi,
      jeudi: item.jeudi,
      vendredi: item.vendredi,
      samedi: item.samedi,
      dimanche: item.dimanche,
    }));
    seData(filData);
  };
  useEffect(() => {
    getCalendarData();
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
                  <h1 className="m-0 text-dark">
                    Calendrier des employés de la semaine.
                  </h1>
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
              <div className="card mt-3 p-3 ">
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
