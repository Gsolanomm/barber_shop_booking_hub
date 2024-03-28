import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';
import TarjetaImagen from './TarjetaImagen'; // Importa el componente TarjetaImagen

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableCardCarousel({ images, carouselWidth, carouselHeight }) { // Recibe el vector de imágenes, ancho y alto del carrusel como props
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [newImages, setNewImages] = React.useState([]); // Estado para almacenar las nuevas imágenes

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleAddImages = () => {
    // Simplemente como ejemplo, aquí puedes implementar la lógica para que el usuario agregue imágenes
    const newImageUrls = [
      {
        label: 'New Image 1',
        imgPath: 'https://via.placeholder.com/400',
        description: 'Description for New Image 1'
      },
      {
        label: 'New Image 2',
        imgPath: 'https://via.placeholder.com/400',
        description: 'Description for New Image 2'
      },
    ];
    setNewImages(newImageUrls);
  };

  const allImages = [...images, ...newImages]; // Combinar imágenes originales con nuevas imágenes

  return (
    <Box sx={{ maxWidth: carouselWidth, flexGrow: 1 }}>
      {/* Establecer el ancho máximo y el alto del carrusel */}
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{allImages[activeStep].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ height: carouselHeight }} 
      >
        {allImages.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <TarjetaImagen
                image={step.imgPath}
                title={step.label}
                description={step.description}
                carouselWidth={carouselWidth} // Pasar el ancho del carrusel como prop a la tarjeta
                carouselHeight={carouselHeight} // Pasar el alto del carrusel como prop a la tarjeta
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={allImages.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === allImages.length - 1}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
      <Box sx={{ textAlign: 'center', marginTop: 2 }}>
        <Button variant="contained" onClick={handleAddImages}>
          Agregar Imágenes
        </Button>
      </Box>
    </Box>
  );
}

export default SwipeableCardCarousel;
