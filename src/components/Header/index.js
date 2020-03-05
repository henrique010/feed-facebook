import React, { Component } from 'react';

import './styles.css';

import avatar from '../../assets/avatar.png';

class Header extends Component {
  render(){
    return (
      <header>
        <div className="header-description">
          <label>facebook.</label>
        </div>
        <div className="container-profile">
          <label>Meu perfil</label>
          <img src={avatar}/>
        </div>
      </header>
    )
  }
}

export default Header;