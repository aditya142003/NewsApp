import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    let pageSize = 6;

    return (
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News setProgress={this.setProgress} 
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                onreload={this.onreload}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News setProgress={this.setProgress} 
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                onreload={this.onreload}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News setProgress={this.setProgress} 
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News setProgress={this.setProgress} 
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News setProgress={this.setProgress} 
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News setProgress={this.setProgress} 
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News setProgress={this.setProgress} 
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}
