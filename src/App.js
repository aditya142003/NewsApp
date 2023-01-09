import "./App.css";

import React, { Component, useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export default class App extends Component {
  state = {
    searchData: "",
  };

  handleCallback = (childData) => {
    this.setState({ searchData: childData });

    console.log(childData);
  };

  render() {
    return (
      <div>
        <NavBar parentCallback={this.handleCallback} />
        <News key={this.state.searchData} searchData={this.state.searchData} />
      </div>
    );
  }
}
