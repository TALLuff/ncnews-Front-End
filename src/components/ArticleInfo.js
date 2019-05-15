import React from "react";

function ArticleInfo({ article }) {
  return (
    <div className="listItem">
      <div>
        <h2>{article.title}</h2>
        Author: {article.author}, Created: {article.created_at.slice(0, 10)},
        Comments: {article.comment_count}, Votes: {article.votes}
        <p>{article.body}</p>
      </div>
      <div className="voteButtons">
        <button className="arrow">/\</button>
        <div className="votes">{article.votes}</div>
        <button className="arrow">\/</button>
      </div>
    </div>
  );
}

export default ArticleInfo;
