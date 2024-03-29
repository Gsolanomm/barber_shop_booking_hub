import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>© 2024 Barber Shop. Todos los derechos reservados.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
