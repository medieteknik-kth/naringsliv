import React, { Component } from "react";
import background from "../Images/gruppbild_spex.jpg";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Välkommen",
    };
  }

  render() {
    return (
      <div>
        <img src={background} className="background" alt="background" />
        <span>{this.state.title}</span>
        <button>click here</button>
      </div>
    );
  }
}

export default Home;
