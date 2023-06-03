import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';


const Favourites = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg', description: 'Lorem ipsum dolor sit amet', rating: 5 },
    { id: 2, name: 'Product 2', image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg', description: 'Consectetur adipiscing elit', rating: 4 },
    { id: 3, name: 'Product 3', image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg', description: 'Vivamus efficitur libero et tortor', rating: 3 },
  ];
  return (
    <Container maxWidth="lg">
      <Box sx={{margin: '60px 0'}}>
        <Typography variant="h2">Favourites</Typography>
      </Box>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia component="img" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Rating
                  name="simple-controlled"
                  value={product.rating}
                />
                <Link to={`/tour/1`}>
                  <Button variant="contained" color="primary">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Favourites