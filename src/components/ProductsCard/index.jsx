import React from 'react';

import './styles.scss';

function ProductsCard({
  productImgNumber,
  productName,
  productDescription,
  productPrice,
}) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={`img/${productImgNumber}.png`} alt="Pg 3 Nasa" />
      </div>
      <button type="button" className="btn card__btn">
        ADD TO CART
      </button>
      <footer className="card__footer">
        <h2 className="card__title">{productName}</h2>
        <p className="card__description">{productDescription}</p>
        <p className="card__price">{productPrice}</p>
      </footer>
    </div>
  );
}

export default ProductsCard;
