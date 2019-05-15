import React from "react";
import { Link } from "@reach/router";

function ArticlesList({ articles }) {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={article.article_id} className="listItem">
            <div>
              <Link to={`/${article.article_id}`}>
                <h4 className="listItemTitle">
                  <span className="red">{article.title[0]}</span>
                  {article.title.slice(1)}
                </h4>
              </Link>
              Author: {article.author}, Created:{" "}
              {article.created_at.slice(0, 10)}, Comments:{" "}
              {article.comment_count}, Votes: {article.votes}
            </div>
            <div className="voteButtons">
              <button className="arrow">/\</button>
              <div className="votes">{article.votes}</div>
              <button className="arrow">\/</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticlesList;
