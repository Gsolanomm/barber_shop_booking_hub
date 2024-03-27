import React from 'react';
import TarjetaImagen from './TarjetaImagen';
import ImagenComponente from './ImagenComponente';
import CarruselImagen from "./CarruselImagen.jsx";

const UserView = () => {
  return (
    <div className="user-view">
      <div className="user-view__container">
        <div className="user-view__card-container">
          <CarruselImagen />
        </div>
        <div className="user-view__image-container">
          <ImagenComponente />
        </div>
      </div>
      <style jsx>{`
        .user-view {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-image: url('https://institutoferrer.com/wp-content/uploads/2022/06/BARBERIA-scaled.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .user-view__container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          background-color: rgba(255, 255, 255, 0.5); /* Ajusta el valor alfa (0.3) para cambiar la transparencia */
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .user-view__card-container,
        .user-view__image-container {
            padding: 12px ;
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default UserView;
