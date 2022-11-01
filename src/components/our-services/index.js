import React from "react";
import './style.css';
import Checklist from './Checklist.svg';
import ImgServe from './img_service.png';
 
const index = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={ImgServe} alt="" className="image"></img>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <p>
              <span>
                <img src={Checklist} alt=""></img>Sewa Mobil Dengan Supir di
                Bali 12 Jam
              </span>
            </p>
            <p>
              <span>
                <img src={Checklist} alt=""></img>Sewa Mobil Lepas Kunci di Bali
                24 Jam
              </span>
            </p>
            <p>
              <span>
                <img src={Checklist} alt=""></img>Sewa Mobil Jangka Panjang
                Bulanan
              </span>
            </p>
            <p>
              <span>
                <img src={Checklist} alt=""></img>Gratis Antar - Jemput Mobil di
                Bandara
              </span>
            </p>
            <p>
              <span>
                <img src={Checklist} alt=""></img>Layanan Airport Transfer /
                Drop In Out
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
