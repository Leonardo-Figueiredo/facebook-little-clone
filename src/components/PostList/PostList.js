import React, { Component } from "react";

import profile from "../../assets/profile.jpg";
import "./PostList.css";

import Post from "../Post/Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Leonardo Figueiredo",
          avatar: profile
        },
        date: "04 Jun 2020",
        content: "Opa galera, primeira aplicação com ReactJS!",
        comments: [
          {
            id: 1,
            author: {
              name: "Yasuozin",
              avatar: profile
            },
            content: "Show de bola, parabéns!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Leonardo Figueiredo",
          avatar: profile
        },
        date: "06 Jun 2020",
        content: "Aquele postezin de ReactJS",
        comments: [
          {
            id: 1,
            author: {
              name: "Yasuozin",
              avatar: profile
            },
            content: "Zika do baile paizao"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul id="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
