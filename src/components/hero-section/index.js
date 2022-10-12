import React from "react";
import "./style.css";
import Car from "../../assets/images/img_car.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href="http://" className="btn btn-success button">
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-thumbnail">
        <img src={Car} alt=""></img>
      </div>
    </div>
  );
};
export default HeroSection;
