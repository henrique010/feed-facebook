import React, { Component } from 'react';

import Comment from '../Comment';

import './styles.css';

class Post extends Component {

  state = {
    comments: [],
  }

  componentDidMount(){
    const { comments } = this.props.post;

    if(comments){
      this.setState({ comments });
    }
  }

  render(){
    const { author, date, content } = this.props.post;
    return (
      <div className="container-post">
        <header>
          <div className="container-header">
            <img src={author.avatar} className="profile-image"/>
            <div>
              <label className="header-user-name">{author.name}</label>
              <label className="header-date">{date}</label>
            </div>
          </div>
          <label className="post-description">{content}</label>
        </header>
        <footer>
          {this.state.comments.map(comment => (
            <Comment key={comment.id} comment={comment}/>
          ))}
        </footer>
      </div>
    )
  }
}

export default Post;