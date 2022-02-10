// 8. Event
// Add a <button> to App.js
// Listen to click-event on this button.
// console.log("Clicked") when clicking the button.

export default function ClickEvent() {
  function handleClick(event) {
    // Skriver ut clicked i consollen ved klikk på knappen
    // console.log('Clicked');
  }

  return <button onClick={handleClick}>Trykk meg!</button>;
}
