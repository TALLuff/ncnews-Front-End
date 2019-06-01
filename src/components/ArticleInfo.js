import React from "react";
import ArticleButtons from "./ArticleButtons";

function ArticleInfo({
  article,
  incrementVote,
  userUsername,
  showDeleteQuery
}) {
  return (
    <div className="listItem">
      <div>
        <h2>
          <span className="red">></span>
          {article.title.slice(0)}
        </h2>
        Author: {article.author}, Created: {article.created_at.slice(0, 10)},
        Comments: {article.comment_count}, Votes: {article.votes}
        <p>{article.body}</p>
        {showDeleteQuery(article.author, article.article_id, "article")}
      </div>
      {userUsername ? (
        <ArticleButtons
          article={article}
          incrementVote={incrementVote}
          userUsername={userUsername}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default ArticleInfo;
