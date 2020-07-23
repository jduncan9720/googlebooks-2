import React, { Component } from "react";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Nav from "./components/Nav"
import Title from "./components/Titlebox"

class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="container">
      <Nav />
      <Title />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
       </div> 
       </Router>
      
    
    );
  }
}

export default App;
