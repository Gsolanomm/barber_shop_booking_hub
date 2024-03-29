import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import './VistaClientes.css'; // Importa el CSS local

const VistaClientes = () => {
    const [name, setNombre] = useState('');
    const [lastName, setApellido] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (password !== confirmPassword) {
        //     alert('Las contraseñas no coinciden');
        //     return;
        // }
        // // Create a new object with the information
        // const newClient = {
        //     name,
        //     lastName,
        //     email,
        //     password,    
        // };
        // // Save the new client in the array  
        
    };

    
    return (
        <div className="container"> 
            
            <h2 className='main-title'>Crear cuenta</h2>
            <form className='formularioClientes' onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nombre" placeholder='' value={name} onChange={(e) => setNombre(e.target.value)} required />
                    <label htmlFor="nombre">Nombre</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="apellido" placeholder='' value={lastName} onChange={(e) => setApellido(e.target.value)} required />
                    <label htmlFor="apellido">Apellido</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="correo" placeholder='' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="correo">Correo</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="telefono" placeholder='' required />
                    <label htmlFor="telefono">Teléfono</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="contrasena" placeholder='' required/>
                    <label htmlFor="contrasena">Contraseña</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="confirmarContrasena" placeholder='' required />
                    <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="publicidad" required />
                    <label className="form-check-label" htmlFor="publicidad">
                        Acepto recibir publicidad
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
                <br/>
                
                <p>Al crear cuenta, aceptas las condiciones de uso<a href="XD"> Condiciones de uso</a> y <a href="XD">Notificaciones de Privacidad</a></p>

            </form>
        </div>
        
    );
};

export default VistaClientes;
