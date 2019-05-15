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
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            postNewComment(this.state.commentBody);
          }}
        >
          <textarea
            placeholder="Comment description"
            onChange={event => this.updateInput(event)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    ) : (
      <div>Please log in to comment or vote.</div>
    );
  }
}

export default PostComment;
