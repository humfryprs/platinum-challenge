// import React, {useState} from "react";
import React from 'react';
import './style.css';
import hrs from './icons/icon_24hrs.svg'
import complete from './icons/icon_complete.svg'
import price from './icons/icon_price.svg'
import professional from './icons/icon_professional.svg'

const Why = () => {
  // const [nama, setNama] = useState('nama kosong')

  return (
    <section className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-12 title">
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <img
                src={complete}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h3 className="card-title">Mobil Lengkap</h3>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <img
                src={price}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h3 className="card-title">Mobil Lengkap</h3>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <img
                src={hrs}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h3 className="card-title">Mobil Lengkap</h3>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="card">
              <img
                src={professional}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h3 className="card-title">Mobil Lengkap</h3>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Why;