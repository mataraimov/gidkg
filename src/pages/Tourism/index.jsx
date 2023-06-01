import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import withRoot from '../../modules/withRoot';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { NavigateBeforeSharp, NavigateNextSharp } from '@mui/icons-material';
import { offers } from '../../utils';
import { CategoryButton, CategoryContainer, Line } from './utils/ui/Buttons';
import { Link } from 'react-router-dom';

const categories = [
  'Все',
  'Горные пейзажи',
  'Экскурсии',
  'Культурные мероприятия',
  'Конные прогулки',
  'Национальная кухня',
  'Шоппинг',
  'Пешие прогулки',
  'Спорт и фитнес',
  'Спа и массаж',
];

function Tourism() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [page, setPage] = useState(0);
  const matches = useMediaQuery('(max-width:600px)'); // true if the screen width is 600px or less
  const maxItemsPerPage = matches ? 1 : 3;
  const filterOffers = (category) => {
    if (category === 'Все') {
      return offers;
    }
    return offers.filter((offer) => offer.category === category);
  };

  const handleNext = () => setPage(page + 1);
  const handleBack = () => setPage(page - 1);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CategoryContainer>
          {categories.map((category) => (
            <CategoryButton
              variant={selectedCategory === category ? 'contained' : 'outlined'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryContainer>
      </Grid>

      {selectedCategory === 'Все'
        ? categories.slice(1).map((category) => {
            const categoryOffers = filterOffers(category).slice(
              page * maxItemsPerPage,
              (page + 1) * maxItemsPerPage,
              
            );
            return (
              <Grid item xs={12}>
                <Typography variant="h4">{category}</Typography>
                <Grid container spacing={3}>
                  {categoryOffers.map((offer) => (
                    // <Button >
                      <Link to={`/tour/1`}>
                      <Grid item xs={12} sm={6} md={4}>
                        <img src={offer.imageUrl} alt={offer.title} />
                        <Typography variant="h6">{offer.title}</Typography>
                        <Typography>{offer.price}</Typography>
                        <Typography>{offer.address}</Typography>
                      </Grid>
                      </Link>
                    // </Button>
                  ))}
                </Grid>
                <IconButton
                  style={{ marginTop: '14px' }}
                  disabled={page === 0}
                  onClick={handleBack}
                >
                  <NavigateBeforeSharp />
                </IconButton>
                <IconButton
                  style={{ marginTop: '14px' }}
                  disabled={categoryOffers.length < maxItemsPerPage}
                  onClick={handleNext}
                >
                  <NavigateNextSharp />
                </IconButton>
                <Line />
              </Grid>
            );
          })
        : categories
            .filter((category) => category === selectedCategory)
            .map((category) => {
              const categoryOffers = filterOffers(category).slice(
                page * maxItemsPerPage,
                (page + 1) * maxItemsPerPage,
              );
              return (
                <Grid item xs={12}>
                  <Typography variant="h5">{category}</Typography>
                  <Grid container spacing={3}>
                    {categoryOffers.map((offer, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt={offer.title}
                              height="140"
                              image={offer.imageUrl}
                              title={offer.title}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                {offer.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {offer.price}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {offer.address}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <IconButton
                    style={{ marginTop: '14px' }}
                    disabled={page === 0}
                    onClick={handleBack}
                  >
                    <NavigateBeforeSharp />
                  </IconButton>
                  <IconButton
                    style={{ marginTop: '14px' }}
                    disabled={categoryOffers.length < maxItemsPerPage}
                    onClick={handleNext}
                  >
                    <NavigateNextSharp />
                  </IconButton>
                  <Line />
                </Grid>
              );
            })}
    </Grid>
  );
}

export default withRoot(Tourism);
