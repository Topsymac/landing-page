
import React from 'react';
import "./navbar.css";

import roqquLogo from "../../Assets/Logo-White.svg"
import flag from "../../Assets/Ellipse 22.png"
import Arrow from '../arrow/Arrow';
import Menu from '../../Assets/Menu.png';

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg ">
        <div className="navbarLeft">
            <img src={roqquLogo} alt="" />
        </div>
        <div className="navbarMiddle">
          <ul className='navbar-nav'>
            <li className='nav-item'>Wallet</li>
            <li  className='nav-item'>Exchange</li>
            <li  className='nav-item'>For Business</li>
            <li  className='nav-item'>Developers</li>
            <li  className='nav-item'>Learn</li>
          </ul>
        </div>
        <div className="navbarRight">
          <div>Sign in</div>
          <button>Sign up for free</button>
          <img src={flag} alt="" />
          <div className="arrow">
            <Arrow/>
          </div>
        </div>
      </nav>
      <nav className="navbartoo">
      <div className="navbarLeft">
            <img src={roqquLogo} alt="" />
        </div>
        <div className="navbarRight">
          <img src={flag} alt="" />
          <div className="arrow">
            <Arrow/>
          </div>
          <div className="navMenu">
            <img src={Menu} alt="" />
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar