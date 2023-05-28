import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { IconButton, TextField, ClickAwayListener, ButtonBase, Collapse } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/lab';
import SearchIcon from '@mui/icons-material/Search';
import PassengerIcon from '@mui/icons-material/Person';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import EventIcon from '@mui/icons-material/Event';
import axios from 'axios';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
import Typography from '../../modules/components/Typography';
import withRoot from '../../modules/withRoot';
import PublishIcon from '@mui/icons-material/Publish';
const SearchButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
  padding: '10px 16px',
  fontSize: '0.875rem',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
const PublishButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50px',
  padding: '10px 16px',
  fontSize: '0.875rem',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
}));
const Transport = () => {
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [passengerCount, setPassengerCount] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [isPassengerDropdownOpen, setPassengerDropdownOpen] = React.useState(false);
  const [isDatePickerOpen, setDatePickerOpen] = React.useState(false);
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

  const handlePassengerCountChange = (change) => {
    const newCount = passengerCount + change;
    if (newCount >= 0) {
      setPassengerCount(newCount);
    }
  };
  const handleDatePickerOpen = () => {
    setDatePickerOpen(true);
  };

  const handleDatePickerClose = () => {
    setDatePickerOpen(false);
  };
  const handleSelectSuggestion = (suggestion, setInputValue) => {
    setInputValue(suggestion);
    setFromSuggestions([]);
    setToSuggestions([]);
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mt: 4, mb: 4 }}>
        Транспорт и Маршруты
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Откуда"
          value={from}
          onChange={(e) => {
            const value = e.target.value;
            setFrom(value);
            handleSearch(value, setFromSuggestions);
          }}
          fullWidth
          InputProps={{
            endAdornment: (
              <ClickAwayListener onClickAway={() => setFromSuggestions([])}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    maxHeight: '200px',
                    overflowY: 'auto',
                    bgcolor: 'background.paper',
                    zIndex: 1,
                    boxShadow: (theme) => theme.shadows[1],
                  }}
                >
                  {fromSuggestions.map((suggestion, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      component="div"
                      onClick={() => handleSelectSuggestion(suggestion, setFrom)}
                      sx={{
                        padding: '8px',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                        },
                      }}
                    >
                      {suggestion}
                    </Typography>
                  ))}
                </Box>
              </ClickAwayListener>
            ),
          }}
        />
        <TextField
          label="Куда"
          value={to}
          onChange={(e) => {
            const value = e.target.value;
            setTo(value);
            handleSearch(value, setToSuggestions);
          }}
          fullWidth
          InputProps={{
            endAdornment: (
              <ClickAwayListener onClickAway={() => setToSuggestions([])}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    maxHeight: '200px',
                    overflowY: 'auto',
                    bgcolor: 'background.paper',
                    zIndex: 1,
                    boxShadow: (theme) => theme.shadows[1],
                  }}
                >
                  {toSuggestions.map((suggestion, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      component="div"
                      onClick={() => handleSelectSuggestion(suggestion, setTo)}
                      sx={{
                        padding: '8px',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                        },
                      }}
                    >
                      {suggestion}
                    </Typography>
                  ))}
                </Box>
              </ClickAwayListener>
            ),
          }}
        />

        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={handleDatePickerOpen}
        >
          <IconButton>
            <EventIcon />
          </IconButton>
          <Typography variant="body1">Сегодня</Typography>
        </Box>
        {isDatePickerOpen && (
          <DateTimePicker
            open={isDatePickerOpen}
            onClose={handleDatePickerClose}
            value={selectedDate}
            onChange={setSelectedDate}
            renderInput={(params) => (
              <TextField
                {...params}
                onClick={() => setDatePickerOpen(true)}
                fullWidth
                label="Дата путешествия"
              />
            )}
          />
        )}
        <ClickAwayListener onClickAway={() => setPassengerDropdownOpen(false)}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => setPassengerDropdownOpen(true)}
          >
            <IconButton>
              <PassengerIcon />
            </IconButton>
            <Typography variant="body1">{passengerCount}</Typography>
            <Collapse in={isPassengerDropdownOpen}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton onClick={() => handlePassengerCountChange(-1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1">Пассажиры</Typography>
                <IconButton onClick={() => handlePassengerCountChange(1)}>
                  <AddIcon />
                </IconButton>
              </Box>
            </Collapse>
          </Box>
        </ClickAwayListener>
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
