import React from 'react';
import { useDispatch } from 'react-redux';

import { addProductCart } from '../../store/cart';

import './styles.scss';

function ProductsCard({
  productImgNumber,
  productName,
  productDescription,
  productPrice,
  productSpecialPrice,
}) {
  const dispatch = useDispatch();

  const handleClickAddToCart = () => {
    dispatch(addProductCart());
  };

  const discount =
    productPrice &&
    productSpecialPrice &&
    productSpecialPrice / productPrice < 1
      ? Math.ceil((productSpecialPrice / productPrice) * 100)
      : 0;

  return (
    <div className="card">
      {discount > 0 && (
        <div className="card__tag">
          <p>{`${discount}% OFF`}</p>
        </div>
      )}

      <div className="card__img">
        <img src={`img/${productImgNumber}.png`} alt={productName} />
      </div>
      <button
        onClick={() => handleClickAddToCart()}
        type="button"
        className="btn card__btn"
      >
        ADD TO CART
      </button>
      <footer className="card__footer">
        <h2 className="card__title">{productName}</h2>
        <p className="card__description">{productDescription}</p>
        {productSpecialPrice && discount ? (
          <div className="card__prices">
            <p className="card__price card__price--disabled">
              {productPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'USD',
              })}
            </p>
            <p className="card__price">
              {productSpecialPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'USD',
              })}
            </p>
          </div>
        ) : (
          <p className="card__price">
            {productPrice.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        )}
      </footer>
    </div>
  );
}

export default ProductsCard;
