import React, { useState } from 'react';

function DatePicker({ onCitaSeleccionada }) {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onCitaSeleccionada({ fecha: newDate, hora: selectedTime });
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    onCitaSeleccionada({ fecha: selectedDate, hora: newTime });
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 16; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  return (
    <div className="date-picker-container">
      <h2>Selecciona una fecha:</h2>
      <input
        type="date"
        value={selectedDate}
        min={getCurrentDate()}
        onChange={handleDateChange}
      />
      {selectedDate && (
        <div>
          <h2>Selecciona una hora:</h2>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Seleccione una hora</option>
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedDate && selectedTime && (
        <p>Fecha y hora seleccionadas: {selectedDate} {selectedTime}</p>
      )}
    </div>
  );
}

export default DatePicker;
