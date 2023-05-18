import React, { useEffect, useState } from "react";
import PaymentForm from "../../components/caissier/PaymentForm";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dropdown, FormControl, Button } from "react-bootstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
  const familyImages = [
    "/dist/img/coifFemme.jpg",
    "/dist/img/coifHomme.jpg",
    "/dist/img/coifEnfant.jpg",
    "/dist/img/maquillage.jpg",
    "/dist/img/parfumn.jpg",
    "/dist/img/soinvisage.jpg",
  ];
  const sousfamilyImages = [
    "/dist/img/coloration.jpg",
    "/dist/img/FILLETTE.jpg",
    "/dist/img/levre.jpg",
    "/dist/img/parfHomme.jpg",
    "/dist/img/hidratNouriss.png",
    "/dist/img/teinte.jpg",
    "/dist/img/macyeux.jpg",
  ];
  const categoriesImages = [
    "/dist/img/TEINTURESANSAMONIAC.jpg",
    "/dist/img/rougealevre.jpg",
    "/dist/img/apresrasage.jpg",
    "/dist/img/soinjour.jpg",
    "/dist/img/fdtliquide.jpg",
  ];
  const location = useLocation();
  const endpoint = location.pathname;
  const saleID = endpoint.slice(-24);
  const [tax, setTax] = useState(0);
  const [promo, setPromo] = useState(0);
  const [codeProduit, setCodeProduit] = useState();
  const [tableData, setTableData] = useState([]);
  const [brands, setBrands] = useState();
  const [families, setFamilies] = useState([]);
  const [sousFamille, setSousFamille] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFilteredProducts] = useState([]);
  const [packs, setPacks] = useState([]);

  const AddProductsToTable = (product) => {
    setTableData([...tableData, product]);
  };
  const handleRemoveClick = (product) => {
    const filteredProducts = tableData.filter((p) => p._id !== product._id);
    setTableData(filteredProducts);
  };

  const handleAddClick = (e) => {
    if (e.key === "Enter") {
      const product = filtredProducts.find((p) => p.code === codeProduit);
      if (product) {
        setTableData([...tableData, product]);
        setCodeProduit("");
      }
    }
  };

  async function fetchData() {
    const brandsData = await axios.get("/api/products/getBrand");

    setBrands(brandsData.data);

    const familiesData = await axios.get("/api/products/getFamilies");

    setFamilies(familiesData.data);

    const sousFamiliesData = await axios.get("/api/products/getSubFamilies");
    setSousFamille(sousFamiliesData.data);

    const categoriesData = await axios.get("/api/products/getCategories");
    setCategories(categoriesData.data);
    const productsData = await axios.get("/api/products/getProducts");
    setProducts(productsData.data);
    setFilteredProducts(productsData.data);
    const packsData = await axios.get("/api/products/getPacks");
    setPacks(packsData.data);
  }
  const filterCategoriesData = (id) => {
    const filtered = products.filter((product) => product.category_id == id);
    setFilteredProducts(filtered);
  };
  const filterSubFamilyData = (id) => {
    const filtered = products.filter((product) => product.subFamily_id == id);
    setFilteredProducts(filtered);
  };
  const filterFamilyData = (id) => {
    const filtered = products.filter((product) => product.family_id == id);
    setFilteredProducts(filtered);
  };
  const getPackProductsData = async (id) => {
    const data = await axios.get(`/api/products/getPack/${id}/products`);

    setFilteredProducts(data.data.products);
    setTableData([...tableData, data.data]);
  };

  const [sousTotal, setSousTotal] = useState(() => {
    return tableData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData();

    const newTotal = tableData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSousTotal(newTotal);
  }, [tableData]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/sale/getSales");
      const salesdata = response.data;
      const filteredData = salesdata.filter((sale) => {
        return sale._id == saleID;
      });
      const productsArray = filteredData.map((data) => data.products);
      setTableData(...productsArray);
      // setTiketsData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tableData);
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const newTotal =
      sousTotal + (sousTotal * tax) / 100 - (sousTotal * promo) / 100;
    setTotal(newTotal);
  }, [sousTotal, tax, promo]);
  return (
    <div>
      <div>
        {/* Content Header (Page header) */}

        {/* /.content-header */}
        {/* Main content */}
        <section className="content ">
          <div className="container-fluid ">
            {/* Small boxes (Stat box) */}

            <div className="row">
              <div className="col-3 py-4 px-4 categories card">
                <div>
                  <div className="mb-3">
                    <h6
                      onClick={() => setFilteredProducts(products)}
                      style={{ cursor: "pointer" }}
                    >
                      Pack
                    </h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                    >
                      {packs?.map((item, index) => {
                        return (
                          <SwiperSlide
                            onClick={() => getPackProductsData(item._id)}
                          >
                            <div>
                              <img
                                src={item.img}
                                style={{ width: "100%", height: "80px" }}
                              />{" "}
                              <p className="text-center m-0">{item.name}</p>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6
                      onClick={() => setFilteredProducts(products)}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      Categories
                    </h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Pagination, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                    >
                      {categories?.map((item, index) => {
                        return (
                          <SwiperSlide
                            onClick={() => filterCategoriesData(item._id)}
                          >
                            <div>
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  categoriesImages[index]
                                }
                                style={{ width: "100%", height: "60px" }}
                              />{" "}
                              <p className="text-center m-0">{item.name}</p>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6
                      style={{ cursor: "pointer" }}
                      onClick={() => setFilteredProducts(products)}
                    >
                      Sous famille
                    </h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                    >
                      {sousFamille?.map((item, index) => {
                        return (
                          <SwiperSlide
                            onClick={() => filterSubFamilyData(item._id)}
                          >
                            <div>
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  sousfamilyImages[index]
                                }
                                style={{ width: "100%", height: "80px" }}
                              />
                              <p className="text-center m-0">{item.name}</p>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6
                      style={{ cursor: "pointer" }}
                      onClick={() => setFilteredProducts(products)}
                    >
                      famille
                    </h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                    >
                      {families?.map((item, index) => {
                        return (
                          <SwiperSlide
                            onClick={() => filterFamilyData(item._id)}
                          >
                            <div>
                              <img
                                src={
                                  process.env.PUBLIC_URL + familyImages[index]
                                }
                                style={{ width: "100%", height: "80px" }}
                              />
                              <p className="text-center m-0">{item.name}</p>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  {brands && (
                    <div className="mb-3">
                      <h6>Marque</h6>
                      <Swiper
                        className="swiper-container"
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        freeMode={true}
                        pagination={{ clickable: true }}
                      >
                        <SwiperSlide>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/dist/img/brand1/carlins.png"
                              }
                              style={{ width: "60%", height: "80px" }}
                            />{" "}
                            <p className="text-center m-0">
                              {brands?.[0].name}
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/dist/img/brand1/centremhassen.png"
                              }
                              style={{
                                width: "60%",
                                height: "80px",
                                filter:
                                  "invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)",
                              }}
                            />{" "}
                            <p className="text-center m-0">
                              {" "}
                              {brands?.[2].name}
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/dist/img/brand1/mhassenmaquillage.jpg"
                              }
                              style={{
                                width: "100%",
                                height: "50px",
                                filter:
                                  "invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)",
                              }}
                            />{" "}
                            <p className="text-center m-0">
                              {" "}
                              {brands?.[1].name}
                            </p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-9 card">
                <div className="container mt-4">
                  <h5 className="text-center font-weight-bold pb-3">
                    produits
                  </h5>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="tapez code barre"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={(e) => setCodeProduit(e.target.value)}
                      onKeyDown={handleAddClick}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            style={{
                              fill: "currentColor",
                              color: "#D6D8D9 !important",
                              width: "20px",
                            }}
                          >
                            <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                  <Swiper
                    className="swiper-container2 produits"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    freeMode={true}
                    pagination={{ clickable: true }}
                  >
                    {filtredProducts?.map((item, index) => {
                      return (
                        <SwiperSlide onClick={() => AddProductsToTable(item)}>
                          <div style={{ height: "100px !important" }}>
                            <img
                              src={item.img}
                              style={{ width: "100%", height: "100px" }}
                            />
                            <p className="text-center m-0">{item.name}</p>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="payment mt-4 row">
                  <div className="col-8">
                    <table class="table table-bordered">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">code produit</th>
                          <th scope="col">libelle</th>
                          <th scope="col">Quantité</th>
                          <th scope="col">PU</th>
                          <th scope="col">supprimer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row ">{item.code}</th>
                              <td>{item.name}</td>
                              <td className="d-flex justify-content-center">
                                <input
                                  type="number"
                                  style={{ width: "60px" }}
                                  defaultValue={item.quantity}
                                  min="1"
                                  max={item.quantity}
                                  onInput={(event) => {
                                    const newQuantity = parseInt(
                                      event.target.value,
                                      10
                                    );
                                    const newData = [...tableData];
                                    newData[index].quantity = newQuantity;
                                    setTableData(newData);
                                  }}
                                />
                              </td>
                              <td>{item.price} dt</td>
                              <td
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Button
                                  variant="danger"
                                  onClick={() => handleRemoveClick(item)}
                                  style={{ borderRadius: "5px" }}
                                >
                                  x
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-4  p-1">
                    <div className="pay-from p-2">
                      <div>
                        <label className="d-block">sous total</label>
                        <input
                          type="text"
                          className="form-control"
                          value={isNaN(sousTotal) ? "" : sousTotal}
                        />
                      </div>
                      <div className="mt-2">
                        <label className="d-block">promo</label>
                        <input
                          type="text"
                          className="form-control"
                          value={promo}
                          onChange={(e) => setPromo(e.target.value)}
                        />
                      </div>
                      <div className="mt-2">
                        <label className="d-block">tax</label>
                        <input
                          type="text"
                          className="form-control"
                          value={tax}
                          onChange={(e) => setTax(e.target.value)}
                        />
                      </div>
                      <div className="mt-2">
                        <label className="d-block">total</label>
                        <input
                          type="text"
                          className="form-control"
                          value={total}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="p-2" style={{ border: "1px solid black" }}>
                      {/* <div className="mt-3">
                        <label className="d-block">code vendeur</label>
                        <input type="text" className="form-control" />
                      </div> */}
                      <div className=" mt-3 d-flex align-items-center">
                        <PaymentForm
                          total={total}
                          tableData={tableData}
                          sousTotal={sousTotal}
                          tax={tax}
                          promo={promo}
                          saleID={saleID}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="giftpromo container mt-5">
                  <div>
                    <h5 className="text-center font-weight-bold pb-3">
                      promos
                    </h5>
                    <Swiper
                      className="swiper-container2 giftes"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={4}
                      freeMode={true}
                      pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/gift/téléchargement.jpg"
                            }
                            style={{ width: "100%" }}
                          />{" "}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/gift/téléchargement.jpg"
                            }
                            style={{ width: "100%" }}
                          />{" "}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/gift/téléchargement.jpg"
                            }
                            style={{ width: "100%" }}
                          />{" "}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/gift/téléchargement.jpg"
                            }
                            style={{ width: "100%" }}
                          />{" "}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/gift/téléchargement.jpg"
                            }
                            style={{ width: "100%" }}
                          />{" "}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/gift/téléchargement.jpg"
                            }
                            style={{ width: "100%" }}
                          />{" "}
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
};

export default HomePage;
