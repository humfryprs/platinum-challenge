import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "./images/tokopedia-logo.svg";
// import Icon_X from "./images/fi_x.svg";
import Icon_Menu from "./images/fi_menu.svg";

import Home from "./images/Home.png";
import Admin from "./images/Administrator.png";
import "./style.scss";

const CMS_Sidebar = () => {
  // const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  };

  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <div className="left-sidebar">
      <div className="left-burger-icon " onClick={closeSidebar}>
        <img src={Icon_Menu} alt="" />
      </div>
      <ul>
        <li>
          <a href="" onClick={openSidebar}>
            <img src={Home} alt="" />
          </a>
        </li>
        <li>
          <a href="" onClick={openSidebar}>
            <img src={Admin} alt="" />
          </a>
        </li>
      </ul>
      <div className={`${active ? "expand-bar-active" : ""}`}>
        <div className="expand-bar">
          <h3>Dashboard</h3>
          <p>Dashboard</p>
        </div>
      </div>
    </div>
  );
};
export default CMS_Sidebar;
