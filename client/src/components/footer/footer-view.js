import React from "react";
import "./footer-view.css";

const Footer = props => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="gf-footer-separator">* * * * *</p>
      <div className="gf-social-media-icons">
        <a href="https://github.com/gavinflud">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/gavinflud/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:gavin@gavinflood.com">
          <i className="fas fa-at fa-2x"></i>
        </a>
      </div>
      <p className="gf-copyright">&copy; {currentYear} Gavin Flood</p>
    </footer>
  );
};

export default Footer;
