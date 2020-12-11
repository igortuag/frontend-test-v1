import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/ic-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/ic-arrow-right.svg';
import { fetchProducts } from '../../store/products';
import ProductsCard from '../ProductsCard';

function ProductsGallery() {
  const { data } = useSelector(state => state.products);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const minItemPosition = 18 * page - 18;
      const maxItemPosition = 18 * page;
      const productsToShow = data.slice(minItemPosition, maxItemPosition);
      setProducts(productsToShow);
    }
  }, [page, data]);

  const handlePageClick = count => {
    const toPage = page + count;
    if (toPage <= Math.ceil(data.length / 18) && toPage > 0) {
      setPage(toPage);
    }
  };

  return (
    <div className="gallery">
      <header className="gallery__header">
        <p className="gallery__description">
          {`Showing ${page} - ${
            products && products.length ? products.length : 0
          } of ${data && data.length ? data.length : 0}`}
        </p>
        <div className="pagination">
          <p className="pagination__description">Pages:</p>
          <button
            type="button"
            href="#"
            className="pagination__link"
            onClick={() => handlePageClick(-1)}
          >
            <ArrowLeft />
          </button>
          <div className="pagination__current">
            <p className="pagination__description--bold">{page}</p>
          </div>
          <p className="pagination__description">
            {`of ${data && data.length ? Math.ceil(data.length / 18) : 0}`}
          </p>
          <button
            type="button"
            href="#"
            className="pagination__link"
            onClick={() => handlePageClick(1)}
          >
            <ArrowRight />
          </button>
        </div>
      </header>

      <ul className="gallery__list">
        {products
          ? products.map(product => {
              const imageNumber =
                (+product.image.replace('image ', '') % 4) + 1;
              return (
                <ProductsCard
                  key={product.id + product.name}
                  productImgNumber={imageNumber}
                  productName={product.name}
                  productDescription={product.description}
                  productPrice={product.price}
                  productSpecialPrice={product.special_price}
                />
              );
            })
          : 'Loading...'}
      </ul>

      <header className="gallery__footer">
        <div className="pagination">
          <p className="pagination__description">Pages:</p>
          <button
            type="button"
            href="#"
            className="pagination__link"
            onClick={() => handlePageClick(-1)}
          >
            <ArrowLeft />
          </button>
          <div className="pagination__current">
            <p className="pagination__description--bold">{page}</p>
          </div>
          <p className="pagination__description">
            {`of ${data && data.length ? Math.ceil(data.length / 18) : 0}`}
          </p>
          <button
            type="button"
            href="#"
            className="pagination__link"
            onClick={() => handlePageClick(1)}
          >
            <ArrowRight />
          </button>
        </div>
      </header>
    </div>
  );
}

export default ProductsGallery;
