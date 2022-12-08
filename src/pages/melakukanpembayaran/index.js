import React from "react";
import logo1 from "../../assets/images/fi_users.jpg";

import "./style.css";

const Pembayaran = () => {
  return (
    <div className="pembayaran">
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
              <li>BCA Transfer</li>
              <li>BNI Transfer</li>
              <li>Mandiri Transfer</li>
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
    </div>
  );
};

export default Pembayaran;
