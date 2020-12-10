import React from 'react';

import './styles.scss';
import { ReactComponent as Filter } from '../../assets/img/ic-filter.svg';

function Banner() {
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
            <spam className="filters__name">Shoe</spam>
            <spam>(18)</spam>
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
            <spam className="filters__name">Smart Watch</spam>
            <spam>(81)</spam>
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
            <spam className="filters__name">Bottle</spam>
            <spam>(23)</spam>
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
            <spam className="filters__name">Smartphone</spam>
            <spam>(32)</spam>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Banner;
