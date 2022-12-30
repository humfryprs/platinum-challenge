import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./tokopedia-logo.svg";
import "./style.scss";

const CMS_Topbar = () => {
  const navigate = useNavigate();

  return (
    <header className="top-bar">
      <div className="container">
        <div className="row top">
          <div className="logo">
            <a href="" onClick={() => navigate("/")}>
              <img src={Logo} alt=""></img>
            </a>
          </div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
export default CMS_Topbar;
