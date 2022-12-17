import React from "react";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import Rect from "../../assets/images/rect.svg";
import { Link } from "react-router-dom";
import icon2 from "../../assets/icons/Group 14.svg";
import icon3 from "../../assets/icons/Group 15.svg";
import icon1_blue from "../../assets/icons/Group 13.svg";
import icon2_blue from "../../assets/icons/Group 14-blue.svg";
import icon3_blue from "../../assets/icons/Group 15-blue.svg";
import checklist from "../../assets/icons/Check-blue.svg";
import "./style.css";

const Nav_Step = (dataNavTop) => {
  let no1, no2, no3;
  let getUrl = window.location.pathname.split("/").pop();
  if (getUrl === "pembayaran") {
    no1 = icon1_blue;
    no2 = icon2;
    no3 = icon3;
  } else if (getUrl === "asd") {
    no1 = checklist;
    no2 = icon2_blue;
    no3 = icon3;
  } else if (getUrl === "e-tiket") {
    no1 = checklist;
    no2 = checklist;
    no3 = icon3_blue;
  }

  return (
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
            <div className="bg1">
              <img src={no1} alt="" />
            </div>
            <h5>Pilih Metode</h5>
            <img src={Rect} alt="-" />
            <div className="bg1">
              <img src={no2} alt="" />
            </div>
            <h5>Bayar</h5>
            <img src={Rect} alt="-" />
            <div className="bg1">
              <img src={no3} alt="" />
            </div>
            <h5>Tiket</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span>
              <p>Order ID:</p>
              <p>{dataNavTop.orderId}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav_Step;
