import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap




const VistaClientes = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a una API o guardarlos en una base de datos
        // Por ahora, solo los mostramos en la consola
        console.log('Form submitted:', { nombre, apellido, email, telefono });
    };

    return (
        <div>
            <h1>Customer Registration</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">First Name:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="apellido">Last Name:</label>
                <input
                    type="text"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="telefono">Phone Number:</label>
                <input
                    type="tel"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default VistaClientes;   // Exporta el componente para poder ser utilizado en otros archivos