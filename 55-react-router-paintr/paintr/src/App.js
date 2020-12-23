import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import NewPainting from './components/NewPainting';
import About from './components/About'
import { Route, Switch } from 'react-router-dom'

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
       <Switch>
          <Route path="/paintings/new" component={NewPainting} />
          <Route exact path="/" component={About} />
          <Route path='/paintings' component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
