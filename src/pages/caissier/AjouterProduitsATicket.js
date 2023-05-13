import React, { useState } from "react";
import PaymentForm from "../../components/caissier/PaymentForm";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import SideBar from "../../components/caissier/SideBar";
const AjouterProduitsATicket = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const initialData = [
    {
      col1: "",
      col2: "",
      col3: 0,
      col4: 0,
    },
  ];
  const [barcode, setBarcode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [libelle, setLibelle] = useState("");
  const [pu, setPu] = useState(0);
  const [data, setData] = useState(initialData);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newRow = {
        col1: "",
        col2: "",
        col3: 0,
        col4: 0,
      };
      setData([...data, newRow]);
    } else if (
      data.length > 1 &&
      e.key === "Backspace" &&
      e.target.value === ""
    ) {
      const newData = [...data];
      newData.pop();
      setData(newData);
    }
  };

  return (
    <>
      <div>
        {/* Content Header (Page header) */}

        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-3 py-4 px-4 categories card">
                <div>
                  <div className="mb-3">
                    <h6>Pack</h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/pack/1-Cosmetic-Packaging-world-brand-design.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">Pack 1</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/pack/bffe3d163986553.Y3JvcCwxNTM0LDEyMDAsMzQsMA.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">Pack 2</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/pack/images.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">Pack 3</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/pack/téléchargement.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">Pack 4</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6>Categories</h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Pagination, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat1/images.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">Categorie 1</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat1/image2.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">categorie 2</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat2/foundation-box-5-4.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">categorie 3</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat2/foundation-box-5-4.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">categorie 4</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6>Sous famille</h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat2/foundation-box-5-4.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">sous famille1</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat2/foundation-box-5-4.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">sous famille1</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat2/foundation-box-5-4.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">sous famille1</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat2/foundation-box-5-4.webp"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">sous famille1</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6>famille</h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat1/images.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">famille 1</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat1/images.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">famille 2</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat1/images.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">famille 3</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/cat1/images.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">famille 4</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="mb-3">
                    <h6>Marque</h6>
                    <Swiper
                      className="swiper-container"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={20}
                      slidesPerView={2}
                      freeMode={true}
                      pagination={{ clickable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/brand1/c93688263a64e90fd09439888722cd54.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">MARS</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/brand1/christian-dior-new3874.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">DIOR</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/brand1/téléchargement.png"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">RIMMEL</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/dist/img/brand1/c93688263a64e90fd09439888722cd54.jpg"
                            }
                            style={{ width: "100%", height: "80px" }}
                          />{" "}
                          <p className="text-center m-0">MARS</p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="col-9 card">
                <div className=" py-3">
                  <h2>compléter la vente</h2>
                </div>
                <div className="container mt-4">
                  <h5 className="text-center font-weight-bold pb-3">
                    produits
                  </h5>
                  <Swiper
                    className="swiper-container2 produits"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      {" "}
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/dist/img/cat1/image2.jpg"
                          }
                          style={{ width: "100%", height: "100px" }}
                        />
                        <p className="text-center m-0">produit 1</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/dist/img/cat1/image2.jpg"
                          }
                          style={{ width: "100%", height: "100px" }}
                        />{" "}
                        <p className="text-center m-0">produit 2</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/dist/img/cat1/image2.jpg"
                          }
                          style={{ width: "100%", height: "100px" }}
                        />{" "}
                        <p className="text-center m-0">produit 3</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/dist/img/cat1/image2.jpg"
                          }
                          style={{ width: "100%", height: "100px" }}
                        />{" "}
                        <p className="text-center m-0">produit 4</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/dist/img/cat1/image2.jpg"
                          }
                          style={{ width: "100%", height: "100px" }}
                        />
                        <p className="text-center m-0">produit 3</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <img
                          src={
                            process.env.PUBLIC_URL + "/dist/img/cat1/image2.jpg"
                          }
                          style={{ width: "100%", height: "100px" }}
                        />
                        <p className="text-center m-0">produit 3</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="payment mt-4 row">
                  <div className="col-8">
                    <table class="table table-bordered">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">code a barre</th>
                          <th scope="col">libelle</th>
                          <th scope="col">Quantité</th>
                          <th scope="col">PU</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row ">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <input
                                    placeholder="tapez bar code"
                                    maxLength="6"
                                    className=""
                                    onKeyDown={handleKeyPress}
                                  />
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
                                </div>
                              </th>
                              <td>{item.col2}</td>
                              <td>
                                <input
                                  type="number"
                                  style={{ width: "60px" }}
                                  value={item.col3}
                                />
                              </td>
                              <td>{item.col4}</td>
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
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mt-2">
                        <label className="d-block">tax</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="mt-2">
                        <label className="d-block">total</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="p-2" style={{ border: "1px solid black" }}>
                      <div className="mt-3">
                        <label className="d-block">code vendeur</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className=" mt-3 d-flex align-items-center">
                        <button className="mr-2 btn btn-secondary">
                          enregistrer
                        </button>
                        <PaymentForm />
                        {/* <button className="mr-2 btn btn-dark">payer</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="giftpromo container my-5">
                  <div>
                    <h5 className="text-center font-weight-bold pb-3">
                      Gifts et promos
                    </h5>
                    <Swiper
                      className="swiper-container2 giftes"
                      // install Swiper modules
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={4}
                      freeMode={true}
                      pagination={{ clickable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
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
    </>
  );
};

export default AjouterProduitsATicket;
