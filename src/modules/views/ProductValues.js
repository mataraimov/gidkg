import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  height: '100%', // ensure full height
  justifyContent: 'start',
  textAlign: 'center',
};

function ProductValues() {
  return (
    <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}>
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Лучшие места для отдыха в Кыргызстане
              </Typography>
              <Typography variant="h5">
                {'От самых модных бутик-отелей до красивых национальных парков, '}
                {'возможности для отдыха всего в нескольких шагах от вашего дома.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Удивительные новые впечатления
              </Typography>
              <Typography variant="h5">
                {
                  'Приватизируйте гостиницу, прокатитесь на коне или проснитесь с видом на прекрасные горы… '
                }
                {'ваш отдых будет неповторимым.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Эксклюзивные предложения
              </Typography>
              <Typography variant="h5">
                {'Зарегистрируйтесь и получите доступ к специально договорённым ценам '}
                {'которые вы не найдете больше нигде.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
