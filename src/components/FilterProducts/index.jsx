import React from 'react';

import './styles.scss';
import { ReactComponent as Filter } from '../../assets/img/ic-filter.svg';

function FilterProducts() {
  return (
    <div className="filters">
      <header className="filters__header">
        <Filter />
        <h2 className="filters__title">FILTERS</h2>
      </header>

      <ul className="filters__list">
        <li className="filters__item">
          <label htmlFor="shoe" className="filters__label">
            <input
              type="checkbox"
              id="shoe"
              name="shoe"
              className="filters__field"
            />
            <p className="filters__name">Shoe</p>
            <p>(18)</p>
          </label>
        </li>
        <li className="filters__item">
          <label htmlFor="smartWatch" className="filters__label">
            <input
              type="checkbox"
              id="smartWatch"
              name="smartWatch"
              className="filters__field"
            />
            <p className="filters__name">Smart Watch</p>
            <p>(81)</p>
          </label>
        </li>
        <li className="filters__item">
          <label htmlFor="bottle" className="filters__label">
            <input
              type="checkbox"
              id="bottle"
              name="bottle"
              className="filters__field"
            />
            <p className="filters__name">Bottle</p>
            <p>(23)</p>
          </label>
        </li>
        <li className="filters__item">
          <label htmlFor="smartphone" className="filters__label">
            <input
              type="checkbox"
              id="smartphone"
              name="smartphone"
              className="filters__field"
            />
            <p className="filters__name">Smartphone</p>
            <p>(32)</p>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default FilterProducts;
