
import React from 'react';
import "./navbar.css";

import roqquLogo from "../../Assets/Logo-White.svg"
import flag from "../../Assets/Ellipse 22.png"
import Arrow from '../arrow/Arrow';

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
        </div>
      </nav>

{/* <nav class="navbar navbar-expand-lg">
  <div className="navbarLeft d-flex">
      <img src={roqquLogo} alt="" />
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
      <div className="navbarMiddle collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav'>
            <li className='nav-item'>Wallet</li>
            <li  className='nav-item'>Exchange</li>
            <li  className='nav-item'>For Business</li>
            <li  className='nav-item'>Developers</li>
            <li  className='nav-item'>Learn</li>
          </ul>
        </div>
        <div className="navbarRight collapse navbar-collapse" id="navbarSupportedContent">
          <div>Sign in</div>
          <button>Sign up for free</button>
          <img src={flag} alt="" />
          <div className="arrow">
            <Arrow/>
          </div>
        </div>
      
</nav> */}
    </div>
  )
}

export default Navbar