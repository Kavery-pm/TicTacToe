import React, { useState } from 'react';

const initialSquares = Array(3).fill(null).map(() => Array(3).fill(null));

const GameBoard = ({ onSelectSquare, turns }) => {

    let gameBoard = initialSquares
    for (const turn of turns) {

        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
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