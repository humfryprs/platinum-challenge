import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
import Car from "../../assets/images/img_car.png";

const HeroSection = () => {
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/cari-mobil`;
  //   navigate(path);
  // };
  const location = useLocation();
  const navigate = useNavigate();

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
              <button
                className={location.pathname != "/" ? "hide" : "btn btn-success button "}
                onClick={() => navigate('/cari-mobil')}
              >
                Mulai Sewa Mobil
              </button>
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
