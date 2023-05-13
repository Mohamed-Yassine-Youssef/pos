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
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/vendeur/objectif" ? "active" : ""
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

                  <Link to="/vendeur/objectif" className="sidelink">
                    Objectif
                  </Link>
                </p>
              </li>
              <li className="nav-item pt-3">
                <p
                  className={`nav-link ${
                    endpoint.pathname == "/vendeur/calendrier" ? "active" : ""
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
                    <Link to="/vendeur/calendrier" className="sidelink">
                      calendrier
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
