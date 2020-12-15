import React, { Component } from "react";
import "../App.css";
import Header from './Header'
import HogsContainer from "./HogsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HogsContainer />
      </div>
    );
  }
}

export default App;
