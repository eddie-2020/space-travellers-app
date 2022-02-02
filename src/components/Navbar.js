import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.Style.css';

const Navbar = () => (
  <div>
    <header className="header-container">
      <nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <li
            className="logo-container"
            style={{ fontSize: 15, fontFamily: 'sans-serif' }}
          />
          <li style={{ fontSize: 20 }}>Space Travelers&apos; Hub</li>
        </div>

        <ul>
          <li>
            <NavLink activeclassname="active" to="/">
              Rocket
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/mission">
              Mission
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink activenlassname="active" to="/profile">
              MyProfile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Navbar;
