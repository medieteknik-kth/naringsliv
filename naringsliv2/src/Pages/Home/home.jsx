import React, { Component } from "react";
import Feed from "react-instagram-authless-feed";
import background from "../../Images/gruppbild_spex.jpg";
import navBar from "../../Components/NavBar/navBar";
import nlg_logo from "../../Assets/nlg_logo.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <img src={background} className="background" alt="background" />
      <div>
        <ul>
          <li>
            <a href="/">
              <img className="logo" src={nlg_logo}></img>
            </a>
          </li>
          <li>
            <a className="active" href="/">
              Start
            </a>
          </li>
          <li>
            <a>For companies</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Karriärrevet</a>
          </li>
        </ul>
      </div>

      <span>{"Välkommen"}</span>
      <button>click here</button>
      <Feed
        userName="nlg_medieteknik"
        className="feed"
        classNameLoading="Loading"
      />
    </div>
  );
};

export default Home;
