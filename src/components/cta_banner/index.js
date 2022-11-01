import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const HeroSection = () => {
  const navigate = useNavigate();
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
                <button className="btn btn-success button" onClick={() => navigate('/cari-mobil')}>Mulai Sewa Mobil</button>                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
