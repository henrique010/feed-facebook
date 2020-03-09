import React, { Component } from 'react';

import profile2 from '../../assets/profile2.png';

import './styles.css';

class Comment extends Component {
  render(){
    return (
      <footer className="comment-container">
        <div>
          <img src={profile2} className="profile-image" />
        </div>
        <label>
            A Rocketseat está sempre em busca de novos membros para o time, principalmente os que se destacam no bootcamp.
        </label>
      </footer>
    );
  }
}

export default Comment;