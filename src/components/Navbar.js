import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.Style.css';

const Navbar = () => (
  <div>
    <header className="header-container">
      <nav>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            className="logo-container"
          />
          <div>
            <li className="logo-detail">Space Travelers&apos; Hub</li>
          </div>
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
