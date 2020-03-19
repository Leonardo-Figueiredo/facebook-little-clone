import React, { Component } from "react";

import logo from '../../assets/facebook-logo.png';
import profile from '../../assets/profile.jpg';

import './header.css';

class Header extends Component {
  render() {
    return (
    <header>
      <img id="logo" src={logo}></img>
      <div id="meuPerfil">
        <p>Meu Perfil</p>
        <img src={profile} id="profile"/>
      </div>
    </header>
    );
  }
}

export default Header;
