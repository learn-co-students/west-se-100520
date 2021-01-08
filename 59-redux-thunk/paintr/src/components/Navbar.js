import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <NavLink to="/about" activeClassName="active item" className="item">
        <h3 className="ui header">About</h3>
      </NavLink>
      <NavLink exact to="/" activeClassName="active item" className="item">
        <h3 className="ui header">Home</h3>
      </NavLink>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
