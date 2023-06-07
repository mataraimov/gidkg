import React, { useEffect, useState } from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';
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
// import MarkedYMap from '../../modules/components/MarkedYMap';

const CreateBusiness = () => {
  // const [name, setName] = useState('');
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  // const [image, setImage] = useState('');
  // const [categoryId, setCategoryId] = useState('');
  // const [description, setDescription] = useState('');

  const [coord, setCoord] = useState([0,0]);

  const [formData, setFormData] = useState({
    name: "",
    latitude: "",
    longitude: "",
    image: "",
    categoryId: "1",
    description: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  function handleMapClick(e) {
    const coords = e.get('coords');
    setCoord(coords);
    console.log(coords);
  }
  useEffect(() => {
    if (coord) {
      setFormData({
        ...formData,
        latitude: coord[0],
        longitude: coord[1],
      });
    }
  }, [coord]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    // try {
    //   let response = await axios.post('https://url/', formData, {
    //   })
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
      
    //   console.log(response.data, "response data");
      
    //   // console.log(formData);
    //   } catch (error) {
    //     console.error(error, "woooooww");
    //   }
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
            value={formData.name}
            name='name'
            // onChange={(e) => setName(e.target.value)}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          {/* <MarkedYMap /> */}
          <YMaps query={{apikey: '4d02f53f-dd31-4ac9-8afc-5e7f3acfa620'}} width='100%'>
            <div style={{ height: '300px', width: '100%' }}>
              <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} style={{ width: '100%', height: '100%' }} onClick={handleMapClick}>
                {coord && (
                  <Placemark
                    geometry={coord}
                    options={{ draggable: true }}
                    modules={['geoObject.addon.balloon']}
                    properties={{
                      balloonContentBody: `${coord}`
                    }}
                  />
                )}
              </Map>
            </div>
          </YMaps>
          <input type="text" readOnly required name="latitude" value={coord[0]} />
          <input type="text" readOnly required name="longitude" value={ coord[1]} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Изображение"
            value={formData.image}
            name='image'
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Категория</InputLabel>
            <Select
              value={formData.categoryId}
              onChange={handleInputChange}
              required
            >
              <MenuItem value={formData.categoryId}>Категория 1</MenuItem>
              {/* <MenuItem value="2">Категория 2</MenuItem>
              <MenuItem value="3">Категория 3</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Описание"
            multiline
            rows={4}
            value={formData.description}
            name='description'
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
}

export default CreateBusiness