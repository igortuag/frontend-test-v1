import React from 'react';

import HeaderLayout from '../../components/HeaderLayout';
import FooterLayout from '../../components/FooterLayout';
import Banner from '../../components/Banner';
import ProductsGallery from '../../components/ProductsGallery';

import './styles.scss';

function HomePage() {
  return (
    <div className="home page-layout">
      <HeaderLayout />
      <div className="container home__content">
        <Banner />
        <ProductsGallery />
      </div>
      <FooterLayout />
    </div>
  );
}

export default HomePage;
