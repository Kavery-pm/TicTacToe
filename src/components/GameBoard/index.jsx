import React from 'react';

const initialSquares = Array(3).fill(null).map(() => Array(3).fill(null));

const GameBoard = () => {
    return (
       <ol id='game-board'>
        {initialSquares.map((row, index) => (
            <li key={index} >
                <ol>
                   {row.map((playerSymbol,cellIndex)=>(
                          <li key={cellIndex} className="cell"><button>{playerSymbol}</button></li>
                   ))} 
                </ol>
            </li>
        ))}
       </ol>
    );
};

export default GameBoard;