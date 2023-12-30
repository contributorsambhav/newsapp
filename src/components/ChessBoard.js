import React from 'react';
import './ChessBoard.css';

const ChessBoard = () => {
  // Function to generate the chess board squares
  const renderSquares = () => {
    const squares = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isDarkSquare = (row + col) % 2 === 1;
        const squareColor = isDarkSquare ? 'dark' : 'light';

        squares.push(
          <div
            key={`${row}-${col}`}
            className={`square ${squareColor} ${String.fromCharCode(65 + col)} ${8-row}`}

          >
            {`${String.fromCharCode(65 + col)}${8-row}`}

          </div>
        );
      }
    }

    return squares;
  };

  return (
    <div className="chess-board">
      {renderSquares()}
    </div>
  );
};

export default ChessBoard;
