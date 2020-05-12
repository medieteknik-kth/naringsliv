import React, { Component } from "react";
import background from "../gruppbild_spex.jpg";
import "./style/home.css";

class Home extends Component {
  state = {};
  render() {
    return <img src={background} className="background" alt="background" />;
  }
}

export default Home;
