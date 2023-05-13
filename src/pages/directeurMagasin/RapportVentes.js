import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";

const RapportVentes = () => {
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
                  <h1 className="m-0 text-dark">Rapport des ventes</h1>
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
                  Génerer un rapport de vente
                </h4>
                <div className="form-group ">
                  <label htmlFor="exampleInputddebut">Date début</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputddebut"
                    placeholder="date début"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputdatefin">Date fin</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputdatefin"
                    placeholder="date fin"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputnomMagasin">Nom Magasin</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputnomMagasin"
                    placeholder="Nom Magasin"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="exampleInputcatProduit">
                    catégorie du produit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputcatProduit"
                    placeholder="catProduit"
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="exampleInputnomProduit">
                    référence du produit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputnomProduit"
                    placeholder="référence Produit"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-dark mt-3">
                    Generate
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

export default RapportVentes;
