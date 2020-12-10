import React from 'react';

import { ReactComponent as Logo } from '../../assets/img/logo-small.svg';
import { ReactComponent as Facebook } from '../../assets/img/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/img/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/img/youtube.svg';

import './styles.scss';

function FooterLayout() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer">
        <h3 className="footer__title">CONTACT US</h3>
        <ul className="footer__list">
          <li className="footer__item">Email us</li>
        </ul>

        <h3 className="footer__title">CUSTOMER SERVICE</h3>
        <ul className="footer__list">
          <li className="footer__item">Shipping and returns</li>
          <li className="footer__item">My Orders</li>
          <li className="footer__item">To Make a Return</li>
          <li className="footer__item">FAQ</li>
          <li className="footer__item">Terms and Conditions</li>
        </ul>

        <h3 className="footer__title">About US</h3>
        <ul className="footer__list">
          <li className="footer__item">Career</li>
          <li className="footer__item">Privacy</li>
          <li className="footer__item">Privacy Policy</li>
          <li className="footer__item">Sitemap</li>
        </ul>

        <h3 className="footer__title">International shopping</h3>
        <ul className="footer__list">
          <li className="footer__item">Choose country</li>
          <li className="footer__item">Locate a store</li>
        </ul>

        <h3 className="footer__title">SIGN UP FOR THE NEWSLETTER</h3>
        <ul className="footer__list">
          <li className="footer__item">
            Be the first to hear about our latest launches, new colors, and
            events.
            <div className="main-input">
              <input
                className="footer__input main-input__field"
                type="email"
                placeholder="Email address"
              />
            </div>
            <button type="button" className="btn btn--small">
              SIGN UP
            </button>
          </li>
        </ul>

        <div className="footer__logo">
          <Logo />
        </div>
        <div className="footer__copyright">© 2020 Imagination Media</div>
        <ul className="social">
          <li className="social__item">
            <a href="#">
              <Facebook />
            </a>
          </li>
          <li className="social__item">
            <a href="#">
              <Instagram />
            </a>
          </li>
          <li className="social__item">
            <a href="#">
              <Twitter />
            </a>
          </li>
          <li className="social__item">
            <a href="#">
              <Youtube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterLayout;
