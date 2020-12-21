import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import NewPainting from './components/NewPainting';
import About from './components/About'

const mockProps = {
  color: "teal",
  icon: "paint brush",
  title: "Paintr",
  description: "Making ur dreams come true"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color={mockProps.color}
          title={mockProps.title}
          icon="paint brush"
          description="All ur paintings"
        />
        <About />
        <NewPainting />
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
