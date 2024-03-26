import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Archivo de estilos CSS personalizados

 function NavBar() {
  return (
    <Navbar className="custom-navbar">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">Barber Shop Booking Hub</p>
      </NavbarBrand>
      <NavbarContent className="navBar-content" justify="center">
        <NavbarItem className="navBar-item">
          <Link  to="#">
            Generación de citas
          </Link>
        </NavbarItem>
        <NavbarItem className="navBar-item">
          <Link to="#">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem className="navBar-item">
          <Link to="#">
            Categorías
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          <Link to="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button  color="primary" variant="flat">
            Sign up            
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;

