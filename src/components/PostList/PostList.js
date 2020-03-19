import React, { Component } from 'react';

import profile from '../../assets/profile.jpg';

import './PostList.css';


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
              avatar: profile,
            },
          content: "Show de bola, parabéns!"
          }
        ]
      },
      {
        
      }
    ]
  };

  render () {
    return (
      <div id="post-list"></div>
    );
  }

}

export default PostList;