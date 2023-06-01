import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
} from '@mui/material';

const CreateBusiness = () => {
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Добавьте здесь логику обработки отправки формы
    // Например, вызов API или отправка данных на сервер
  };
  
  return (
    <Box sx={{
      width: '700px',
      margin: '0 auto',
      marginTop: '50px',
    }}>
    <form onSubmit={handleSubmit} width='500px'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Долгота"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Широта"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Изображение"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Категория</InputLabel>
            <Select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <MenuItem value="1">Категория 1</MenuItem>
              <MenuItem value="2">Категория 2</MenuItem>
              <MenuItem value="3">Категория 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Описание"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
        </Grid>
      </Grid>
    </form>
    </Box>
  );
}

export default CreateBusiness