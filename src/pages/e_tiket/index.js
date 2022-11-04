import React from "react";
import successIcon from "./success.svg";
import download from "./fi_download.svg"
import './style.scss'

const E_Tiket = () => {
  return (
    <div className="e_tiket">
      <div className="container">
        <div className="row">
          <div className="col-12 status">
            <img src={successIcon} alt="" />
            <h2>Pembayaran Berhasil!</h2>
            <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          </div>
        </div>
				<div className="row">
					<div className="col-12">
						<div className="card">
							<div className="row">
								<div className="col-8">
									<h2>Invoice</h2>
								</div>
								<div className="col-4">
									<button className="button"> 
										<img src={download} alt="" />
										unduh</button>
								</div>
							</div>
							<p>no. inovice</p>
						</div>
					</div>
				</div>
      </div>
    </div>
  );
};

export default E_Tiket;
