import React from "react";
import "./figures.scss";
import whitePieceImage from "../img/whitepiece.png";
import focusedWhitePieceImage from "../img/focusedWhitePiece.png";

const PieceWhite = ({ isSelected }) => {
  return (
    <div className={`figure`}>
      {isSelected ? (
        <img src={focusedWhitePieceImage} alt="White Piece" />
      ) : (
        <img src={whitePieceImage} alt="White Piece" />
      )}
    </div>
  );
};

export default PieceWhite;
