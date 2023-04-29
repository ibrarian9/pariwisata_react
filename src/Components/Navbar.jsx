import React from "react";
import Tourism from "../Assets/tourism.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={Tourism}
              alt="flight"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <b>Pariwisata</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  <b>About</b>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/home#menu" className="nav-link">
                  <b>Wisata</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
