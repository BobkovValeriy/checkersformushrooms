import React from "react";
import "./cell.scss";
import PieceBlack from "../figures/pieceBLack";
import PieceWhite from "../figures/pieceWhite";
import { validationOfChechersMove } from "../utils/utils";

const ChessCell = ({
  row,
  col,
  pieceColor,
  setSelectedCell,
  selectedCell,
  setChessBoard,
}) => {
  const cellColor = (row + col) % 2 === 0 ? "white" : "black";

  const getToHand = (event) => {
    event.preventDefault();
    setSelectedCell({
      row,
      col,
      pieceColor,
    });
  };

  const moveFigure = (event) => {
    event.preventDefault();
    if (selectedCell) {
      setChessBoard((prevChessBoard) => {
        const fromRow = selectedCell.row;
        const fromCol = selectedCell.col;
        const movingPieceColor = selectedCell.pieceColor;
        const isValidMove = validationOfChechersMove(
          movingPieceColor,
          cellColor,
          row,
          fromRow,
          pieceColor
        );

        if (isValidMove === 0) {
          console.log("Invalid move!");
          return prevChessBoard;
        }

        const updatedChessBoard = [...prevChessBoard];

        // Remove piece from the starting position
        updatedChessBoard[fromRow][fromCol] = {
          ...updatedChessBoard[fromRow][fromCol],
          pieceColor: null,
        };

        // Place the piece in the destination position
        updatedChessBoard[row][col] = {
          ...updatedChessBoard[row][col],
          pieceColor: movingPieceColor,
        };
        setSelectedCell({});
        return updatedChessBoard;
      });
    }
  };

  return (
    <div
      className={`chess-cell ${cellColor}`}
      onClick={getToHand}
      onContextMenu={moveFigure}
    >
      {pieceColor !== null ? (
        pieceColor === "black" ? (
          <PieceBlack
            isSelected={selectedCell.row === row && selectedCell.col === col}
          />
        ) : (
          <PieceWhite
            isSelected={selectedCell.row === row && selectedCell.col === col}
          />
        )
      ) : (
        `${String.fromCharCode(65 + col)}${8 - row}`
      )}
    </div>
  );
};

export default ChessCell;
