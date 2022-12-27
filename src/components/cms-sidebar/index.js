import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Logo from "./images/tokopedia-logo.svg";
import Icon_X from "./images/fi_x.svg";
import Icon_Menu from "./images/fi_menu.svg";

const CMS_Sidebar = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  return (
		
      <div className="container">
        <div className="row">
          <div className="logo">
            <a href="" onClick={() => navigate("/dashboard")}>
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
                <a href="hide-nav-menu" onClick={() => navigate("/dashboard")}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="hide-nav-menu" onClick={() => navigate("/cars")}>
                  Cars
                </a>
              </li>
            </ul>
          </div>
          <div className="burger-icon" onClick={openSidebar}>
            <img src={Icon_Menu} alt=""></img>
          </div>
        </div>
      </div>
  );
};
export default CMS_Sidebar;
