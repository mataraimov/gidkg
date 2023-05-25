import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '../modules/components/Typography';
import withRoot from '../modules/withRoot';

function Terms() {
  return (
    <React.Fragment>
      <Container>
        <Box component="section" sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}>
          <Container sx={{ mt: 15, mb: 30, position: 'relative' }}>
            <Typography variant="h3" marked="center" component="h2" sx={{ mb: 14 }}>
              Условия использования
            </Typography>

            <Typography variant="h5">
              Добро пожаловать на Kyrgyzstan Tourism! Этот сайт предоставляет свои услуги вам
              согласно следующим условиям. Если вы посещаете или используете этот сайт, вы
              принимаете эти условия. Пожалуйста, внимательно прочитайте их.
            </Typography>

            <Typography variant="h6" sx={{ my: 5 }}>
              Описание услуги
            </Typography>
            <Typography variant="h5">
              Мы предоставляем пользователям информацию о туристических местах и предложениях в
              Кыргызстане. Кроме того, предприниматели могут зарегистрировать свои туристические
              точки на нашем сайте.
            </Typography>

            <Typography variant="h6" sx={{ my: 5 }}>
              Права на контент
            </Typography>
            <Typography variant="h5">
              Весь контент на этом сайте, включая текст, графику, логотипы, кнопки, изображения и
              программное обеспечение, является собственностью Kyrgyzstan Tourism или его
              поставщиков контента и защищен законами об авторских правах.
            </Typography>

            <Typography variant="h6" sx={{ my: 5 }}>
              Правила поведения на сайте
            </Typography>
            <Typography variant="h5">
              При использовании сайта запрещается размещать нелегальный, обманчивый, угрожающий,
              клеветнический, порнографический или другой материал, который нарушает чьи-либо права.
            </Typography>

            <Typography variant="h6" sx={{ my: 5 }}>
              Изменения в условиях использования
            </Typography>
            <Typography variant="h5">
              Мы оставляем за собой право вносить изменения в наш сайт, политику и эти условия
              использования в любое время. Если какое-либо из этих условий будет признано
              недействительным, недействующим или по любой причине невыполнимым, это условие
              считается отделенным и не влияет на действительность и применимость оставшихся
              условий.
            </Typography>
          </Container>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default withRoot(Terms);
