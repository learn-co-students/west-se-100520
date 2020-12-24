import React from 'react';

import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'purple'
    };

  }


  render() {
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <a className="item" href="#!">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </a>
        <div className="right menu">
          <ul className="item">
            <li className="ui button">
              <Link to="/">Home</Link>
            </li>
            <li className="ui button">
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className="ui button">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="ui button">
              <Link to="/login">Login</Link>
            </li>
            <li className="ui button">
              <a onClick={() => this.props.handleLogout()} href="#!">Logout</a>
            </li>
            <li className="ui button">
              <Link to="/paintings">Paintings</Link>
            </li>
            <li className="ui button">
              <Link to="artist">Artist</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
