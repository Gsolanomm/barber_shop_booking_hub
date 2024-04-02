import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
}));

const IngresoCliente = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
    };

    return (
        <Container className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button variant="contained" type="submit">
                    Iniciar sesión
                </Button>
            </form>
        </Container>
    );
};

export default IngresoCliente;