import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQv-2wv7OjwgQYg6-tiA8mBTPNqYqnvenlVdYa-hfng7a10ZotT&s',
    title: 'Горные пейзажи',
    width: '40%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcS_VlOphLe12DG_yp9LO_ZPG5dgKeRtt64OglyGtBMFqAy973U&s',
    title: 'Экскурсии',
    width: '20%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRRzXoUGfzKggV59-2LpMr4CYMZoHnYpUJ2Q_jL8I5QBiRWTIbe&s',
    title: 'Культурные мероприятия',
    width: '40%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRyjghTIVCiHgoGdjh8HRKcdijmOhi3t8jH4-OGX37BThAz2F8&s',
    title: 'Конные прогулки',
    width: '38%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTQfZTMUHFjOiciLBQlpmrCA1QM6jbMYd8ms_RHOayaY43W7JUv&s',
    title: 'Национальная кухня',
    width: '38%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcR484gqEGzz-1zriWcLwdR4EnzHBNrGte49hRmVm6CIOczqlqI&s',
    title: 'Шоппинг',
    width: '24%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQ22dknmL1KuQDfOXraikaiCos9srVWi67gzUrL2hEohx44rrlG&s',
    title: 'Пешие прогулки',
    width: '40%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcR7C0wiq1o4NOsyqIDcliiqFNFa4T9m7Zmv7p3qI2atE1t_cMvh&s',
    title: 'Спорт и фитнес',
    width: '20%',
  },
  {
    url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTazkMDMTQL6Z9RMZU-1sklKphJ8k3vPceAua-Bu_SCy3hRJcBO&s',
    title: 'Спа и массаж',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Разнообразие для каждого и всех желаний
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography component="h3" variant="h6" color="inherit" className="imageTitle">
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
