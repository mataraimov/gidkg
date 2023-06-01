import * as React from 'react';
import { styled } from '@mui/system';
import { Chip, useMediaQuery, useTheme } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '../../modules/components/Typography';
import withRoot from '../../modules/withRoot';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import CustomDatePicker from './utils/helpers/CustomDatePicker';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const RootContainer = styled(Container)(({ theme }) => ({
  '& .MuiChip-root': {
    margin: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      height: 'auto',
      margin: theme.spacing(0.25),
    },
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
  '& .MuiButton-root': {
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
    },
  },
  '& .MuiChip-root': {
    margin: theme.spacing(0.5),
  },
}));

const mockAmenities = ['Максимум двое сзади', 'Мгновенное бронирование', 'Кондиционер', 'Wi-Fi'];

const PublishTrip = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [passengerCount, setPassengerCount] = React.useState(1);
  const [transportType, setTransportType] = React.useState('');
  const [transportModel, setTransportModel] = React.useState('');
  const [departureTime, setDepartureTime] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [arrivalDistance, setArrivalDistance] = React.useState('');
  const [farePerPassenger, setFarePerPassenger] = React.useState('');
  const [amenities, setAmenities] = React.useState([]);

  const handlePublish = () => {
    axios
      .post('/api/trips', {
        from,
        to,
        date: selectedDate,
        passengers: passengerCount,
        transportType,
        transportModel,
        departureTime,
        duration,
        arrivalDistance,
        farePerPassenger,
        amenities,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAmenityClick = (amenity) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter((item) => item !== amenity));
    } else {
      setAmenities((prev) => [...prev, amenity]);
    }
  };

  const textFieldProps = isMdUp ? {} : { className: 'mobileInput' };

  return (
    <RootContainer component="section">
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mt: 4, mb: 4 }}>
        Опубликовать поездку
      </Typography>
      <form noValidate autoComplete="off">
        <Grid
          container
          spacing={2}
          justifyContent={isMdUp ? 'flex-start' : 'center'}
          alignItems="center"
          direction={isMdUp ? 'row' : 'column'}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Откуда"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Куда"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomDatePicker value={selectedDate} onChange={setSelectedDate} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Количество пассажиров"
              type="number"
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Тип транспорта"
              value={transportType}
              onChange={(e) => setTransportType(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Модель транспорта"
              value={transportModel}
              onChange={(e) => setTransportModel(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Время отправления"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Продолжительность"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Дистанция прибытия"
              value={arrivalDistance}
              onChange={(e) => setArrivalDistance(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Стоимость за 1го"
              value={farePerPassenger}
              onChange={(e) => setFarePerPassenger(e.target.value)}
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              Удобства:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', flexWrap: 'wrap' }}>
              {mockAmenities.map((amenity, index) => (
                <Chip
                  key={index}
                  label={amenity}
                  clickable
                  onClick={() => handleAmenityClick(amenity)}
                  color={amenities.includes(amenity) ? 'primary' : 'default'}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handlePublish}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Опубликовать
            </Button>
          </Grid>
        </Grid>
      </form>
    </RootContainer>
  );
};

export default withRoot(PublishTrip);
