import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioIngreso from "./FormularioIngreso";
import NavBar from "./NavBar.jsx"; // Importa el componente NavBar
import VistaUsuario from "./VistaUsuario.jsx";

const App = () => {
  return (
    <Router basename="/barber_shop_booking_hub"> {/* Define el basename */}
        <NavBar /> {/* NavBar siempre presente */}
        
        <Routes>
          <Route path="/login" element={<FormularioIngreso />} />
          <Route path="/perfil" element={<VistaUsuario/> } />


          {/* Otras rutas de tu aplicación */}
        </Routes>
    </Router>
  );
};

export default App;


