import React from "react";
import CommentButtons from "./CommentButtons";

function CommentsList({
  comments,
  showDeleteQuery,
  incrementVote,
  userUsername
}) {
  return (
    <div>
      {comments.map(comment => {
        return (
          <div key={comment.comment_id} className="listItem">
            <div>
              <h5 className="commentTitle">
                {comment.author}: {comment.created_at.slice(0, 10)}, Votes:{" "}
                {comment.votes}
              </h5>
              <p>{comment.body}</p>
              {showDeleteQuery(comment.author, comment.comment_id)}
            </div>
            {userUsername ? (
              <CommentButtons comment={comment} incrementVote={incrementVote} />
            ) : (
              <div />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CommentsList;
