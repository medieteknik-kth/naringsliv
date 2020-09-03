import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import NotFound from "./Components/NotFound/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
        <Route match="*" component={NotFound} />
        {/*/notfound */}
      </div>
    );
  }
}

export default App;
