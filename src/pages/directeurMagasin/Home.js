import React, { useState } from "react";
import SideBar from "../../components/directeurMagasin/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LineChart from "../../components/directeurMagasin/LineChart";

const Home = () => {
  const Data = [
    {
      id: 1,
      month: "janvier",
      objectif: 80000,
    },
    {
      id: 2,
      month: "fevrier",
      objectif: 45677,
    },
    {
      id: 3,
      month: "Mars",
      objectif: 78888,
    },
    {
      id: 3,
      month: "Avril",
      objectif: 78888,
    },
    {
      id: 3,
      month: "Mai",
      objectif: 78888,
    },
    {
      id: 3,
      month: "juin",
      objectif: 78888,
    },
    {
      id: 3,
      month: "juiller",
      objectif: 78888,
    },
    {
      id: 3,
      month: "Aout",
      objectif: 78888,
    },
    {
      id: 3,
      month: "september",
      objectif: 78888,
    },
    {
      id: 3,
      month: "october",
      objectif: 78888,
    },
    {
      id: 3,
      month: "november",
      objectif: 78888,
    },
    {
      id: 3,
      month: "decembre",
      objectif: 78888,
    },
  ];

  return (
    <div>
      <Header />
      <SideBar />
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Home Page</h1>
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
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        53<sup style={{ fontSize: 20 }}></sup>
                      </h3>
                      <p>produits totales</p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{
                          width: "70px",
                          position: "absolute",
                          right: "15px",
                          top: "15px",
                          transition: "all .3s linear",
                          fill: "currentColor",
                        }}
                      >
                        <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* ./col */}

                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>65000$</h3>
                      <p>ventes totales</p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                          width: "70px",
                          position: "absolute",
                          right: "15px",
                          top: "15px",
                          transition: "all .3s linear",
                          fill: "currentColor",
                        }}
                      >
                        <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>1000$</h3>
                      <p>chiffre d'affaire journalier</p>
                    </div>
                    <div className="icon">
                      {/* <i className="ion ion-bag" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                          width: "70px",
                          position: "absolute",
                          right: "15px",
                          top: "15px",
                          transition: "all .3s linear",
                          fill: "currentColor",
                        }}
                      >
                        <path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2l0 .1v0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="d-flex justify-content-center">
                <div style={{ width: 700 }} className=" px-3 py-4">
                  <LineChart />{" "}
                </div>
              </div>

              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    </div>
  );
};

export default Home;
