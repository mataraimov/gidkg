import React, {useState} from 'react'
import { Avatar, Typography, Grid, Box, Card, Button,  CardActionArea, CardContent, CardMedia, Rating, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CardTour = ({item, func}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    func(item.id)
  };
  return (
    <Grid item key={item.id} xs={12} sm={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={item.title}
            height="200"
            image={item.image}
          />
            <CardContent>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Rating
                  readOnly
                  name="simple-controlled"
                  value={item.rating}
                />
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
                <div color={isFavorite ? 'primary' : 'default'} onClick={handleToggleFavorite}>
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </div>
              </Box>
            </CardContent>
          </CardActionArea>

      <Link to={`/tour/${item.id }`}>
        <Button variant="contained" color="primary" fullWidth>
          Подробнее
        </Button>
      </Link>
      </Card>
    </Grid>
  )
}

export default CardTour