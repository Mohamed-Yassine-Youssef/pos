import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";

const TransfertStock = () => {
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
                    Demande du transfert du dépot centrale au dépot magasin
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
            <div className="container-fluid card p-3">
              <form className="col-6 ml-auto mr-auto">
                <h4 style={{ textAlign: "center" }}>
                  Génerer une demande de transfert
                </h4>

                <div className="form-group ">
                  <label htmlFor="exampleInputnomMagasin">
                    Nom Destination
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputnomMagasin"
                    placeholder="Nom Destination"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputcatProduit">
                    destination du transfert
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputcatProduit"
                    placeholder="destination"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputnomProduit">
                    reference du produit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputnomProduit"
                    placeholder="reférence du produit "
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputnomProduit">
                    date souhaité pour le transfert
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputnomProduit"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-dark mt-3">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransfertStock;
