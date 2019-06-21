import React from "react";
import ArticlesQuery from "./ArticlesQuery";
import PostArticle from "./PostArticle";
import ArticlesList from "./ArticlesList";
import { fetchArticles, createArticle } from "../api.js";
import { navigate } from "@reach/router";

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

  postNewArticle = (title, topic, body) => {
    let articleInfo = {
      title,
      author: this.props.userUsername,
      topic,
      body
    };
    createArticle(articleInfo).then(([article]) => {
      navigate(`/articles/${article.article_id}`);
    });
  };

  render() {
    const { articles } = this.state;
    return articles ? (
      <div>
        <ArticlesQuery specifyArticles={this.specifyArticles} />
        <PostArticle
          userUsername={this.props.userUsername}
          postNewArticle={this.postNewArticle}
        />
        <ArticlesList articles={articles} />
      </div>
    ) : (
      <div>Loading Articles...</div>
    );
  }
}

export default Articles;
