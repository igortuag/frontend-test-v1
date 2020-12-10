import React from 'react';

import './styles.scss';
import productHighlight from '../../assets/img/products/1.png';

function Banner() {
  return (
    <div className="banner container">
      <h2 className="banner__title">Category banner name</h2>
      <img src={productHighlight} alt="Banner product" />
    </div>
  );
}

export default Banner;
