import * as React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import withRoot from '../modules/withRoot';

const NotFound = () => {
  return (
    <Container style={{ minHeight: '44vh' }}>
      <Typography variant="h1" color="textSecondary" sx={{ mt: 8 }}>
        404
      </Typography>
      <Typography variant="h4" color="textSecondary" sx={{ mt: 2 }}>
        Страница не найдена
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
        Извините, но страница, которую вы ищете, не существует. Вероятно, она была удалена, ее имя
        было изменено или она временно недоступна.
      </Typography>
      <Button variant="outlined" color="primary" component={Link} to="/" sx={{ mt: 4 }}>
        Вернуться на главную
      </Button>
    </Container>
  );
};

export default withRoot(NotFound);
