import React from "react";
import axios from "axios";
import ArticlesQuery from "./ArticlesQuery";
import ArticlesList from "./ArticlesList";

class Articles extends React.Component {
  state = {
    articles: null
  };

  componentDidMount() {
    axios
      .get("https://nc-news-northcoders.herokuapp.com/api/articles")
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  }

  specifyArticles = query => {
    const url = `https://nc-news-northcoders.herokuapp.com/api/articles`;
    axios.get(url, { params: query }).then(({ data: { articles } }) => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles } = this.state;
    return articles ? (
      <div>
        <ArticlesQuery specifyArticles={this.specifyArticles} />
        <ArticlesList articles={articles} />
      </div>
    ) : (
      <div>Loading Articles...</div>
    );
  }
}

export default Articles;
