import React, { useState } from "react";
import "./style.css";
import Logo from "./images/tokopedia-logo.svg"
import Icon_X from "./images/fi_x.svg"
import Icon_Menu from "./images/fi_menu.svg"
const Header = () => {
  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={Logo} alt=""></img>
          </div>
          <div className={`sidebar ${active ? "menu-active" : ""}`}>
            <div className="top-sidebar">
              <h5>BCR</h5>
              <div className="close-icon" onClick={closeSidebar}>
                <img src={Icon_X} alt=""></img>
              </div>
            </div>
            <ul className="menu">
              <li>
                <a href="#our-services">Our Service</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="http://" className="btn btn-success button">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="burger-icon" onClick={openSidebar}>
            <img src={Icon_Menu} alt=""></img>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
