import React from "react";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Sewa Mobil di (Lokasimu) Sekarang</h1>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <a href="http://" className="btn btn-success button">
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
