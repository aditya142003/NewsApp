import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={this.props.imageurl}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <a
                href={this.props.newsurl}
                target="__blank"
                className="btn btn-primary"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
