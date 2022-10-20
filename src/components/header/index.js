import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Logo from "./images/tokopedia-logo.svg";
import Icon_X from "./images/fi_x.svg";
import Icon_Menu from "./images/fi_menu.svg";

const Header = () => {
  const navigate = useNavigate();
  

  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  // const navMenu = useRef(null);
  // const location = useLocation();

  // if (location.pathname != ('/')){
  //   navMenu.target.classList.add("hide-nav-menu");
  // }else{
  //   navMenu.target.classList.remove("hide-nav-menu");
  // }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <a href="" 
            onClick={() => navigate("/")}
            >
              <img src={Logo} alt=""></img>
            </a>
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
                <a
                  className={location.pathname != "/" ? "hide-nav-menu" : ""}
                  href="#our-services"
                >
                  Our Service
                </a>
              </li>
              <li>
                <a
                  className={location.pathname != "/" ? "hide-nav-menu" : ""}
                  href="#why"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  className={location.pathname != "/" ? "hide-nav-menu" : ""}
                  href="#testimonial"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  className={location.pathname != "/" ? "hide-nav-menu" : ""}
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button href="http://" className="btn btn-success button">
                  Register
                </button>
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
