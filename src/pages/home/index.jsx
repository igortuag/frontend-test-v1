import React from 'react';

import HeaderLayout from '../../components/HeaderLayout';
import FooterLayout from '../../components/FooterLayout';
import Banner from '../../components/Banner';
import FilterProducts from '../../components/FilterProducts';
import ProductsGalery from '../../components/ProductsGalery';

import './styles.scss';

function App() {
  return (
    <div className="home page-layout">
      <HeaderLayout />
      <div className="container home__content">
        <Banner />
        <main className="products-showcase">
          <FilterProducts />
          <ProductsGalery />
        </main>
      </div>
      <FooterLayout />
    </div>
  );
}

export default App;
