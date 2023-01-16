import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const mystyle = {
      position: " absolute",
      top: "10px",
    };
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <span
            class="translate-middle badge rounded-pill bg-danger"
            style={mystyle}
          >
            {this.props.source}
          </span>
          <img src={this.props.imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
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
