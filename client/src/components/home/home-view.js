import React from "react";
import "./home-view.css";

const HomePage = props => {
  return (
    <div className="gf-home-page">
      <div className="gf-profile-image"></div>
      <p>
        <span className="gf-bold">Hi!</span>
      </p>
      <p>Thanks for visiting my little corner of the internet.</p>
    </div>
  );
};

export default HomePage;
