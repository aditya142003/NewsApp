import PropTypes from "prop-types";
import React, { Component } from "react";


export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageurl} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsurl} target="__blank" className="btn btn-primary">
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
