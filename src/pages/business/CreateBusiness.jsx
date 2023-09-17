import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
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
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const CreateBusiness = () => {
  const [coord, setCoord] = useState([42.87, 74.59]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    latitude: '42.8746',
    longitude: '74.5698',
    category_id: '',
    image: null,
    description: '',
    user_id: '1',
  });
  const [categories, setCategories] = useState([]);
  const YANDEX_API_KEY = 'bf926d03-993e-4625-916e-6280dcbc2248';
  const YANDEX_GEOCODER_API = `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_API_KEY}&format=json&geocode=`;
  const addressInputRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'http://mataraimov.pythonanywhere.com/api/place/category_list/',
        );
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMapClick = (e) => {
    const coords = e.get('coords');
    setCoord(coords);
    setFormData((prevData) => ({
      ...prevData,
      latitude: coords[1].toString(),
      longitude: coords[0].toString(),
    }));
    setAddressByCoordinates(coords);
  };

  const setAddressByCoordinates = async (coords) => {
    try {
      const response = await axios.get(`${YANDEX_GEOCODER_API}${coords[1]},${coords[0]}`);

      const address =
        response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
          .GeocoderMetaData.text;
      setFormData((prevData) => ({
        ...prevData,
        address: address,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddressSearch = async () => {
    const address = formData.address;
    try {
      const response = await axios.get(`${YANDEX_GEOCODER_API}${encodeURIComponent(address)}`);

      const coordinates =
        response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      setCoord([parseFloat(coordinates[1]), parseFloat(coordinates[0])]);
      setFormData((prevData) => ({
        ...prevData,
        latitude: coordinates[1],
        longitude: coordinates[0],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await axios.post(
        'http://mataraimov.pythonanywhere.com/api/place/place_create/',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ width: '700px', margin: '0 auto', marginTop: '50px' }}>
      <form onSubmit={handleSubmit} width="500px">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Имя"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <YMaps>
              <div style={{ height: '300px', width: '100%' }}>
                <Map
                  defaultState={{ center: coord, zoom: 14 }}
                  style={{ width: '100%', height: '100%' }}
                  onClick={handleMapClick}
                >
                  <Placemark geometry={coord} options={{ draggable: true }} />
                </Map>
              </div>
            </YMaps>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Адрес"
              value={formData.address}
              name="address"
              onChange={handleInputChange}
              required
              fullWidth
              inputRef={addressInputRef}
            />
            <Button onClick={handleAddressSearch}>Поиск</Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="file"
              label="Изображение"
              InputLabelProps={{ shrink: true }}
              onChange={handleImageUpload}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Категория</InputLabel>
              <Select
                value={formData.category_id}
                name="category_id"
                onChange={handleInputChange}
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Описание"
              multiline
              rows={4}
              value={formData.description}
              name="description"
              onChange={handleInputChange}
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
};

export default CreateBusiness;
