import React from "react";
import "./home-view.css";

class HomePage extends React.Component {
  componentDidMount() {
    document.title = "Gavin Flood";
  }

  render() {
    return (
      <div className="gf-home-page">
        <div className="gf-profile-image"></div>
        <p>
          <span className="gf-bold">Hi!</span>
        </p>
        <p>Thanks for visiting. I sometimes write things here.</p>
      </div>
    );
  }
}

export default HomePage;
