import React from "react";
import "../Style/home.css";
import rajaAmpat from "../Assets/rajaAmpat.jpg";
import borobudur from "../Assets/borobuddur1.jpg";
import samosir from "../Assets/samosir2.webp";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Content Start */}
      <div>
        <div class="section intro text-light"></div>
      </div>
      {/* Main Content */}
      <div id="menu" className="section py-3 mb-5">
        <div className="container-fluid mb-5">
          <h3 className="text-center mt-5 mb-5">
            <b>Wisata Tujuan</b>
          </h3>
          <div className="row row-cols-2 row-cols-md-3 g-4 mt-5 offset-md-1">
            <div className="col">
              <div className="card gambarku">
                <figure>
                  <img
                    src={rajaAmpat}
                    className="card-img-top"
                    alt="raja-ampat"
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title">Raja Ampat</h5>
                  <p className="card-text">
                    The Raja Ampat Islands are an Indonesian archipelago off the
                    northwest in West Papua.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/Raja-Ampat" className="btn btn-primary">
                      Pergi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card gambarku">
                <figure>
                  <img
                    src={borobudur}
                    className="card-img-top"
                    alt="borobudur"
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title">Borobuddur</h5>
                  <p className="card-text">
                    Borobudur, also transcribed Barabudur is a 9th-century
                    Mahayana Buddhist temple in Magelang Regency.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/Borobudur" className="btn btn-primary">
                      Pergi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card gambarku">
                <figure>
                  <img src={samosir} className="card-img-top" alt="samosir" />
                </figure>
                <div className="card-body">
                  <h5 className="card-title">Danau Toba</h5>
                  <p className="card-text">
                    Lake Toba is a large natural lake in North Sumatra,
                    Indonesia, occupying the caldera of a supervolcano.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/Toba" className="btn btn-primary">
                      Pergi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      {/* Content End */}
      {/* Footer Start */}
      <footer className="footer text-white">
        <p>
          Created with <i className="bi bi-heart-fill text-danger"></i> by
          <a href="home.html" className="text-white fw-bold">
            Ibra Sahrian Alsa
          </a>
        </p>
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default Home;
