import React from "react";

class CommentButtons extends React.Component {
  state = {
    votes: null,
    recentVote: null
  };

  componentDidMount() {
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
            } else if (recentVote === 1) {
              this.setState({ votes: votes - 1, recentVote: null });
              incrementVote(-1, "comments", comment.comment_id);
            } else if (recentVote === -1) {
              this.setState({ votes: votes + 2, recentVote: 1 });
              incrementVote(+2, "comments", comment.comment_id);
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
            } else if (recentVote === -1) {
              this.setState({ votes: votes + 1, recentVote: null });
              incrementVote(+1, "comments", comment.comment_id);
            } else if (recentVote === 1) {
              this.setState({ votes: votes - 2, recentVote: -1 });
              incrementVote(-2, "comments", comment.comment_id);
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
