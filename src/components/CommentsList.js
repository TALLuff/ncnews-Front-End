import React from "react";

function CommentsList({ comments, showDeleteQuery }) {
  return (
    <div>
      <h4>Comments:</h4>
      {comments.map(comment => {
        return (
          <div key={comment.comment_id} className="listItem">
            <div>
              <h5 className="listItemTitle">
                {comment.author}: {comment.created_at.slice(0, 10)}, Votes:{" "}
                {comment.votes}
              </h5>
              <p>{comment.body}</p>
              {showDeleteQuery(comment.author, comment.comment_id)}
            </div>
            <div className="voteButtons">
              <button className="arrow">/\</button>
              <div className="votes">{comment.votes}</div>
              <button className="arrow">\/</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsList;
