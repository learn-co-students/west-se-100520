import React, { Component } from 'react';

class Cage extends Component {
  constructor() {
    super();
    this.cage = React.createRef();
    this.width = document.body.offsetWidth;
    this.height = document.body.offsetHeight;
  }

  // TODO: MAKE THE CAGE MOVE EVERY SECOND
  componentDidMount() {
    this.timer = setInterval(() => {
      this.move()
    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  // CALL THIS EVERY SECOND TO MOVE THE CAGE
  move = () => {
    this.cage.current.style.left = `${Math.floor(Math.random() * this.width)}px`;
    this.cage.current.style.top = `${Math.floor(Math.random() * this.height)}px`;
  };

  render() {
    return (
      <div className="cage" ref={this.cage}></div>
    )
  }
}

export default Cage;
