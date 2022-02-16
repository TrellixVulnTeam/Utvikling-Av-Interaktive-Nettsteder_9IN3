import PlayerForm from "./components/PlayerForm";

export default function App() {
  const addPlayer = (event) => {
    console.log('addPlayer');
  }

  return (
        <>
        {/* Skjuler skjema når vi har trykket 'Start Game' - applikasjonen har staratet
        onSubmit (prop fra App.js) trigges når vi klikker på 'start game' */}
            <form onSubmit={initGame}>
            <label htmlFor="playerOne">Add player one</label>
            <input 
            name="playerOne"
            id="playerOne"
            type="text" 
            value={players.playerOne}
            onChange={addPlayer}
            />
            <label htmlFor="playerTwo">Add player two</label>
            {/* onChange trigges når vi skriver i inputen. Trigger addPlayer som kommer
            som prop fra App.js
            value peker til 'players i App.js som er et objekt vi får som prop */}
            <input 
            name="playerTwo"
            id="playerTwo"
            type="text" 
            value={players.playerTwo}
            onCahnge={addPlayer}
            />
            <button type="submit" disbled={isDisabled}>
                Start game
            </button>
        </form>
        </>
  );
}

