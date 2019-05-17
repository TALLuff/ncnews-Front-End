import React from "react";
import { Link } from "@reach/router";

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={article.article_id} className="listItem">
            <div>
              <Link to={`/articles/${article.article_id}`}>
                <h3 className="listItemTitle">
                  <span className="red">></span>
                  {article.title.slice(0)}
                </h3>
              </Link>
              Topic: {article.topic[0].toUpperCase() + article.topic.slice(1)},
              Author: {article.author}, Created:{" "}
              {article.created_at.slice(0, 10)}, Comments:{" "}
              {article.comment_count}, Votes: {article.votes}
            </div>
            <div className="voteButtons">
              <h2 className="votes">{article.votes}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticlesList;
