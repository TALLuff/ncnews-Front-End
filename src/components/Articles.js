import React from "react";
import ArticlesQuery from "./ArticlesQuery";
import ArticlesList from "./ArticlesList";
import { fetchArticles } from "../api";

class Articles extends React.Component {
  state = {
    articles: null
  };

  componentDidMount() {
    fetchArticles()
      .then(articles => {
        this.setState({ articles });
      })
      .catch(console.log);
  }

  specifyArticles = query => {
    fetchArticles(query)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(console.log);
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
