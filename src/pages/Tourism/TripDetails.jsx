import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const TripDetails = () => {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    // Replace this with your actual API call or data fetching logic
    const fetchTripDetails = async () => {
      try {
        // Simulating an API call delay with setTimeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Placeholder data for trip details
        const tripData = {
          1: {
            date: 'Ср, 31 мая',
            departureTime: '17:00',
            duration: '8 ч 10',
            departureLocation: 'Савеловский вокзал, Москва',
            departureDistance: '4.7 км',
            arrivalTime: '01:10',
            arrivalLocation: 'станция метро "Купчино", Санкт-Петербург',
            arrivalDistance: '11 км',
            totalFare: '1 490,00 ₽',
            amenities: ['Максимум двое сзади', 'Мгновенное бронирование'],
            passengers: [
              { id: 1, name: 'Иванов Иван', rating: 4.5 },
              { id: 2, name: 'Петров Петр', rating: 4.2 },
            ],
          },
          2: {
            date: 'Ср, 31 мая',
            departureTime: '17:00',
            duration: '8 ч 10',
            departureLocation: 'Савеловский вокзал, Москва',
            departureDistance: '4.7 км',
            arrivalTime: '01:10',
            arrivalLocation: 'станция метро "Купчино", Санкт-Петербург',
            arrivalDistance: '11 км',
            totalFare: '1 490,00 ₽',
            amenities: ['Максимум двое сзади', 'Мгновенное бронирование'],
            passengers: [
              { id: 1, name: 'Иванов Иван', rating: 4.5 },
              { id: 2, name: 'Петров Петр', rating: 4.2 },
            ],
          },
          3: {
            date: 'Ср, 31 мая',
            departureTime: '17:00',
            duration: '8 ч 10',
            departureLocation: 'Савеловский вокзал, Москва',
            departureDistance: '4.7 км',
            arrivalTime: '01:10',
            arrivalLocation: 'станция метро "Купчино", Санкт-Петербург',
            arrivalDistance: '11 км',
            totalFare: '1 490,00 ₽',
            amenities: ['Максимум двое сзади', 'Мгновенное бронирование'],
            passengers: [
              { id: 1, name: 'Иванов Иван', rating: 4.5 },
              { id: 2, name: 'Петров Петр', rating: 4.2 },
            ],
          },
          // Add more trip details for different IDs here
        };

        // Set the trip details based on the ID parameter
        setTripDetails(tripData[id] || null);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    fetchTripDetails();
  }, [id]);

  if (!tripDetails) {
    // Render a message if the trip details are not available
    return (
      <Box sx={{ mt: 4, mb: 4 }} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4, mb: 4 }} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{ mt: 4, mb: 4 }}>
        Подробности поездки
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Детали поездки</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Дата" secondary={tripDetails.date} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Время отправления" secondary={tripDetails.departureTime} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Длительность" secondary={tripDetails.duration} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Место отправления"
                  secondary={tripDetails.departureLocation}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Расстояние до места отправления"
                  secondary={tripDetails.departureDistance}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Время прибытия" secondary={tripDetails.arrivalTime} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Место прибытия" secondary={tripDetails.arrivalLocation} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Расстояние до места прибытия"
                  secondary={tripDetails.arrivalDistance}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Информация о поездке</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Итого за 1 пассажира" secondary={tripDetails.totalFare} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Удобства" secondary={tripDetails.amenities.join(', ')} />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Пассажиры</Typography>
            <List>
              {tripDetails.passengers.map((passenger) => (
                <React.Fragment key={passenger.id}>
                  <ListItem>
                    <ListItemText
                      primary={passenger.name}
                      secondary={`Рейтинг: ${passenger.rating}`}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TripDetails;
