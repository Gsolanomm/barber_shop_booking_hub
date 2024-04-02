import React from 'react';
import './CarritoDeCompras.css';

function CarritoDeCompras() {
  return (
    <div className="carrito-de-compras-container">
      <div className="carrito-de-compras-section">
        <div className="container">
          <h1><p style={{ textAlign: 'center', fontWeight: 'bold' }}></p>producto 1</h1>
        </div>
        <div className="container">
          <h1><p style={{ textAlign: 'center', fontWeight: 'bold' }}></p>producto 2</h1>
        </div>
        <div className="container">
          <h1><p style={{ textAlign: 'center', fontWeight: 'bold' }}></p>producto 3</h1>
        </div>
      </div>
    </div>
  );
}

export default CarritoDeCompras;
