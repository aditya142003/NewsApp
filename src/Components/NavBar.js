import PropTypes from "prop-types";
import React, { Component } from "react";
import "./NavBar.css";

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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <select
                  name="plan"
                  id="plan"
                  onChange={(event) =>
                    this.props.parentCallback(event.target.value)
                  }
                  className="dropDown"
                >
                  <option value="" defaultValue>
                    All
                  </option>
                  <option value="business">Business</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="sports">Sports</option>
                  <option value="health">Health</option>
                  <option value="science">Science</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
