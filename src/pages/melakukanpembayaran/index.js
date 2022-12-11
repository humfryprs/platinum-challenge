import React, { useState } from "react";
import logo1 from "../../assets/images/fi_users.jpg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import Rect from "../../assets/images/rect.svg";
import { Link } from "react-router-dom";
import Check from "../../assets/images/check.svg";

import "./style.css";

const Pembayaran = () => {
  const [selected, setSelected] = useState();
  const selectClick = (index) => {
    setSelected(index);
  };
  return (
    <section className="pembayaran">
      <div className="desc">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 desc1">
              <Link to={-1}>
                <img src={ArrowLeft} alt="back to detail mobil" />
              </Link>
              <h1>Pembayaran</h1>
            </div>
            <div className="col-lg-3 desc1">
              <div className="bg1">1</div>
              <h5>Pilih Metode</h5>
              <img src={Rect} alt="-" />
              <div className="bg1">2</div>
              <h5>Bayar</h5>
              <img src={Rect} alt="-" />
              <div className="bg1">3</div>
              <h5>Tiket</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="detailpesanan">
        <div className="row row1">
          <div className="col-lg-12 col-md-12">
            <h1>Detail Pesananmu</h1>
          </div>
        </div>

        <div className="row row2">
          <div className="col-lg-3 col-md-12">
            <p>Nama/Tipe Mobil</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p>Kategori</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p>Tanggal Mulai Sewa</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p>Tanggal Akhir Sewa</p>
          </div>
        </div>
        <div className="row row3">
          <div className="col-lg-3 col-md-12">
            <p>Nama/Tipe Mobil</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p>Kategori</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p>Tanggal Mulai Sewa</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p>Tanggal Akhir Sewa</p>
          </div>
        </div>
      </div>
      <div className="detailpesanan2">
        <div className="row row3">
          <div className="col-lg-7 col-md-12 coll1">
            <h2>Pilih Bank Transfer</h2>
            <p>Kamu Bisa Membayar Dengan Transfer Melalui ATM, Internet Banking, atau Mobile Banking</p>
            <ul>
              <li
                className={selected === 1 ? "active" : null}
                onClick={() => {
                  selectClick(1);
                  localStorage.setItem("bank", "BCA");
                }}
              >
                <h5>BCA</h5>
                <p>BCA Transfer</p>
                {selected === 1 ? <img src={Check} alt="check-list" /> : null}
              </li>
              <hr />
              <li
                className={selected === 1 ? "active" : null}
                onClick={() => {
                  selectClick(2);
                  localStorage.setItem("bank", "BNI");
                }}
              >
                <h5>BNI</h5>
                <p>BNI Transfer</p>
                {selected === 2 ? <img src={Check} alt="check-list" /> : null}
              </li>
              <hr />
              <li
                className={selected === 3 ? "active" : null}
                onClick={() => {
                  selectClick(3);
                  localStorage.setItem("bank", "Mandiri");
                }}
              >
                <h5>Mandiri</h5>
                <p>Mandiri Transfer</p>
                {selected === 3 ? <img src={Check} alt="check-list" /> : null}
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-12 coll2">
            <h1>Innova</h1>
            <h2>
              <img src={logo1} alt="" />
              6-8 orang
            </h2>
            <div className="row totalpembayaran">
              <div className="col-lg-6">
                <h1>Total</h1>
              </div>
              <div className="col-lg-6">
                <h2>Rp 3.500.000</h2>
              </div>
            </div>
            <h3>Harga</h3>
            <div className="row hargapembayaran">
              <div className="col-lg-9">
                <ul>
                  <li>Sewa Mobil Rp.500.000 x 7 Hari</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h2>Rp 3.500.000</h2>
              </div>
            </div>
            <h3>Biaya Lainnya</h3>
            <div className="row hargapembayaran">
              <div className="col-lg-9">
                <ul>
                  <li>Pajak</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Termasuk</h3>
              </div>
            </div>
            <div className="row hargapembayaran">
              <div className="col-lg-9">
                <ul>
                  <li>Biaya Makan Supir</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h3>Termasuk</h3>
              </div>
            </div>
            <h3>Belum Termasuk</h3>
            <ul>
              <li> Bensin</li>
              <li>Tol dan Parkir</li>
            </ul>
            <hr />
            <div className="row totalpembayaran">
              <div className="col-lg-6">
                <h1>Total</h1>
              </div>
              <div className="col-lg-6">
                <h2>Rp 3.500.000</h2>
              </div>
            </div>
            <button className="btn btn-success button ">Lanjutkan Pembayaran</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pembayaran;
