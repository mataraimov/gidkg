import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const SingleTour = () => {
  const tour = {
    id: 1,
    title: 'Тур великой горы',
    description: 'Описание тура великой горы',
    image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg',
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={tour.title}
        height="300"
        image={tour.image}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {tour.title}
        </Typography>
        <Typography variant="body1">{tour.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default SingleTour