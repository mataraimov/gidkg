import React from 'react';
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import Transport from './Tourism/Transport';
import withRoot from '../modules/withRoot';
const HomePage = () => {
  return (
    <React.Fragment>
      <ProductHero />
      <Transport />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </React.Fragment>
  );
};

export default withRoot(HomePage);
