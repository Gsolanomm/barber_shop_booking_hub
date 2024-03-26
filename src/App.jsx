import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioIngreso from "./FormularioIngreso";
import NavBar from "./NavBar.jsx"; // Importa el componente NavBar

const App = () => {
  return (
    <Router basename="/barber_shop_booking_hub"> {/* Define el basename */}
      <NextUIProvider>
        <NavBar /> {/* NavBar siempre presente */}
        </NextUIProvider>

        <Routes>
          <Route path="/login" element={<FormularioIngreso />} />
          {/* Otras rutas de tu aplicación */}
        </Routes>
    </Router>
  );
};

export default App;


