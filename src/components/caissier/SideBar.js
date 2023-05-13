import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const SideBar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);
  const endpoint = useLocation();
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
                src={user.pic}
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                {user.name}
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
                    endpoint.pathname == "/caissiere" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    <Link to="/caissiere" className="sidelink">
                      Home Page
                    </Link>
                  </p>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/caissiere/gestion_client"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="nav-icon mr-2"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  <p>
                    <Link to="/caissiere/gestion_client" className="sidelink">
                      Gestion Client
                    </Link>
                  </p>
                </p>
              </li>

              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/caissiere/ventes" ? "active" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="nav-icon mr-2"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
                  </svg>
                  <p>
                    <Link to="/caissiere/ventes" className="sidelink">
                      Les ventes
                    </Link>
                  </p>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/caissiere/historique_ventes"
                      ? "active"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="nav-icon mr-2"
                    style={{
                      fill: "currentColor",
                      color: "#D6D8D9 !important",
                    }}
                  >
                    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
                  </svg>
                  <p>
                    <Link
                      to="/caissiere/historique_ventes"
                      className="sidelink"
                    >
                      Historique des ventes
                    </Link>
                  </p>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/caissiere/objectif" ? "active" : ""
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

                  <Link to="/caissiere/objectif" className="sidelink">
                    Objectif
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/caissiere/stockDesAutresMagasins"
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
                    to="/caissiere/stockDesAutresMagasins"
                    className="sidelink"
                  >
                    stock des autres magasins
                  </Link>
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
