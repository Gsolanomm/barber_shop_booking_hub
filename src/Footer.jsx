import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import logo from './imagenes/Logo2.jpeg'; // Importa la imagen del logo
import Avatar from '@mui/material/Avatar';


function Footer() {
  return (
    <footer className="footer text-white py-3" style={{ backgroundColor: '#DA1212' }}> {/* Cambio aquí */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Avatar src={logo} alt="Logo" sx={{ width: 120, height: 120 }}
            /> {/* Cambio aquí */}
          </div>
          <div className="col-md-6 text-md-right">
            <p>© 2024 Barber Shop. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
