import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const AdditionalFields = ({ additionalComponents }) => (
  <>
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        autoComplete="new-password"
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        id="phoneNumber"
        autoComplete="tel"
      />
    </Grid>
    {/* Renderiza los componentes adicionales recibidos como parámetro */}
    {additionalComponents && additionalComponents.map((Component, index) => (
      <Grid item xs={12} key={index}>
        <Component />
      </Grid>
    ))}
  </>
);

export default AdditionalFields;
