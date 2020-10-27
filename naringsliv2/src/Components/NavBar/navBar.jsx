import React from "react";
import "./navBar.css";

const navBar = () => {
  return (
    <div>
      <ul>
        <li>
          <a className="active" href="#home">
            Start
          </a>
        </li>
        <li>
          <a href="#news">For companies</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">Karriärrevet</a>
        </li>
      </ul>
    </div>
  );
};

export default navBar;
