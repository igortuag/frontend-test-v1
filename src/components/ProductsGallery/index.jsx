import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/ic-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/ic-arrow-right.svg';
import { ReactComponent as Filter } from '../../assets/img/ic-filter.svg';

import { fetchProducts } from '../../store/products';
import ProductsCard from '../ProductsCard';

function ProductsGallery() {
  const { data } = useSelector(state => state.products);
  const [totalProducts, setTotalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [smartWatches, setSmartWatches] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const getByImgName = (product, num) => {
    if (product && product.image && num) {
      return (+product.image.replace('image ', '') % 4) + 1 === num;
    }
    return false;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setShoes(data.filter(product => getByImgName(product, 1)));
      setSmartWatches(data.filter(product => getByImgName(product, 2)));
      setBottles(data.filter(product => getByImgName(product, 3)));
      setSmartphones(data.filter(product => getByImgName(product, 4)));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const minItemPosition = 18 * page - 18;
      const maxItemPosition = 18 * page;
      let productsToShow = data.slice(minItemPosition, maxItemPosition);
      setTotalProducts(data);
      if (filter && filter.length > 0) {
        const filteredProducts = data.filter(product => {
          return filter.reduce((acm, param) => {
            return getByImgName(product, param) && acm;
          }, true);
        });
        productsToShow = filteredProducts.slice(
          minItemPosition,
          maxItemPosition,
        );
        setTotalProducts(filteredProducts);
      }
      setProducts(productsToShow);
    }
  }, [page, data, filter]);

  const handleChangePageClick = count => {
    const toPage = page + count;
    if (toPage <= Math.ceil(totalProducts.length / 18) && toPage > 0) {
      setPage(toPage);
    }
  };

  const handleFilterClick = filterSelected => {
    const filters = [...filter];
    if (filter.includes(filterSelected)) {
      const IndexOfFilter = filters.indexOf(filterSelected);
      filters.splice(IndexOfFilter, 1);
    } else {
      filters.push(filterSelected);
    }
    setFilter(filters);
    console.log(filter);
  };

  return (
    <main className="gallery-wrapper">
      <div className="filters">
        <header className="filters__header">
          <Filter />
          <h2 className="filters__title">FILTERS</h2>
        </header>

        <ul className="filters__list">
          <li className="filters__item">
            <label htmlFor="shoe" className="filters__label">
              <input
                onClick={() => handleFilterClick(1)}
                type="checkbox"
                id="shoe"
                name="shoe"
                className="filters__field"
              />
              <p className="filters__name">Shoe</p>
              <p>{`(${shoes.length})`}</p>
            </label>
          </li>
          <li className="filters__item">
            <label htmlFor="smartWatch" className="filters__label">
              <input
                onClick={() => handleFilterClick(2)}
                type="checkbox"
                id="smartWatch"
                name="smartWatch"
                className="filters__field"
              />
              <p className="filters__name">Smart Watch</p>
              <p>{`(${smartWatches.length})`}</p>
            </label>
          </li>
          <li className="filters__item">
            <label htmlFor="bottle" className="filters__label">
              <input
                onClick={() => handleFilterClick(3)}
                type="checkbox"
                id="bottle"
                name="bottle"
                className="filters__field"
              />
              <p className="filters__name">Bottle</p>
              <p>{`(${bottles.length})`}</p>
            </label>
          </li>
          <li className="filters__item">
            <label htmlFor="smartphone" className="filters__label">
              <input
                onClick={() => handleFilterClick(4)}
                type="checkbox"
                id="smartphone"
                name="smartphone"
                className="filters__field"
              />
              <p className="filters__name">Smartphone</p>
              <p>{`(${smartphones.length})`}</p>
            </label>
          </li>
        </ul>
      </div>

      <div className="gallery">
        <header className="gallery__header">
          <p className="gallery__description">
            {`Showing ${page} - ${
              products && products.length ? products.length : 0
            } of ${
              totalProducts && totalProducts.length ? totalProducts.length : 0
            }`}
          </p>
          <div className="pagination">
            <p className="pagination__description">Pages:</p>
            <button
              type="button"
              href="#"
              className="pagination__link"
              onClick={() => handleChangePageClick(-1)}
            >
              <ArrowLeft />
            </button>
            <div className="pagination__current">
              <p className="pagination__description--bold">{page}</p>
            </div>
            <p className="pagination__description">
              {`of ${
                totalProducts && totalProducts.length
                  ? Math.ceil(totalProducts.length / 18)
                  : 0
              }`}
            </p>
            <button
              type="button"
              href="#"
              className="pagination__link"
              onClick={() => handleChangePageClick(1)}
            >
              <ArrowRight />
            </button>
          </div>
        </header>

        <ul className="gallery__list">
          {products
            ? products.map((product, index) => {
                const imageNumber =
                  (+product.image.replace('image ', '') % 4) + 1;
                return (
                  <ProductsCard
                    // eslint-disable-next-line react/no-array-index-key
                    key={product.id + product.name + index}
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

        <footer className="gallery__footer">
          <div className="pagination">
            <p className="pagination__description">Pages:</p>
            <button
              type="button"
              href="#"
              className="pagination__link"
              onClick={() => handleChangePageClick(-1)}
            >
              <ArrowLeft />
            </button>
            <div className="pagination__current">
              <p className="pagination__description--bold">{page}</p>
            </div>
            <p className="pagination__description">
              {`of ${
                totalProducts && totalProducts.length
                  ? Math.ceil(totalProducts.length / 18)
                  : 0
              }`}
            </p>
            <button
              type="button"
              href="#"
              className="pagination__link"
              onClick={() => handleChangePageClick(1)}
            >
              <ArrowRight />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default ProductsGallery;
