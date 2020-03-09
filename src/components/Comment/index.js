import React, { Component, Fragment } from 'react';

import './styles.css';

class Comment extends Component {
  render(){
    const { author, content } = this.props.comment;
    return (
      <div className="comment-container">
        <div className="profile-image-container">
          <img src={author.avatar} className="profile-image" />
        </div>
        <label className="comment-description">
        <strong>{author.name}:</strong>
          {content}
        </label>
      </div>
    );
  }
}

export default Comment;