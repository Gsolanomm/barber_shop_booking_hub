import React from 'react';
import SignUp from './CrearCuenta'; // Ruta al archivo de CrearCuenta
import AdditionalFields from './Cliente'; // Ruta al archivo de Cliente

function MyComponent() {
    const additionalComponents = [SignUp];
    
    return (
      <AdditionalFields additionalComponents={additionalComponents} />
    );
  }
  
  export default MyComponent;