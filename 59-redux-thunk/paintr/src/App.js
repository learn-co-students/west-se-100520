import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { fetchPaintings } from './redux/actions'
import { connect } from 'react-redux'
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import AboutPage from "./components/AboutPage";

const mockProps = {
  color: "teal",
  icon: "paint brush",
  title: "Paintr",
  description: "Making ur dreams come true"
};

class App extends Component {

  componentDidMount(){
    this.props.fetchPaintings()
  }
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
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPaintings
}

export default withRouter(connect(null, mapDispatchToProps)(App));
