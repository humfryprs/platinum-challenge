import React from "react";
import Header from "../../components/header";
// import Footer from "../../components/footer";
import Sukses from './success.png';
import Button from './Button.png';
import Rectangle from './Rectangle.png';
// import '../../assets/css/bootstrap.css';
import './style.css';




const Etiket = () => {

    return (
        <>
        < Header />

        <div className="container">

            <div className="detail-pembayaran">
                <img src={Sukses} alt="Pembayaran Sukses" />
                <h3>Pembayaran Berhasil!</h3>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
            </div>

            <div className="kartu">
                <div className="card kartu-1">
                    <div className="kotak-pembayaran">
                        <div className="above">
                            <h4>Invoice</h4>
                            <a href="" >
                                <img src={Button} alt="Unduh" />
                            </a>
                        </div>
                        <p>*no invoice</p>
                        <div className="card">
                            <img className="Rectangle" src={Rectangle} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* < Footer /> */}

        </>
    )

}

export default Etiket