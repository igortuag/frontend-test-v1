import React from 'react';

import HeaderLayout from '../../components/HeaderLayout';
import FooterLayout from '../../components/FooterLayout';

import './styles.scss';

function App() {
  return (
    <div className="home page-layout">
      <HeaderLayout />
      <h1>Home</h1>
      <FooterLayout />
    </div>
  );
}

export default App;
