import React, { useContext } from "react";
import SideBar from "../../components/vendeur/SideBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Context } from "../../context/Context";
const CalendrierVendeur = () => {
  // const[user]=useContext(Context)
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
      jour: "lundi",
      heure1: "-",
      heure2: "present",
    },
    {
      jour: "mardi",
      heure1: "-",
      heure2: "present",
    },
    {
      jour: "mercredi",
      heure1: "-",
      heure2: "present",
    },
    {
      jour: "jeudi",
      heure1: "present",
      heure2: "-",
    },
    {
      jour: "vendredi",
      heure1: "-",
      heure2: "present",
    },
    {
      jour: "samedi",
      heure1: "present",
      heure2: "-",
    },
    {
      jour: "dimanche",
      heure1: "-",
      heure2: "present",
    },
  ];

  // const getCalendarData = async () => {
  //   const caldata = await axios.get("/api/calendar/getCalendar");
  //   const response = caldata.data[0].cal;
  //   console.log(response);
  //   const filData = response
  //     .filter((item) => {
  //       return item.nom === user.name;
  //     })
  //     .map((item) => ({
  //       nomEmployer: item.nom,
  //       lundi: item.lundi,
  //       mardi: item.mardi,
  //       mercredi: item.mercredi,
  //       jeudi: item.jeudi,
  //       vendredi: item.vendredi,
  //       samedi: item.samedi,
  //       dimanche: item.dimanche,
  //     }));
  //   seData(filData);
  // };
  // useEffect(() => {
  //   getCalendarData();
  // }, []);
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
                <h1 className="m-0 text-dark">Calendrier de la semaine</h1>
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
