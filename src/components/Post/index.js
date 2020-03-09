import React, { Component } from 'react';

import Comment from '../Comment';

import profile from '../../assets/profile1.png';

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
    return (
      <div className="container-post">
        <header>
          <div className="container-header">
            <img src={profile} className="profile-image"/>
            <div>
              <label className="header-user-name">Julio Alcantara</label>
              <label className="header-date">04 Jun 2019</label>
            </div>
          </div>
          <label className="post-description">
            Pessoal, alguém sabe se a Rocketseat está contratando?
          </label>
        </header>
        {this.state.comments.map(comment => (
          <Comment key={comment.id}/>
        ))}
      </div>
    )
  }
}

export default Post;