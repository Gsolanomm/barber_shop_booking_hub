import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import FormularioIngreso from "./FormularioIngreso";
import NavBar from "./NavBar.jsx"; // Importa el componente NavBar
import VistaUsuario from "./VistaUsuario.jsx";
import VistaCategoria from "./VistaCategorias.jsx";
import Footer from "./Footer.jsx";
import VistaPrincipal from "./VistaPrincipal.jsx";
import CrearCuenta from "./CrearCuenta.jsx"
import RegistroCliente from "./RegistroCliente.jsx";

import Membresias from "./Membresias.jsx"; 
import CarritoDeCompras from "./CarritoDeCompras.jsx"; 

import Citas from "./Citas.jsx"; // Importa el componente de citas
import Productos from "./Productos.jsx";
import Cliente from "./Cliente.jsx";


  const data = [
    {
      src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
      title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
      channel: 'Don Diablo',
      views: '396k views',
      createdAt: 'a week ago',
    },
    {
      src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
      title: 'Queen - Greatest Hits',
      channel: 'Queen Official',
      views: '40M views',
      createdAt: '3 years ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
    {
      src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
      title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
      channel: 'Calvin Harris',
      views: '130M views',
      createdAt: '10 months ago',
    },
  ];


const App = () => {
  return (
    <Router basename="/barber_shop_booking_hub"> {/* Define el basename */}


        <NavBar /> {/* NavBar siempre presente */}
        
        <Routes>
          <Route path="/" element={<VistaPrincipal />} />
          <Route path="/login" element={<FormularioIngreso />} />
          <Route path="/perfil" element={<VistaUsuario/> } />
          <Route path="/inscribirse" element={<CrearCuenta/> } />
          <Route path="/cuenta" element={<VistaCategoria data={data} loading={false}/> } />


          <Route path="/citas" element={<Citas />} />
          <Route path="/productos" element={<Productos />} />
         
          <Route path="/registrocliente" element={<RegistroCliente/> } />
          
          <Route path="/membresias" element={<Membresias/> } />
          <Route path="/carritoDeCompras" element={<CarritoDeCompras/> } />
   
          <Route path="/registrocliente" element={<RegistroCliente/> } />
          <Route path="/clientesXD" element={<Cliente/> } />
    
          


          
        


          {/* Otras rutas de tu aplicación */}
        </Routes>


        <HomeButton />

        <Footer/>

       

     
    </Router>
  );
};

const HomeButton = () => {
  const location = useLocation();

  // Verifica si la ubicación actual coincide con la ruta base
  if (location.pathname === "/") {
    return (
      <center>
        <div style={{ backgroundColor: 'white' }}>
          <Link to="/citas">
            <button id="dates"
              style={{ backgroundColor: '#DA1212', color: 'white', borderRadius: '5px', marginTop: '10px', marginBottom:'10px' }}
            >
              Agendar citas
            </button>
          </Link>
        </div>
      </center>
    );
  } else {
    return null; // Si no es la ruta base, no se renderiza el botón
  }
};

export default App;





