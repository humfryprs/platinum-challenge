import React from "react";
import "./style.css";
import FB_Icon from "./icons/icon_facebook.svg";
import IG_Icon from "./icons/icon_instagram.svg";
import TW_Icon from "./icons/icon_twitter.svg";
import Mail_Icon from "./icons/icon_mail.svg";
import TWT_Icon from "./icons/icon_twitch.svg";
import Logo from "./icons/tokopedia-logo.svg";

const Footer = () => {
  return (
    <footer className="py-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>

          <div className="col-lg-2 col-md-12">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Our services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Why Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Testimonial
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <p>Connect with us</p>
            <span>
              <a href="">
                <img src={FB_Icon} alt=""></img>
              </a>
            </span>
            <span>
              <a href="">
                <img src={IG_Icon} alt=""></img>
              </a>
            </span>
            <span>
              <a href="">
                <img src={TW_Icon} alt=""></img>
              </a>
            </span>
            <span>
              <a href="">
                <img src={TWT_Icon} alt=""></img>
              </a>
            </span>
            <span>
              <a href="">
                <img src={Mail_Icon} alt=""></img>
              </a>
            </span>
          </div>

          <div className="col-lg-3 col-md-12">
            <p>Copyright Binar 2022</p>
            <img src={Logo} alt=""></img>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
