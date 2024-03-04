import React from "react";
import "./figures.scss";
import blackPieceImage from "../img/blackpiece.png";
import focusedBlackPieceImage from "../img/focusedBlackPiece.png";

const PieceBlack = ({ isSelected }) => {
  return (
    <div className={`figure`}>
      {isSelected ? (
        <img src={focusedBlackPieceImage} alt="Black Piece" />
      ) : (
        <img src={blackPieceImage} alt="Black Piece" />
      )}
    </div>
  );
};

export default PieceBlack;
