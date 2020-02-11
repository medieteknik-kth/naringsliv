import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Route } from "react-router-dom";
import Home from ".Home/Home";


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "Välkommen"
      };

    }

    render() {

        return (
          <div id="app" className="App">
            
    
            <header className="App-header">
            <Link to="/" id="head">{this.state.title}</Link></header>
    
    
              {/* We rended diffrent component based on the path*/}
              <Route exact path="/" component={Home} />

              </div>
        )
    }
}