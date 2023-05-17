import React from 'react';

import logo from '../../images/logo.png';
import { links } from '../helpers/data';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <nav className="header-nav">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
