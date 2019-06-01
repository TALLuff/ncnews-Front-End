import React from "react";

class ArticleButtons extends React.Component {
  state = {
    votes: null,
    recentVote: null
  };

  changeLocalStore = value => {
    window.localStorage.setItem(
      `${this.props.userUsername}-articles-${this.props.article.article_id}`,
      value
    );
  };

  componentDidMount() {
    const storedVote = JSON.parse(
      window.localStorage.getItem(
        `${this.props.userUsername}-articles-${this.props.article.article_id}`
      )
    );
    if (!storedVote) {
      window.localStorage.setItem(
        `${this.props.userUsername}-articles-${this.props.article.article_id}`,
        "null"
      );
    } else {
      this.setState({
        recentVote: JSON.parse(storedVote)
      });
    }
    this.setState({
      votes: this.props.article.votes
    });
  }

  render() {
    const { article, incrementVote } = this.props;
    const { recentVote, votes } = this.state;
    return (
      <div className="voteButtons">
        <button
          className={"arrow " + (recentVote === 1 ? "clickedArrow" : "")}
          onClick={() => {
            if (recentVote === null) {
              this.setState({ votes: votes + 1, recentVote: 1 });
              incrementVote(1, "articles", article.article_id);
              this.changeLocalStore(1);
            } else if (recentVote === 1) {
              this.setState({ votes: votes - 1, recentVote: null });
              incrementVote(-1, "articles", article.article_id);
              this.changeLocalStore(null);
            } else if (recentVote === -1) {
              this.setState({ votes: votes + 2, recentVote: 1 });
              incrementVote(+2, "articles", article.article_id);
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
              incrementVote(-1, "articles", article.article_id);
              this.changeLocalStore(-1);
            } else if (recentVote === -1) {
              this.setState({ votes: votes + 1, recentVote: null });
              incrementVote(+1, "articles", article.article_id);
              this.changeLocalStore(null);
            } else if (recentVote === 1) {
              this.setState({ votes: votes - 2, recentVote: -1 });
              incrementVote(-2, "articles", article.article_id);
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

export default ArticleButtons;
