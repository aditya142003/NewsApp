import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      hidebool: true,
    };
  }
  controlhideture = () => {
    if (this.state.hidebool) {
      this.setState({
        hidebool: false,
      });
    } else {
      this.setState({
        hidebool: true,
      });
    }
  };
  render() {
    const mystyle = {
      position: " absolute",
      top: "10px",
    };
    const newStyle = {
      width: "17rem",
      display: `${this.state.hidebool ? "none" : ""}`,
    };

    return (
      <>
        <div
          className="card"
          style={{ width: "18rem" }}
          onMouseEnter={this.controlhideture}
          onMouseLeave={this.controlhideture}
        >
          <span
            className="translate-middle badge rounded-pill bg-danger"
            style={mystyle}
          >
            {this.props.source}
          </span>
          <img src={this.props.imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text" style={newStyle}>
              {this.props.description.slice(0,250)}
            </p>
            <a href={this.props.newsurl} className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
