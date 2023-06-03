import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Box, Rating, Button, TextField,} from '@mui/material';

import Comment from '../../modules/components/Comment';

const SingleTour = () => {
  const [comment, setComment] = React.useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== '') {
      // onSubmit(comment);
      setComment('');
    }
  };

  const [rating, setRating] = useState(0)
  console.log(rating);
  const tour = {
    id: 1,
    title: 'Тур великой горы',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio necessitatibus non odit quae voluptate quis, iure quo nobis minima, suscipit eveniet deserunt eum est libero ipsa ipsum. Earum cupiditate maxime nam ducimus quidem ex quod, dolor sequi, officiis similique beatae tempora asperiores explicabo vitae et blanditiis ab reiciendis architecto voluptatibus inventore! Iure mollitia, amet neque maiores quo sed sint?',
    image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg',
    rating: 4
  };
  const comments = [
    {
      author: 'andrey',
      date: '12.12.12',
      content: 'asokdoasiodaid'
    },
    {
      author: 'andrey',
      date: '12.12.12',
      content: 'asokdoasiodaid'
    },
    {
      author: 'andrey',
      date: '12.12.12',
      content: 'asokdoasiodaid'
    },
  ]
  

  return (
    <Card>
      <CardMedia
        component="img"
        alt={tour.title}
        height="300"
        image={tour.image}
      />
      <CardContent>
        <Box sx={{
          display: 'flex', 
          alignItems: 'center',
          maxWidth: '1300px',
          margin: '0 auto',
          }}>
          <Box sx={{
            maxWidth: '1000px'
            }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {tour.title}
            </Typography>
            <Typography variant="body1">{tour.description}</Typography>
          </Box>
          <Box sx={{
            maxWidth: '300px',
            width: '100%',
            border: '1px solid',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            padding: '20px'
            }}>
            <Box sx={{}}>    
              <Rating
                    name="simple-controlled"
                    value={tour.rating}
                    onChange={(event, value) => {
                      setRating(value);
                    }}
                    />
            </Box>
            <Typography variant='h6'>оставьте отзыв</Typography>
            <Button variant="contained" color="primary">найти машину</Button>
            <Typography variant='h6'>как добраться</Typography>
          </Box>
        </Box>
      </CardContent>
      <Box display="flex" flexDirection="column" mb={2} 
        sx={{
          maxWidth: '1300px',
          width: '100%',
          margin: '0 auto',
          }}>
      <TextField
        label="Add a comment"
        multiline
        rows={4}
        value={comment}
        onChange={handleChange}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Post Comment</Button>
    
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: '1300px',
          width: '100%',
          margin: '50px auto',
          }}>
          {
            comments.map((item, index) => (
              <Comment key={index} item={item} />
            ))
          }
        </Box>
      </Box>
    </Card>
  );
}

export default SingleTour