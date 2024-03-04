import React, { useEffect, useState } from "react";
import ChessCell from "../cell/cell";
import { isPieceCell, getStartingPosition } from "../utils/utils";
import "./board.scss";

const ChessBoard = () => {
  const rows = 8;
  const cols = 8;
  const [chessBoard, setChessBoard] = useState([]);
  const [selectedCell, setSelectedCell] = useState({});
  const handleMove = ({ from, to }) => {
    console.log(
      `Move from ${from ? `(${from.row}, ${from.col})` : "nowhere"} to ${
        to ? `(${to.row}, ${to.col})` : "nowhere"
      }`
    );
  };

  useEffect(() => {
    const initialBoard = Array.from({ length: rows }, (_, row) =>
      Array.from({ length: cols }, (_, col) => ({
        row,
        col,
        pieceColor: isPieceCell(row, col)
          ? getStartingPosition(row, 2, 5)
          : null,
      }))
    );
    setChessBoard(initialBoard);
  }, []);

  useEffect(() => {
    console.log(chessBoard);
  }, [selectedCell]);

  return (
    <div className="chess-board">
      {chessBoard.map((row) =>
        row.map(({ row, col, pieceColor }) => (
          <ChessCell
            key={`${row}-${col}`}
            row={row}
            col={col}
            pieceColor={pieceColor}
            handleMove={handleMove}
            setSelectedCell={setSelectedCell}
            selectedCell={selectedCell}
            setChessBoard={setChessBoard}
          />
        ))
      )}
    </div>
  );
};

export default ChessBoard;
