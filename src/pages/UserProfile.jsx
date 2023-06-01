import React from 'react'
import { Avatar, Typography, Grid, Box, Card, Button,  CardActionArea, CardContent, CardMedia } from '@mui/material';

const UserProfile = () => {
  const businesses = [
    {
      id: 1,
      title: 'Бизнес 1',
      description: 'Краткая информация о бизнесе 1',
      image: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'Бизнес 2',
      description: 'Краткая информация о бизнесе 2',
      image: '/path/to/image2.jpg',
    },
    {
      id: 3,
      title: 'Бизнес 3',
      description: 'Краткая информация о бизнесе 3',
      image: '/path/to/image3.jpg',
    },
  ];
  return (
    <Box maxWidth='1000px' margin='0 auto'>
      {/* био user */}
      <Grid container spacing={2} >
        <Grid item xs={3}>
          <Avatar alt="Аватар" src="https://i.pinimg.com/736x/1e/7f/31/1e7f31ee7546bbac9040e544d9dc56c5.jpg" sx={{ width: '90%', height: '60%'}} />
          {/* <Avatar  sx={{ width: '100%', height: '65%' }} > <img src="https://i.pinimg.com/736x/1e/7f/31/1e7f31ee7546bbac9040e544d9dc56c5.jpg" alt="" /></Avatar> */}
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5">Имя Фамилия</Typography>
          <Typography variant="body1">0(502) 92-92-22</Typography>
          <Typography variant="body1">Я - бизнесмен с опытом в различных отраслях. Я привержен созданию и развитию успешных предприятий. Мои навыки включают стратегическое планирование, управление командой, разработку маркетинговых стратегий и привлечение инвестиций. Я стремлюсь к постоянному росту и инновациям, и уверен, что бизнес должен иметь положительное влияние на общество. В свободное время я увлекаюсь чтением, спортом и поиском новых возможностей для развития своего бизнеса.</Typography>
        </Grid>
      </Grid>
      {/* действующие бизнесы */}
      <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Действующие бизнесы
      </Typography>
      <Grid container spacing={2}>
        {businesses.map((business) => (
          <Grid item key={business.id} xs={12} sm={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={business.title}
                  height="200"
                  image={business.image}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {business.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {business.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button variant="contained" color="primary" fullWidth>
                Подробнее
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  )
}

export default UserProfile