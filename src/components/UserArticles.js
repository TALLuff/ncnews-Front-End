import React from "react";
import ArticlesList from "./ArticlesList";
import { fetchArticles } from "../api";
import { navigate } from "@reach/router";

class UserArticles extends React.Component {
  state = {
    articles: null
  };

  componentDidUpdate() {
    if (this.props.userUsername === null) {
      navigate("/");
    }
  }

  componentDidMount() {
    const query = { author: this.props.userUsername };
    fetchArticles(query).then(articles => {
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return articles ? (
      <div>
        <h3 className="loggedInText redLeft">
          Welcome to your home page {this.props.userUsername}
        </h3>
        <ArticlesList articles={articles} />
      </div>
    ) : (
      <div className="loading">Loading Articles...</div>
    );
  }
}

export default UserArticles;
