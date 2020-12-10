import React from 'react';

import './styles.scss';
import { ReactComponent as ArrowLeft } from '../../assets/img/ic-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/ic-arrow-right.svg';
import ProductsCard from '../ProductsCard';

function ProductsGalery() {
  return (
    <div className="galery">
      <header className="galery__header">
        <p className="galery__description">Showing 1 - 18 of 90</p>
        <div className="pagination">
          <p className="pagination__description">Pages:</p>
          <a href="#" className="pagination__link">
            <ArrowLeft />
          </a>
          <div className="pagination__current">
            <p className="pagination__description--bold">1</p>
          </div>
          <p className="pagination__description">of 5</p>
          <a href="#" className="pagination__link">
            <ArrowRight />
          </a>
        </div>
      </header>

      <ul className="galery__list">
        <ProductsCard
          imgNumber="1"
          name="Pg 3 Nasa"
          description="Basketball shoe"
          price="$120"
        />
        <ProductsCard
          imgNumber="2"
          name="Amazfit Pace Sports"
          description="Amazfit Pace Sports"
          price="$347.96"
        />
        <ProductsCard
          imgNumber="3"
          name="Chute Mag 25 Oz (.75L) Bottle"
          description="Everyday & Outdoor"
          price="$12.89"
        />
        <ProductsCard
          imgNumber="4"
          name="iPhone XS MAX"
          description="Apple"
          price="$999"
        />
        <ProductsCard
          imgNumber="1"
          name="Pg 3 Nasa"
          description="Basketball shoe"
          price="$120"
        />
        <ProductsCard
          imgNumber="2"
          name="Amazfit Pace Sports"
          description="Amazfit Pace Sports"
          price="$347.96"
        />
        <ProductsCard
          imgNumber="1"
          name="Pg 3 Nasa"
          description="Basketball shoe"
          price="$120"
        />
        <ProductsCard
          imgNumber="2"
          name="Amazfit Pace Sports"
          description="Amazfit Pace Sports"
          price="$347.96"
        />
        <ProductsCard
          imgNumber="3"
          name="Chute Mag 25 Oz (.75L) Bottle"
          description="Everyday & Outdoor"
          price="$12.89"
        />
        <ProductsCard
          imgNumber="4"
          name="iPhone XS MAX"
          description="Apple"
          price="$999"
        />
        <ProductsCard
          imgNumber="1"
          name="Pg 3 Nasa"
          description="Basketball shoe"
          price="$120"
        />
        <ProductsCard
          imgNumber="2"
          name="Amazfit Pace Sports"
          description="Amazfit Pace Sports"
          price="$347.96"
        />
      </ul>

      <header className="galery__footer">
        <div className="pagination">
          <p className="pagination__description">Pages:</p>
          <a href="#" className="pagination__link">
            <ArrowLeft />
          </a>
          <div className="pagination__current">
            <p className="pagination__description--bold">1</p>
          </div>
          <p className="pagination__description">of 5</p>
          <a href="#" className="pagination__link">
            <ArrowRight />
          </a>
        </div>
      </header>
    </div>
  );
}

export default ProductsGalery;
