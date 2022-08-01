import React from 'react'
import './Navbar.scss';
import logo from  '../../take.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <img width= "80" src={logo} alt='discover'/>
        <ul className = "nav-links">
            <li>
                <a href='/' className="nav-link">
                    Nakuru City Restaurant Finder, Where good restaurants reside!
                </a>
            </li>
        
        </ul>
    </nav>
  );
}
