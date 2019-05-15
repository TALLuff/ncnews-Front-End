import React from "react";
import axios from "axios";
import ArticleInfo from "./ArticleInfo";
import PostComment from "./PostComment";
import CommentsList from "./CommentsList";

class SingleArticle extends React.Component {
  state = {
    article: null,
    comments: null,
    needsUpdate: false
  };

  componentDidUpdate() {
    if (this.state.needsUpdate) {
      axios
        .get(
          `https://nc-news-northcoders.herokuapp.com/api/articles/${
            this.props.article_id
          }`
        )
        .then(({ data: { article } }) => {
          this.setState({ article });
          axios
            .get(
              `https://nc-news-northcoders.herokuapp.com/api/articles/${
                this.props.article_id
              }/comments`
            )
            .then(({ data: { comments } }) => {
              this.setState({ comments, needsUpdate: false });
            });
        });
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://nc-news-northcoders.herokuapp.com/api/articles/${
          this.props.article_id
        }`
      )
      .then(({ data: { article } }) => {
        this.setState({ article });
        axios
          .get(
            `https://nc-news-northcoders.herokuapp.com/api/articles/${
              this.props.article_id
            }/comments`
          )
          .then(({ data: { comments } }) => {
            this.setState({ comments });
          });
      });
  }

  showDeleteQuery = (commentUser, comment_id) => {
    if (this.props.userUsername === commentUser) {
      return (
        <button onClick={() => this.deleteComment(comment_id)}>Delete</button>
      );
    }
  };

  postNewComment = body => {
    let comment = {
      username: this.props.userUsername,
      body
    };
    axios
      .post(
        `https://nc-news-northcoders.herokuapp.com/api/articles/${
          this.props.article_id
        }/comments`,
        comment
      )
      .then(this.setState({ needsUpdate: true }));
  };

  deleteComment = comment_id => {
    axios
      .delete(
        `https://nc-news-northcoders.herokuapp.com/api/comments/${comment_id}`
      )
      .then(this.setState({ needsUpdate: true }));
  };

  render() {
    const { article, comments } = this.state;
    return article && comments ? (
      <div>
        <ArticleInfo article={article} />
        <PostComment
          userUsername={this.props.userUsername}
          postNewComment={this.postNewComment}
        />
        <CommentsList
          comments={comments}
          showDeleteQuery={this.showDeleteQuery}
        />
      </div>
    ) : (
      <div>Loading Article...</div>
    );
  }
}

export default SingleArticle;
