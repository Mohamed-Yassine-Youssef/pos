import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";

const StockAutreMagasin = () => {
  const stckAutreMagasin = [
    {
      nomMagasin: "lorem",
      codeArticle: "1A34",
      nomArticle: "loremlorem0",
      prixVente: 123,
      QteEnStock: 5,
    },
    {
      nomMagasin: "lorem",
      codeArticle: "2S34",
      nomArticle: "loremlorem",
      prixVente: 123,
      QteEnStock: 5,
    },
    {
      nomMagasin: "lorem",
      codeArticle: "1D04",
      nomArticle: "loremlorem",
      prixVente: 123,
      QteEnStock: 5,
    },
  ];

  const [codeArticle, setCodeArticle] = useState("");
  const [filteredData, setFilteredData] = useState(stckAutreMagasin);

  const handleCodeArticleChange = (e) => {
    setCodeArticle(e.target.value);
  };
  useEffect(() => {
    const filteredStock = stckAutreMagasin.filter((stk) => {
      return stk.codeArticle === codeArticle;
    });
    setFilteredData(filteredStock);
  }, [codeArticle]);

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
                  <h1>stock Des Autres Magasin</h1>
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
              <label>Code Article:</label>
              <input
                type="text"
                value={codeArticle}
                className="form-control"
                onChange={handleCodeArticleChange}
              />
              <div className="card mt-3">
                <table className="table table-bordred">
                  <thead>
                    <tr>
                      <th scope="col">Nom Magasin</th>
                      <th scope="col">code Article</th>
                      <th scope="col">nom produit</th>
                      <th scope="col">prix vente</th>
                      <th scope="col">Qte en stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((stk, index) => (
                      <tr key={index}>
                        <td>{stk.nomMagasin}</td>
                        <td>{stk.codeArticle}</td>
                        <td>{stk.nomArticle}</td>
                        <td>{stk.prixVente}</td>
                        <td>{stk.QteEnStock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StockAutreMagasin;
