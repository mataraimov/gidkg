import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import Typography from '../../modules/components/Typography';
import withRoot from '../../modules/withRoot';
import PublishIcon from '@mui/icons-material/Publish';
import { PublishButton, SearchButton } from './utils/ui/Buttons';
import SearchTextField from './utils/helpers/SearchTextField';
import CustomDatePicker from './utils/helpers/CustomDatePicker';
import PassengerSelector from './utils/helpers/PassengerSelector';
import { useMediaQuery, useTheme } from '@mui/material';
const Transport = () => {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [passengerCount, setPassengerCount] = React.useState(1);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [fromSuggestions, setFromSuggestions] = React.useState([]);
  const [toSuggestions, setToSuggestions] = React.useState([]);

  const handleSearch = React.useCallback(
    debounce((query, setSuggestionsFunction) => {
      if (!query) {
        setSuggestionsFunction([]);
        return;
      }
      axios
        .get(`http://api.geonames.org/searchJSON?q=${query}&maxRows=5&username=mataraimov`)
        .then((res) => {
          const cities = res.data.geonames.map((city) => city.name);
          setSuggestionsFunction(cities);
        })
        .catch((err) => {
          console.error(err);
          setSuggestionsFunction([]);
        });
    }, 1000),
    [],
  );

  const handleSelectSuggestion = (suggestion, setInputValue) => {
    if (suggestion !== null) {
      setInputValue(suggestion);
    }
    setFromSuggestions([]);
    setToSuggestions([]);
  };
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container sx={{ mt: 4, mb: 4 }} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mt: 4, mb: 4 }}>
        Транспорт и Маршруты
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: isMdUp ? 'row' : 'column',
          gap: 2,
        }}
      >
        <SearchTextField
          label="Откуда"
          value={from}
          onChange={(e) => {
            const value = e.target.value;
            setFrom(value);
            handleSearch(value, setFromSuggestions);
          }}
          suggestions={fromSuggestions}
          onSuggestionClick={(suggestion) => handleSelectSuggestion(suggestion, setFrom)}
        />

        <SearchTextField
          label="Куда"
          value={to}
          onChange={(e) => {
            const value = e.target.value;
            setTo(value);
            handleSearch(value, setToSuggestions);
          }}
          suggestions={toSuggestions}
          onSuggestionClick={(suggestion) => handleSelectSuggestion(suggestion, setTo)}
        />

        <CustomDatePicker value={selectedDate} onChange={setSelectedDate} />

        <PassengerSelector initialCount={passengerCount} onCountChange={setPassengerCount} />

        <Link
          to={`/search-results?from=${from}&to=${to}&date=${selectedDate}&passengers=${passengerCount}`}
          style={{ textDecoration: 'none' }}
        >
          <SearchButton>
            <SearchIcon />
            Поиск
          </SearchButton>
        </Link>
      </Box>
      <Box sx={{ margin: '10px auto', width: '300px' }}>
        <PublishButton>
          <PublishIcon />
          Опубликовать поездку
        </PublishButton>
      </Box>
    </Container>
  );
};

export default withRoot(Transport);
