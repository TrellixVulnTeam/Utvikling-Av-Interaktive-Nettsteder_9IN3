// 9. Input
// Add an input field to App.js
// Listen to change-event on this field
// console.log("change") when writing in this input.

// 10. Make the input field controlled (state)
// Use useState to store the input value. And add the value={state}
// to the input field to make it (controlled).

import { useState } from 'react';

export default function Input() {
  // Klargjøre useState hook og setter default verdi
  const [value, setValue] = useState('');

  // En funksjon som trigger når vi oppdaterer input feltet
  const handleChange = (event) => {
    setValue(event.currentTarget.value);
    console.log(event.target.value);
  };

  return <input value={value} onChange={handleChange} />;
}
