import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function TarjetaImagen({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image} // Utiliza la propiedad 'image' pasada como parámetro
          alt={title} // Utiliza el título como alt de la imagen
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} {/* Utiliza el título pasado como parámetro */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description} {/* Utiliza la descripción pasada como parámetro */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default TarjetaImagen;
