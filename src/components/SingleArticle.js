import React from "react";
import ArticleInfo from "./ArticleInfo";
import PostComment from "./PostComment";
import CommentsList from "./CommentsList";
import { navigate } from "@reach/router";
import {
  fetchArticleById,
  fetchArticlesComments,
  createArticleComment,
  removeArticleComment,
  updateVote
} from "../api";

class SingleArticle extends React.Component {
  state = {
    article: null,
    comments: null,
    needsUpdate: false,
    newComment: [],
    deletedCommentId: null
  };

  componentDidUpdate() {
    if (this.state.needsUpdate) {
      this.setState(prevState => {
        let updateState = { ...prevState };
        return {
          article: updateState.article,
          comments: updateState.newComment.concat(
            updateState.comments.filter(
              comment => comment.comment_id !== updateState.deletedCommentId
            )
          ),
          needsUpdate: false,
          newComment: [],
          deletedCommentId: null
        };
      });
    }
  }

  componentDidMount() {
    fetchArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article });
        return fetchArticlesComments(this.props.article_id);
      })
      .then(comments => {
        this.setState({ comments, needsUpdate: false });
      })
      .catch(err => {
        console.log(err);
        navigate("/not-found", { replace: true });
      });
  }

  showDeleteQuery = (commentUser, comment_id) => {
    if (this.props.userUsername === commentUser) {
      return (
        <button
          className="restyle"
          onClick={() => this.deleteComment(comment_id)}
        >
          Delete
        </button>
      );
    }
  };

  postNewComment = body => {
    let comment = {
      username: this.props.userUsername,
      body
    };
    createArticleComment(this.props.article_id, comment).then(comment => {
      this.setState({ needsUpdate: true, newComment: comment });
    });
  };

  deleteComment = comment_id => {
    removeArticleComment(comment_id).then(
      this.setState({ needsUpdate: true, deletedCommentId: comment_id })
    );
  };

  incrementVote = (increment, type, id) => {
    let inc = {
      inc_votes: increment
    };
    updateVote(type, id, inc);
  };

  render() {
    const { article, comments } = this.state;
    const { userUsername } = this.props;
    return article && comments ? (
      <div>
        <ArticleInfo
          article={article}
          incrementVote={this.incrementVote}
          userUsername={userUsername}
        />
        <h4>Comments:</h4>
        <PostComment
          userUsername={userUsername}
          postNewComment={this.postNewComment}
        />
        <CommentsList
          comments={comments}
          showDeleteQuery={this.showDeleteQuery}
          incrementVote={this.incrementVote}
          userUsername={userUsername}
        />
      </div>
    ) : (
      <div>Loading Article...</div>
    );
  }
}

export default SingleArticle;
