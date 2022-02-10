// Har Jobbet med  Stig

// Optional but very important
// 14. Multiple states (condition)
// Only show the content of inputValue when the button inside <Alert> is clicked.
// When clicking the button in <Alert> the value of inputValue should be what is
// written in the <input> inside the <Alert>.
// To do this you must have state (isClicked) in App.js that is updated when the
// button is clicked (true / false). The function that we use to update this state
// must be sent to <Alert> so we can update / read its value.
// Use conditional around the <p>{inputValue}</p> to only write out the message
// when the button is clicked. Remove the value if we click the button another time.

import MyComponent from './components/MyComponent';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Food from './components/Food';
import Alert from './components/Alert';
// import ClickEvent from './components/ClickEvent';
// import Input from './components/Input';
import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const [isClicked, setisClicked] = useState(false);
  console.log(isClicked);

  return (
    <div>
      <p>Read the README.md to see the tasks</p>
      <MyComponent />
      <Wrapper>
        <Title title="Test" />
      </Wrapper>
      <Food />
      {/* <ClickEvent />
    <Input /> */}
      <Alert
        setInputValue={setInputValue}
        isClicked={isClicked}
        setisClicked={setisClicked}
      />
      {/* <p>{inputValue}</p> */}
      {/* Sjekker om isClicked er sann, hvis det
      så skal inputValue skrives ut */}
      {isClicked === true ? <p>{inputValue}</p> : ''}
    </div>
  );
}
