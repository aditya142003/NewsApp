import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import LoadingArticles from "./LoadingArticles";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: "6",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  static propTypes = {};

  async updateNews() {
    this.setState({ loading: true });
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${process.env.REACT_APP_API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
  };

  render() {
    const mystyle = {
      margin: "auto",
      width: "50%",
    };
    return (
      <>
        <h1 className="text-center">
          TOP HEADLINES - {this.props.category.toUpperCase()}
        </h1>
        {this.state.loading && <Loading />}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.state.loading && <LoadingArticles />}
            </div>
            <div className="col-md-4">
              {this.state.loading && <LoadingArticles />}
            </div>
            <div className="col-md-4">
              {this.state.loading && <LoadingArticles />}
            </div>
          </div>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Loading />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 " key={element.url}>
                    <div style={mystyle}>
                      <NewsItem
                        loading={this.state.loading}
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageurl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
                        }
                        newsurl={element.url}
                        source={element.source.name}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
