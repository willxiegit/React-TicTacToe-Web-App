import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css'
import logo from '../../images/logo192.png';
import Sidebar from './Sidebar'

export default function Navbar() {
  return(
    <nav className='navbar'>
      <div className='navbar-inner'>
        <Sidebar />
        {/* logo and name */}
        <Link to='/' className='logo'>
          <img className='logo-image' src={logo} />
          <span className='logo-name'>Tic-Tac-Toe</span>
        </Link>
        {/* navigation links */}
        <div className='links'>
          <Link to='/play'>Play</Link>
          <Link to='/'>Home</Link>
          <Link>Media</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </nav>
  );
}