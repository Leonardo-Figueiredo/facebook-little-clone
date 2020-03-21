import React from "react";

import "./Post.css";

import Comment from "../Comment/Comment";

function Post({ data }) {
  return (
    <li>
      <div>
        <div id="user">
          <img src={data.author.avatar} />
          <div id="texts">
            <h5>{data.author.name}</h5>
            <br />
            <p>{data.date}</p>
          </div>
        </div>

        <div id="content">
          <p>{data.content}</p>
        </div>

        <div>
          {data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    </li>
  );
}

export default Post;
