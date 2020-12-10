import React from 'react';

import './styles.scss';
import { ReactComponent as Search } from '../../assets/img/is-search.svg';

function SearchInput() {
  return (
    <div className="search-input">
      <div className="search-input__icon">
        <Search />
      </div>
      <input
        className="search-input__field"
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
}

export default SearchInput;
