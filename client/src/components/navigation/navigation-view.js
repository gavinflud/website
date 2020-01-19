import React from "react";
import { Link } from "react-router-dom";
import "./navigation-view.css";

const Navigation = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/writing">Writing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {props.functions.getCurrentUser() !== null ? (
          <li>
            <span className="gf-logout-link" onClick={props.functions.logout}>
              Logout
            </span>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
