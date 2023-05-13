import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const endpoint = useLocation();
  const pathArray = endpoint.pathname.split("/");
  const path = pathArray ? pathArray[1] : endpoint.pathname;
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to={"/" + path} className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        {/* SEARCH FORM */}
      </nav>
    </div>
  );
};

export default Header;
