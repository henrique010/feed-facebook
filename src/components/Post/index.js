import React, { Component } from 'react';

import profile from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';

import './styles.css';

class Post extends Component {
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
          <label>Pessoal, alguém sabe se a Rocketseat está contratando?</label>
        </header>
        {/* <footer>
          <img src={profile2} className="profile-image" />
        </footer> */}
      </div>
    )
  }
}

export default Post;