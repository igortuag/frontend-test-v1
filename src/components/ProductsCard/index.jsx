import React from 'react';

import './styles.scss';

function ProductsCard({ imgNumber, name, description, price }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={`img/${imgNumber}.png`} alt="Pg 3 Nasa" />
      </div>
      <button type="button" className="btn card__btn">
        ADD TO CART
      </button>
      <footer className="card__footer">
        <h2 className="card__title">{name}</h2>
        <p className="card__description">{description}</p>
        <p className="card__price">{price}</p>
      </footer>
    </div>
  );
}

export default ProductsCard;
