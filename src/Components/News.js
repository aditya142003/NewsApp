import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  static propTypes = {};

  async componentDidMount() {
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b4d047d672bd4402bb75046d558e9373&page=1&pageSize=20&category=general`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlenext = async () => {
    this.setState({loading: true});
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
        loading: false,
      });
    }
  };
  handleprev = async () => {
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b4d047d672bd4402bb75046d558e9373&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">TOP HEADLINES</h1>
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
        {this.state.loading && <Loading/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
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
        
      </div>
    );
  }
}

export default News;
