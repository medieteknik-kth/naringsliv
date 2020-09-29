import React, { Component } from "react";
import Feed from "react-instagram-authless-feed"
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
        <Feed userName="nlg_medieteknik" className="feed" classNameLoading="Loading"/>
      </div>
    );
  }
}

export default Home;
