import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
import Footer from "../../components/Footer";
import axios from "axios";

const StockAutreMagasinPourCaissier = () => {
  // const stckAutreMagasin = [
  //   {
  //     nomMagasin: "lorem",
  //     codeArticle: "1A34",
  //     nomArticle: "loremlorem0",
  //     prixVente: 123,
  //     QteEnStock: 5,
  //   },
  //   {
  //     nomMagasin: "lorem",
  //     codeArticle: "2S34",
  //     nomArticle: "loremlorem",
  //     prixVente: 123,
  //     QteEnStock: 5,
  //   },
  //   {
  //     nomMagasin: "lorem",
  //     codeArticle: "1D04",
  //     nomArticle: "loremlorem",
  //     prixVente: 123,
  //     QteEnStock: 5,
  //   },
  // ];
  const [stckAutreMagasin, setStckAutreMagasin] = useState();
  const [codeArticle, setCodeArticle] = useState("");
  const [filteredData, setFilteredData] = useState(stckAutreMagasin);
  const fetchArticles = async () => {
    const data = await axios.get(
      "/api/stockAutreMagasins/getStockAutreMagasin/"
    );

    setStckAutreMagasin(data.data);
  };
  const handleCodeArticleChange = (e) => {
    setCodeArticle(e.target.value);
  };

  useEffect(() => {
    fetchArticles();
    const filteredStock = stckAutreMagasin?.filter((stk) => {
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
                <div className="col-sm-4">
                  <h1 className="mb-3 text-dark ">stock Des Autres Magasin</h1>

                  <input
                    type="text"
                    placeholder="code article"
                    value={codeArticle}
                    className="form-control "
                    onChange={handleCodeArticleChange}
                  />
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
              <div className="card mt-3">
                <table className="table table-bordered">
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
                    {filteredData?.map((stk, index) => (
                      <tr key={index}>
                        <td>{stk.nonMagasin}</td>
                        <td>{stk.codeArticle}</td>
                        <td>{stk.nomProduit}</td>
                        <td>{stk.prixVente}</td>
                        <td>{stk.qteEnStock}</td>
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

export default StockAutreMagasinPourCaissier;
