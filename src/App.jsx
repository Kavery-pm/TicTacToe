import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

const derviveActivePlayer = (turns) => {
 let activePlayer = 'X';
 if(turns.length>0 && turns[0].player === 'X'){
    activePlayer = 'O';
 }
 return activePlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derviveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    
    setGameTurns((prevTurns) => {
      derviveActivePlayer(prevTurns);
      const currentPlayer = activePlayer;

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;