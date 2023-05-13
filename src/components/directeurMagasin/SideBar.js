import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
const SideBar = () => {
  const endpoint = useLocation();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const handleLogOut = () => {
    dispatch({ type: "logout" });
    navigate("/");
  };
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <p className="brand-link">
          <img
            src={process.env.PUBLIC_URL + "/dist/img/iware.png"}
            alt="iware Logo"
            className="brand-image img-circle elevation-4"
            style={{ filter: "brightness(1.75)" }}
          />
          <span className="brand-text font-weight-light">IWARE POS</span>
        </p>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/dist/img/user2-160x160.jpg"}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview ">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    <Link to="/directeurMagasin" className="sidelink">
                      Home Page
                    </Link>
                  </p>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/objectifMagasin"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                  </svg>

                  <Link
                    to="/directeurMagasin/objectifMagasin"
                    className="sidelink"
                  >
                    Objectif magasin
                  </Link>
                </p>
              </li>

              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/VentesCaissieres"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2l0 .1v0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
                  </svg>

                  <Link
                    to="/directeurMagasin/VentesCaissieres"
                    className="sidelink"
                  >
                    ventes des caissiers
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/etatDuStock"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z" />
                  </svg>

                  <Link to="/directeurMagasin/etatDuStock" className="sidelink">
                    etat du stock
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/objectifDesVendeurs"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                  </svg>

                  <Link
                    to="/directeurMagasin/objectifDesVendeurs"
                    className="sidelink"
                  >
                    Objectif des vendeurs
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname ==
                    "/directeurMagasin/stockDesAutresMagasins"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64H48c8.8 0 16 7.2 16 16V368c0 44.2 35.8 80 80 80h18.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H450.7c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H144c-8.8 0-16-7.2-16-16V80C128 35.8 92.2 0 48 0H32zM192 80V272c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H464V176c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1V32H240c-26.5 0-48 21.5-48 48z" />
                  </svg>

                  <Link
                    to="/directeurMagasin/stockDesAutresMagasins"
                    className="sidelink"
                  >
                    stock des autres magasins
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/RapportVentes"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
                  </svg>
                  <p>
                    <Link
                      to="/directeurMagasin/RapportVentes"
                      className="sidelink"
                    >
                      rapport des ventes
                    </Link>
                  </p>
                </p>
              </li>

              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/transfertStock"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
                  </svg>
                  <p>
                    <Link
                      to="/directeurMagasin/transfertStock"
                      className="sidelink"
                    >
                      transfert du stock
                    </Link>
                  </p>
                </p>
              </li>

              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/directeurMagasin/CalendrierEmployees"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="nav-icon mr-3"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
                  </svg>
                  <p>
                    <Link
                      to="/directeurMagasin/CalendrierEmployees"
                      className="sidelink"
                    >
                      calendrier des employers
                    </Link>
                  </p>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p className={`nav-link`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-2"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                  </svg>

                  <button
                    onClick={handleLogOut}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#c2c7d0",
                    }}
                  >
                    Lougout
                  </button>
                </p>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideBar;
