import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import _ from 'lodash';
import useSWR from 'swr';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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

const fetcher = (url) => axios.get(url).then((res) => res.data);

const SearchResults = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState({});
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const { data: results, error } = useSWR(
    'http://mataraimov.pythonanywhere.com/api/transport/list/',
    fetcher,
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const from = params.get('from');
    const to = params.get('to');
    const date = params.get('date');
    const passengers = params.get('passengers');

    setSearchParams({ from, to, date, passengers });
  }, [location.search]);

  useEffect(() => {
    if (!results) return;

    let filtered = results;
    if (searchParams.from) {
      filtered = filtered.filter(
        (result) => result.where_from.toLowerCase() === searchParams.from.toLowerCase(),
      );
    }
    if (searchParams.to) {
      filtered = filtered.filter(
        (result) => result.where_to.toLowerCase() === searchParams.to.toLowerCase(),
      );
    }

    if (sortOption) {
      filtered = _.sortBy(filtered, [sortOption]);
    }

    setFilteredResults(filtered);
  }, [searchParams, results, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  if (error) return <div>Failed to load</div>;
  if (!results) return <div>Loading...</div>;

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

      <ResultsContainer container spacing={2}>
        {filteredResults.map((result) => (
          <Grid item xs={12} key={result.id}>
            <ResultBox onClick={() => handleCardClick(result.id)}>
              <Typography variant="h6">
                {result.where_from} - {result.where_to}
              </Typography>
              <Typography variant="body1">Цена: {result.price} ₽</Typography>
              <Typography variant="body1">Длительность: {result.duration}</Typography>
            </ResultBox>
          </Grid>
        ))}
      </ResultsContainer>
    </Wrapper>
  );
};

export default SearchResults;
