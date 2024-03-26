import React from "react";
import "./FormularioIngreso.css"; // Archivo de estilos CSS personalizados
import { Link } from "react-router-dom";


const FormularioIngreso = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        onClose(); // Cierra el modal después de enviar el formulario
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">           
             <Link to="../">Iniciar sesión</Link>
            </button>
        </form>
    );
};

export default FormularioIngreso;

