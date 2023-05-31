import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import {
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const ResultsContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ResultBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SearchResults = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState({});
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    // Extract search parameters from URL
    const params = new URLSearchParams(location.search);
    const from = params.get('from');
    const to = params.get('to');
    const date = params.get('date');
    const passengers = params.get('passengers');

    // You can use the parameters to make a request to the server or external API
    // and get the search results
    const mockResults = [
      {
        id: 1,
        departure: 'Москва',
        destination: 'Санкт-Петербург',
        price: 1490,
        duration: '8 ч 10',
        amenities: ['WiFi', 'Розетка'],
      },
      {
        id: 2,
        departure: 'Москва',
        destination: 'Санкт-Петербург',
        price: 1820,
        duration: '8 ч 20',
        amenities: ['Мгновенное бронирование', 'Можно курить'],
      },
      {
        id: 3,
        departure: 'Химки',
        destination: 'Санкт-Петербург',
        price: 1550,
        duration: '8 ч 20',
        amenities: ['Максимум двое сзади', 'Можно с животными'],
      },
      // Add more search results here
    ];

    // Save the search parameters and results in the component state
    setSearchParams({ from, to, date, passengers });
    setResults(mockResults);
    setFilteredResults(mockResults);
  }, [location.search]);

  useEffect(() => {
    // Apply filtering based on the selected search parameters
    let filtered = results;
    if (searchParams.from) {
      filtered = filtered.filter(
        (result) => result.departure.toLowerCase() === searchParams.from.toLowerCase(),
      );
    }
    if (searchParams.to) {
      filtered = filtered.filter(
        (result) => result.destination.toLowerCase() === searchParams.to.toLowerCase(),
      );
    }

    // Apply filtering based on amenities
    if (amenities.length > 0) {
      filtered = filtered.filter((result) => {
        return amenities.every((amenity) => result.amenities.includes(amenity));
      });
    }

    // Apply sorting if a sort option is selected
    if (sortOption) {
      filtered = _.sortBy(filtered, [sortOption]);
    }

    setFilteredResults(filtered);
  }, [searchParams, results, sortOption, amenities]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAmenities((prevAmenities) => [...prevAmenities, value]);
    } else {
      setAmenities((prevAmenities) => prevAmenities.filter((amenity) => amenity !== value));
    }
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Wrapper maxWidth="lg">
      <Title variant="h4" align="center" gutterBottom>
        Результаты поиска
      </Title>

      <FormControl fullWidth>
        <InputLabel id="sort-select-label">Сортировать по</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          value={sortOption}
          onChange={handleSortChange}
        >
          <MenuItem value="">Нет сортировки</MenuItem>
          <MenuItem value="price">Цена</MenuItem>
          <MenuItem value="duration">Длительность</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset" sx={{ marginTop: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Профиль подтвержден"
            value="Профиль подтвержден"
            onChange={handleAmenityChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Мгновенное бронирование"
            value="Мгновенное бронирование"
            onChange={handleAmenityChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Можно курить"
            value="Можно курить"
            onChange={handleAmenityChange}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Можно с животными"
            value="Можно с животными"
            onChange={handleAmenityChange}
          />
        </FormGroup>
      </FormControl>

      <ResultsContainer container spacing={2}>
        {filteredResults.map((result) => (
          <Grid item xs={12} key={result.id}>
            <ResultBox onClick={() => handleCardClick(result.id)}>
              <Typography variant="h6">
                {result.departure} - {result.destination}
              </Typography>
              <Typography variant="body1">Цена: {result.price} ₽</Typography>
              <Typography variant="body1">Длительность: {result.duration}</Typography>
              <Typography variant="body1">
                Удобства:{' '}
                {result.amenities.map((amenity) => (
                  <Chip
                    key={amenity}
                    label={amenity}
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  />
                ))}
              </Typography>
            </ResultBox>
          </Grid>
        ))}
      </ResultsContainer>
    </Wrapper>
  );
};

export default SearchResults;
