import React from 'react';
import './Membresias.css';
import imagenCobre from './imagenes/cobre.jpg';
import imagenPlata from './imagenes/plata.jpg';
import imagenOro from './imagenes/oro.jpg';

function App() {
  return (
    <div className="app">
      
      <div className="container" style={{ textAlign: 'center' }}>
        <img src={imagenCobre} alt="cobre" style={{ width: '50%', height: 'auto' }} />
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'cursive' }}>Basic</p>
        <h1><p style={{ textAlign: 'center', fontWeight: 'bold' }}></p>$10</h1>
        <ul className="membership-list">
          <li>Descripción básica 1</li>
          <li>Descripción básica 2</li>
          <li>Descripción básica 3</li>
        </ul>
        <button className="obtener-button basic-color">Obtener</button>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <img src={imagenPlata} alt="plata" style={{ width: '50%', height: 'auto' }} />
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'cursive' }}>Pro</p>
        <h1><p style={{ textAlign: 'center', fontWeight: 'bold' }}></p>$20</h1>
        <ul className="membership-list">
          <li>Descripción pro 1</li>
          <li>Descripción pro 2</li>
          <li>Descripción pro 3</li>
        </ul>
        <button className="obtener-button pro-color">Obtener</button>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <img src={imagenOro} alt="oro" style={{ width: '50%', height: 'auto' }} />
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'cursive' }}>Premier</p>
        <h1><p style={{ textAlign: 'center', fontWeight: 'bold' }}></p>$30</h1>
        <ul className="membership-list">
          <li>Descripción premier 1</li>
          <li>Descripción premier 2</li>
          <li>Descripción premier 3</li>
        </ul>
        <button className="obtener-button premier-color">Obtener</button>
      </div>
    </div>
  );
}

export default App;