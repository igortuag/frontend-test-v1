import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as User } from '../../assets/img/ic-user.svg';
import { ReactComponent as Cart } from '../../assets/img/ic-cart.svg';
import { ReactComponent as Menu } from '../../assets/img/ic-menu.svg';
import SearchInput from '../SearchInput';
import NavMenu from '../NavMenu';

import './styles.scss';

function HeaderLayout() {
  const { products } = useSelector(state => state.cart);

  const handleActiveMenu = () => {
    document.querySelector('#navMenu').classList.toggle('header__nav--active');
  };

  return (
    <header>
      <div className="header container">
        <button
          type="button"
          onClick={() => handleActiveMenu()}
          className="menu-mobile"
        >
          <Menu />
        </button>
        <a href="#" className="header__logo">
          <Logo />
        </a>
        <div className="header__search">
          <SearchInput />
        </div>
        <a href="#" className="header__link header__link--disable">
          <p className="header__link__description">LOCATION</p>
        </a>
        <a href="#" className="header__link header__link--disable">
          <p className="header__link__description">Help & Contact</p>
        </a>
        <a href="#" className="header__link">
          <div className="header__icon">
            <User />
          </div>
          <p className="header__link__description">My Account</p>
        </a>
        <a href="#" className="header__link">
          <div className="header__icon">
            <Cart />
          </div>
          <p className="header__link__description">{`(${products})`}</p>
        </a>
      </div>
      <div className="header__nav">
        <NavMenu />
      </div>
      <div className="header__nav header__nav--mobile" id="navMenu">
        <button type="button" onClick={() => handleActiveMenu()}>
          <NavMenu />
        </button>
      </div>
    </header>
  );
}

export default HeaderLayout;
