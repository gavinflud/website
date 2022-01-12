import React from "react";
import Navigation from "../navigation/";
import "./header-view.css";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <p className="gf-title">
          <a href="/">Gavin Flood</a>
        </p>
        <p className="gf-subtitle">
          Software engineer based in Dublin, Ireland
        </p>
      </div>
      <Navigation currentUser={props.currentUser} functions={props.functions} />
    </header>
  );
};

export default Header;
