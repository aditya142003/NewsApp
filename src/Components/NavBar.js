import PropTypes from "prop-types";
import React, { Component } from "react";

export class NavBar extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand" href="#">
              News
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
