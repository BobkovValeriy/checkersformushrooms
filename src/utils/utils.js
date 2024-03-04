export const isPieceCell = (row, col) => (row + col) % 2 === 1;

export const getStartingPosition = (row, blackStartRow, whiteStartRow) => {
    if (row <= blackStartRow) {
        return 'black';
    } else if (row >= whiteStartRow) {
        return 'white';
    } else {
        return null;
    }
};
export const validationOfChechersMove = (movingPieceColor, cellColor, row, fromRow, pieceColor) => {
    if (movingPieceColor === "black" && cellColor === "black") {
        if (pieceColor === null && row === fromRow + 1 &&
            row > fromRow) {
            return 1
        } else return 0
    } else if (movingPieceColor === "white" && cellColor === "black") {
        if (pieceColor === null && row === fromRow - 1 &&
            row < fromRow) {
            return 1
        } else return 0
    }

}