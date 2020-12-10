import React from 'react';

import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as User } from '../../assets/img/ic-user.svg';
import { ReactComponent as Cart } from '../../assets/img/ic-cart.svg';
import SearchInput from '../SearchInput';
import NavMenu from '../NavMenu';

import './styles.scss';

function HeaderLayout() {
  return (
    <header>
      <div className="header container">
        <Logo />
        <SearchInput />
        <a href="#" className="header__link header__link--disable">
          LOCATION
        </a>
        <a href="#" className="header__link header__link--disable">
          Help & Contact
        </a>
        <a href="#" className="header__link">
          <div className="header__icon">
            <User />
          </div>
          My Account
        </a>
        <a href="#" className="header__link">
          <div className="header__icon">
            <Cart />
          </div>
          (1)
        </a>
      </div>
      <NavMenu />
    </header>
  );
}

export default HeaderLayout;
