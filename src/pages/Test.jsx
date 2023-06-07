import React, {useEffect, useState} from 'react';
import Card from '../modules/components/Card'
import { Grid } from '@mui/material';

const Test = () => {
  const [fav, setFav] = useState([])
  const businesses = [
    {
      id: 1,
      title: 'Бизнес 1',
      description: 'Краткая информация о бизнесе 1',
      rating: 4,
      image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg',
    },
    {
      id: 2,
      title: 'Бизнес 2',
      description: 'Краткая информация о бизнесе 2',
      rating: 5,
      image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg',
    },
    {
      id: 3,
      title: 'Бизнес 3',
      description: 'Краткая информация о бизнесе 3',
      rating: 3,
      image: 'https://i.pinimg.com/originals/58/64/7c/58647cb780f1d3de706285e5683b1f0c.jpg',
    },
  ];
  
  const handleFav = (id) => {
    console.log("the id of product: ", id);
    setFav([...fav, id])
    // fav.filter(id != id)
  }
  const seeFav = () => {
    console.log(fav);
  }
  return (
    <>
      page for testing web components

      <Grid container spacing={2}>
        {
          businesses.map((item,index) => (
              <Card item={item} key={index} func={handleFav} />
          
          ))
        }
        <button onClick={seeFav}>click me!</button>
      </Grid>
    </>
  );
};

export default Test;
