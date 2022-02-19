import { useState } from "react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (board) => {
  for (const combination of winningCombinations) {
    const [first, second, third] = combination;
    if (
      board[first] &&
      board[first] === board[second] &&
      board[first] === board[third]
    ) {
      return {
        winner: board[first],
        winningSquares: [first, second, third],
      };
    }
  }
  return {
    winner: null,
    winningSquares: [],
  };
};

const initialBoard = Array(9).fill(null);

export default function App() {
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState({ playerOne: "", playerTwo: "" });
  const [board, setBoard] = useState(initialBoard);
  const { winner, winningSquares } = calculateWinner(board);
  const [started, setStarted] = useState(false);

  const nextPlayer =
    player === players.playerOne ? players.playerTwo : players.playerOne;

  // Funksjon som legger til ny spiller
  const addPlayer = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    // console.log(inputName, inputValue);
    setPlayers((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  // Sjekker om det står noe i input i playerone og playertwo
  const isDisabled = () => !players.playerOne || !players.playerTwo;

  // Lager handleClick
  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    } else {
      const boardStatus = [...board];
      // console.log(boardStatus)
      boardStatus[index] = player;
      // console.log(boardStatus)
      setBoard(boardStatus);
      setPlayer(nextPlayer);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setStarted(true);
    setPlayer(Object.values(players)[Math.floor(Math.random(0, 1) * 2)]);
  };

  // Funksjon for å starte spillet
  const initGame = (event) => {
    event.preventDefault();
    setStarted(true);
    setPlayer(Object.values(players)[Math.floor(Math.random(0, 1) * 2)]);
  };

  return (
    <>
      {!started ? (
        <form onSubmit={initGame}>
          {/* Legge til spiller 1 */}
          <label htmlFor="playerOne">Add player one</label>
          <input
            name="playerOne"
            id="playerOne"
            text="text"
            value={players.playerOne}
            onChange={addPlayer}
          ></input>

          {/* Legge til spiller  */}
          <label htmlFor="playerTwo">Add player two</label>
          <input
            name="playerTwo"
            id="playerTwo"
            text="text"
            value={players.playerTwo}
            onChange={addPlayer}
          ></input>
          <button type="submit" disabled={isDisabled}>
            Start Game
          </button>
        </form>
      ) : null}

      <section>
        <p>Current player {player}</p>
        {board?.length > 0 ? (
          <ul id="board">
            {board.map((item, index) => (
              <li className="square" key={index}>
                <button
                  className=""
                  type="button"
                  onClick={() => handleClick(index)}
                >
                  {item || index}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      {winner ? (
        <section>
          <p>
            Congratulation {winner} with the {winningSquares} combination
          </p>
          <button type="button" onClick={resetGame}>
            New Game
          </button>
        </section>
      ) : null}
    </>
  );
}
