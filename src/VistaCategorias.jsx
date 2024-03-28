import React, { useState } from 'react';
import CarruselImagen from './CarruselImagen';
import CustomizedMenus from './MenuCategorias';

const VistaCategorias = () => {
  const [categoria, setCategoria] = useState('Mullet'); // Estado para almacenar la categoría seleccionada

  // Función para manejar el cambio de categoría
  const handleCategoriaChange = (newCategoria) => {
    setCategoria(newCategoria);
  };

  // Definir los vectores de imágenes para cada categoría
  const categorias = {
    Mullet: [
      {
        label: 'Mullet 1',
        imgPath: 'https://i.pinimg.com/736x/82/df/4a/82df4aebc4ba5e4e34b1a2c9fee1584f.jpg',
        description: 'Descripción de la imagen 1',
      },
      {
        label: 'Mullet 2',
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61uwKKeqlH5kbJjOyuMX1veUqqpFGGwkxpZi82CMZWg&s',
        description: 'Descripción de la imagen 2',
      },
      // Agrega más imágenes según sea necesario
    ],
    FadeUp: [
      {
        label: 'FadeUp 1',
        imgPath: 'https://i.pinimg.com/736x/46/9b/aa/469baa3004b218ca7129a2cb615ba0d9.jpg',
        description: 'Descripción de la imagen 1',
      },
      {
        label: 'FadeUp 2',
        imgPath: 'https://menshaircuts.com/wp-content/uploads/2022/04/fade-haircut-types-shadow-short-brushed-up-683x1024.jpg',
        description: 'Descripción de la imagen 2',
      },
      // Agrega más imágenes según sea necesario
    ],
    Buzzcut: [
      {
        label: 'Buzzcut 1',
        imgPath: 'https://i.pinimg.com/736x/9c/77/dd/9c77ddacdac0845ea7a2045c80be4552.jpg',
        description: 'Descripción de la imagen 1',
      },
      {
        label: 'Buzzcut 2',
        imgPath: 'https://i.pinimg.com/736x/ac/46/f1/ac46f1487979f7116fe1949b31f5343d.jpg',
        description: 'Descripción de la imagen 2',
      },
      // Agrega más imágenes según sea necesario
    ],
    Mohicano: [
      {
        label: 'Mohicano 1',
        imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtC2MzwJtlJkvIDPnt5jOabOsLzRE9nHgmfch8C_8-rA&s',
        description: 'Descripción de la imagen 1',
      },
      {
        label: 'Mohicano 2',
        imgPath: 'https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/11/2023/08/65862/corte-cubano-hombre.jpg',
        description: 'Descripción de la imagen 2',
      },
      // Agrega más imágenes según sea necesario
    ],
  };

  return (
    <div className="vista-categorias" style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/herramientas-de-barbershop-en-un-fondo-negro-sin-fisuras-gr%C3%A1ficos-vectoriales-problemas-162446998.jpg")' }}>
      <CustomizedMenus handleCategoriaChange={handleCategoriaChange} /> {/* Menú de opciones */}
      <div className="carrusel-imagen">
        {/* Carrusel de imágenes */}
        <CarruselImagen images={categorias[categoria]} carouselWidth={500} carouselHeight={500} />
      </div>
      <style jsx>{`
        .vista-categorias {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%; /* Ajustar al ancho completo del contenedor */
          height: 100vh; /* Establecer la altura como el 100% del viewport */
          background-size: cover; /* Ajustar la imagen de fondo para cubrir el contenedor */
          background-position: center; /* Centrar la imagen de fondo */
          background-repeat: no-repeat; /* Evitar la repetición de la imagen de fondo */
        }
        .carrusel-imagen {
          width: 90%; /* Ajusta el ancho según tus necesidades */
          margin-top: 20px; /* Espacio superior */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default VistaCategorias;
