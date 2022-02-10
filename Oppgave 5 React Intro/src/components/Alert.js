// 11. Combine the button and input
// When clicking the button above alert (or console.log)
// the content of the inputfield.

// 12. Refactor (move) button and input
// Create an Alert component in the components folder
// Use this in App.js
// Move the <input>, <button> and state from above to this component

// 13. Callback (lift state) (sending a functions as a prop)

// Add const [inputValue, setInputValue] = useState('') in App.js.
// Add <p>{inputValue}</p> to App.js
// Send setInputValue function as a prop to <Alert> from App.js.
// By using this prop you should be able to update the value of
// inputValue in App.js, when we are writing in the <input> inside <Alert>.
// You can now remove the internal in <Alert>.
import { useState } from 'react';

export default function Alert({ setInputValue, setisClicked, isClicked }) {
  // Klargjøre useState hook og setter default verdi
  const [value, setValue] = useState('');

  // En funksjon som trigger når vi oppdaterer input feltet
  const handleInputChange = (event) => {
    setValue(event.currentTarget.value);
    // console.log(event.target.value);
  };

  // Funksjon som trigger når vi trykker knappen
  const handleClick = () => {
    // console.log('Clicked');
    setInputValue(value);
    setisClicked(!isClicked);
  };

  return (
    <>
      <button onClick={handleClick}>Trykk meg!</button>
      <input value={value} onChange={handleInputChange} />
    </>
  );
}
