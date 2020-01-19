import React from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

const App = props => {
  return (
    <div className="gf-app">
      <BrowserRouter>
        <Header functions={props.functions} />
        <Main functions={props.functions} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
