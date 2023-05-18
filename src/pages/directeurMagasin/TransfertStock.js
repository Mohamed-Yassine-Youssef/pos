import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/directeurMagasin/SideBar";
import Footer from "../../components/Footer";
import { Dropdown, FormControl } from "react-bootstrap";
import axios from "axios";

const TransfertStock = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [productselectedName, setProductSelectedName] = useState("");
  const [destination, setDestination] = useState("");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleProductselect = (name, ref) => {
    setProductSelectedName(name);
  };
  async function fetchProductsData() {
    const productsdata = await axios.get("/api/products/getProducts");
    setProductsData(productsdata.data);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("/api/transfert", {
      nomProduit: productselectedName,
      refProduit: reference,
      date: date,
      destination: destination,
    });
    alert("Votre demande de transfert a bien été enregistrée.");
    window.location.reload();
  };
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
                  <label htmlFor="exampleInputcatProduit">
                    destination du transfert
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputcatProduit"
                    placeholder="destination"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="row d-flex">
                  <div className="col-6 ">
                    <label htmlFor="exampleInputnomProduit">
                      reference du produit
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputnomProduit"
                      placeholder="reférence du produit"
                      onChange={(e) => setReference(e.target.value)}
                    />
                  </div>

                  <div className="col-6 mb-3">
                    <label>nom produit</label>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        className="custom-toggle"
                      >
                        {productselectedName}
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="custom-menu">
                        <FormControl
                          type="text"
                          placeholder="chercher..."
                          onChange={handleSearch}
                          className="custom-input"
                        />
                        <Dropdown.Divider />

                        {productsData &&
                          productsData
                            .filter((option) =>
                              option.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                            )
                            .map((option, index) => (
                              <Dropdown.Item
                                key={index}
                                href="#"
                                className="custom-item"
                                onClick={() =>
                                  handleProductselect(option.name, option.code)
                                }
                              >
                                {option.name}
                              </Dropdown.Item>
                            ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div className="form-group ">
                  <label htmlFor="exampleInputnomProduit">
                    date souhaité pour le transfert
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputnomProduit"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-dark mt-3"
                    onClick={submitHandler}
                  >
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
