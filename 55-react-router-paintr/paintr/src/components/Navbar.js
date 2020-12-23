import React from "react";
import { Link } from 'react-router-dom'

const Navbar = props => (
  <div className={`ui inverted ${props.color} menu`}>
    <Link to="/" className="item">
      <h2 className="ui header">
        <i className={`${props.icon} icon`} />
        <div className="content">{props.title}</div>
        <div className="sub header">{props.description}</div>
      </h2>
    </Link>
    <div className="right menu">
      <Link to="/paintings" className="item">index</Link>
      <Link to="/paintings/new" className="item">new</Link>
    </div>
  </div>
);

export default Navbar;
