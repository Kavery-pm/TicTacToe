import React, { useState } from 'react';

const initialSquares = Array(3).fill(null).map(() => Array(3).fill(null));

const GameBoard = ({onSelect, activePlayer}) => {
    const [gameBoard, setgameBoard]=useState(initialSquares);

    const handleSelectSquare = (rowIndex, colIndex) => {
        setgameBoard(prevBoard => {
            const newBoard = [...prevBoard.map(row => [...row])];
            newBoard[rowIndex][colIndex] = activePlayer; 
            return newBoard;
        });
        onSelect();
    }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                < li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <button key={colIndex} onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
};

export default GameBoard;