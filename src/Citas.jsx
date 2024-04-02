import React from "react";
import ImagenComponente from "./ImagenComponente.jsx";
import DatePicker from "./DatePicker.jsx";
import { Link } from "react-router-dom";

class Citas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citas: [] // Un array para almacenar las citas
    };
  }

  render() {
 

    return (
      <div style={{ backgroundColor: 'white' }}>
        <center>
          
          <DatePicker />
          <Link to="/">
            <button style={{ backgroundColor: '#DA1212', color: 'white', borderRadius: '5px', marginTop: '20px' }}>Agendar cita</button>
          </Link>
        </center>
      </div>
    );
  }
}

export default Citas;
