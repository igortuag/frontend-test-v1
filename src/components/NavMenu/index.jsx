import React from 'react';

import './styles.scss';

function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul className="container nav-menu__list">
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            NEW COLLECTIONS
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            BRANDS
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            BABY FASHION
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            KID’s FASHION
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            TEEN FASHION
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            WOMEN’S FASHION
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            HOME & DESIGN
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            TOYS
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            GREENABLE
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            OUTLET
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
