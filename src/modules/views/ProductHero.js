import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://www.journalofnomads.com/wp-content/uploads/2019/09/Tash-Rabat-Yurt-camp-1024x768.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Расширьте свои возможности
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        Улучшите свой опыт путешествия, обнаружив лучшие местные бизнесы.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/sign-in/"
        sx={{ minWidth: 200 }}
      >
        Зарегистрировать бизнес
      </Button>
      <Button
        style={{ margin: '10px 0' }}
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/tourism/"
        sx={{ minWidth: 200 }}
      >
        Планировать путешествие
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Исследуйте и наслаждайтесь
      </Typography>
    </ProductHeroLayout>
  );
}
