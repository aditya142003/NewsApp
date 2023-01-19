import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid ">
            <div className="navbar-brand" to="#">
              News
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li><Link className="nav-link active" to="/business">Business</Link></li>
                <li><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                <li><Link className="nav-link active" to="/" >General</Link></li>
                <li><Link className="nav-link active" to="/health">Health</Link></li>
                <li><Link className="nav-link active" to="/science">Science</Link></li>
                <li><Link className="nav-link active" to="/sports">Sports</Link></li>
                <li><Link className="nav-link active" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
