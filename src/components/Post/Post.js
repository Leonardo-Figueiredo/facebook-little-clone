import React from "react";

import "./Post.css";

import Comment from "../Comment/Comment";

function Post({ data, comment }) {
  return (
    <li id="post">
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
      <br />
      <hr />
      <ul id="comments">
        {data.comments.map(c => (
          <Comment key={c.id} comment={c.content} author={c.author} />
        ))}
      </ul>
    </li>
  );
}

export default Post;
