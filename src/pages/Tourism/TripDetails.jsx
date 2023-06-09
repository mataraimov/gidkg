import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const TripDetails = () => {
  const { id } = useParams();
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/transport/detail/${id}`);
        setTripDetails(response.data);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    fetchTripDetails();
  }, [id]);

  if (!tripDetails) {
    return (
      <Box sx={{ mt: 4, mb: 4 }} component="section">
        <Typography variant="h4" marked="center" align="center" component="h2">
          Загрузка...
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
                <ListItemText primary="Время отправления" secondary={tripDetails.departure_times} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Длительность" secondary={tripDetails.duration} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Место отправления" secondary={tripDetails.where_from} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Место прибытия" secondary={tripDetails.where_to} />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Информация о поездке</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Итого за 1 пассажира" secondary={`${tripDetails.price} ₽`} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Тип транспорта" secondary={tripDetails.type_of_transport} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Модель транспорта"
                  secondary={tripDetails.model_of_transport}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TripDetails;
