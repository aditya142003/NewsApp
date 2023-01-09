import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }
  static propTypes = {};

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b4d047d672bd4402bb75046d558e9373&page=1&pageSize=20&category=${this.props.searchData}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b4d047d672bd4402bb75046d558e9373&page=${
      this.state.page + 1
    }&pageSize=20`;
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b4d047d672bd4402bb75046d558e9373&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container">
        <h2>
          {this.props.searchData.toUpperCase()}{" "}
          {this.props.searchData ? "-" : ""} TOP HEADLINES
        </h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
                  }
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container ">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleprev}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlenext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
