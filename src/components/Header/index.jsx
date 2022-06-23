import React from "react";

import logo from "./icon/logo.svg"

import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="nav-section">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <button>About</button>
            <button>Serveces</button>
            <button>Pricing</button>
            <button>Blog</button>
          </div>
          <div>
            <button className="btn-contact">CONTACT</button>
          </div>
        </div>
        <div className="info-section">
          <div className="info-section__title">
            Portfolio
          </div>
          <div className="info-section__subtitle">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;