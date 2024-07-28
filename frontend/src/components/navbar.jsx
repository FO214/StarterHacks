import React from 'react';
import logoPlaceholder from '../assets/logo-placeholder.png'
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <img src={logoPlaceholder} id="logo" alt="logo image"></img>
      <ul className="nav-list">
        <li className="nav-item underline">My Fridge</li>
        <li className="nav-item underline">Recipies</li>
      </ul>
    </nav>
  );
};

export default NavBar;