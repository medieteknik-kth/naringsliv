import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/home";
import TestView from "./Components/TestView/testview"
import NotFound from "./Components/NotFound/notFound";
import "./App.css";

function App() {
    return (
      <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={TestView} />
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
        </Switch>
        </Router>
      </div>
    );
  }

export default App;
