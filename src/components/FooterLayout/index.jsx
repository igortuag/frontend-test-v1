import React, { useState } from 'react';

import { ReactComponent as Logo } from '../../assets/img/logo-small.svg';
import { ReactComponent as Facebook } from '../../assets/img/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/img/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/img/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/img/youtube.svg';
import { ReactComponent as ArrowDown } from '../../assets/img/ic-arrow-down.svg';

import { postSubscription } from '../../api';

import './styles.scss';

function FooterLayout() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email,
    };

    try {
      await postSubscription(data);
      document
        .querySelector('#email')
        .classList.add('main-input__field--success');
    } catch (error) {
      document
        .querySelector('#email')
        .classList.add('main-input__field--error');
    }
  }

  const handleActiveLista = id => {
    console.log(id);
    document.querySelector(id).classList.toggle('footer__list--active');
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer">
        <button
          type="button"
          onClick={() => handleActiveLista('#contactUs')}
          className="footer__title"
        >
          CONTACT US
          <ArrowDown />
        </button>
        <ul className="footer__list" id="contactUs">
          <li className="footer__item">
            <a href="#">Email us</a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleActiveLista('#customerService')}
          className="footer__title"
        >
          CUSTOMER SERVICE
          <ArrowDown />
        </button>
        <ul className="footer__list" id="customerService">
          <li className="footer__item">
            <a href="#">Shipping and returns</a>
          </li>
          <li className="footer__item">
            <a href="#">My Orders</a>
          </li>
          <li className="footer__item">
            <a href="#">To Make a Return</a>
          </li>
          <li className="footer__item">
            <a href="#">FAQ</a>
          </li>
          <li className="footer__item">
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleActiveLista('#aboutUS')}
          className="footer__title"
        >
          About US
          <ArrowDown />
        </button>
        <ul className="footer__list" id="aboutUS">
          <li className="footer__item">
            <a href="#">Career</a>
          </li>
          <li className="footer__item">
            <a href="#">Privacy</a>
          </li>
          <li className="footer__item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer__item">
            <a href="#">Sitemap</a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => handleActiveLista('#internationalShopping')}
          className="footer__title"
        >
          International shopping
          <ArrowDown />
        </button>
        <ul className="footer__list" id="internationalShopping">
          <li className="footer__item">
            <a href="#">Choose country</a>
          </li>
          <li className="footer__item">
            <a href="#">Locate a store</a>
          </li>
        </ul>

        <h3 className="footer__title">SIGN UP FOR THE NEWSLETTER</h3>
        <ul>
          <li className="footer__item">
            Be the first to hear about our latest launches, new colors, and
            events.
            <form className="main-input" onSubmit={handleSubmit}>
              <input
                className="footer__input main-input__field"
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                required
                onChange={event => setEmail(event.target.value)}
              />
              <button type="submit" className="btn btn--small">
                SIGN UP
              </button>
            </form>
          </li>
        </ul>

        <div className="copyright">
          <a className="copyright__logo" href="#">
            <Logo />
          </a>
          <p className="copyright__description">© 2020 Imagination Media</p>
        </div>
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
