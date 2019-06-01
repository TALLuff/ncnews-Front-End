import React from "react";

class CommentButtons extends React.Component {
  state = {
    votes: null,
    recentVote: null
  };

  changeLocalStore = value => {
    window.localStorage.setItem(
      `${this.props.userUsername}-comments-${this.props.comment.comment_id}`,
      value
    );
  };

  componentDidMount() {
    const storedVote = JSON.parse(
      window.localStorage.getItem(
        `${this.props.userUsername}-comments-${this.props.comment.comment_id}`
      )
    );
    if (!storedVote) {
      window.localStorage.setItem(
        `${this.props.userUsername}-comments-${this.props.comment.comment_id}`,
        "null"
      );
    } else {
      this.setState({
        recentVote: JSON.parse(storedVote)
      });
    }
    this.setState({ votes: this.props.comment.votes });
  }

  render() {
    const { comment, incrementVote } = this.props;
    const { recentVote, votes } = this.state;
    return (
      <div className="voteButtons">
        <button
          className={"arrow " + (recentVote === 1 ? "clickedArrow" : "")}
          onClick={() => {
            if (recentVote === null) {
              this.setState({ votes: votes + 1, recentVote: 1 });
              incrementVote(1, "comments", comment.comment_id);
              this.changeLocalStore(1);
            } else if (recentVote === 1) {
              this.setState({ votes: votes - 1, recentVote: null });
              incrementVote(-1, "comments", comment.comment_id);
              this.changeLocalStore(null);
            } else if (recentVote === -1) {
              this.setState({ votes: votes + 2, recentVote: 1 });
              incrementVote(+2, "comments", comment.comment_id);
              this.changeLocalStore(1);
            }
          }}
        >
          /\
        </button>
        <div className="votes">{votes}</div>
        <button
          className={"arrow " + (recentVote === -1 ? "clickedArrow" : "")}
          onClick={() => {
            if (recentVote === null) {
              this.setState({ votes: votes - 1, recentVote: -1 });
              incrementVote(-1, "comments", comment.comment_id);
              this.changeLocalStore(-1);
            } else if (recentVote === -1) {
              this.setState({ votes: votes + 1, recentVote: null });
              incrementVote(+1, "comments", comment.comment_id);
              this.changeLocalStore(null);
            } else if (recentVote === 1) {
              this.setState({ votes: votes - 2, recentVote: -1 });
              incrementVote(-2, "comments", comment.comment_id);
              this.changeLocalStore(-1);
            }
          }}
        >
          \/
        </button>
      </div>
    );
  }
}

export default CommentButtons;
