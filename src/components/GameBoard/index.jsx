import React, { useState } from 'react';



const GameBoard = ({ onSelectSquare, board }) => {

    
    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => (
                < li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <button key={colIndex} onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
};

export default GameBoard;