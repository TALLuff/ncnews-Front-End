import React from "react";

class PostComment extends React.Component {
  state = {
    commentBody: ""
  };

  updateInput = event => {
    this.setState({ commentBody: event.target.value });
  };

  render() {
    const { userUsername, postNewComment } = this.props;
    return userUsername ? (
      <div className="postForm">
        <span className="postLabel">Post Comment:</span>
        <form
          onSubmit={event => {
            event.preventDefault();
            postNewComment(this.state.commentBody);
            this.setState({ commentBody: "" });
          }}
          id="postBody"
        >
          <textarea
            placeholder="Comment description"
            onChange={event => this.updateInput(event)}
            required
            id="postCommentInput"
            className="restyle"
            value={this.state.commentBody}
          />
          <button type="submit" className="restyle darkButton postButton">
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div className="loginText redLeft">Please log in to comment or vote.</div>
    );
  }
}

export default PostComment;
