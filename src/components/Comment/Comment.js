import React from "react";

import "./Comment.css";

function Comment({ comment, author }) {
  return (
    //prettier-ignore
    <li id="comment">
      <img src={author.avatar}></img>
      <div id="comment-content">
        <p>
          <strong>{author.name}</strong> &nbsp; {comment}
        </p>
      </div>
    </li>
  );
}

export default Comment;
