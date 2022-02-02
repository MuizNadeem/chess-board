const rows = 8;
const columns = 8;

const getIndexForPosition = (position: number) => {
  // get the row and column for a given position in a 2d array
  const row = Math.floor((position - 1) / rows);
  const column = (position - 1) % columns;
  return [row, column];
};

const getPositionForIndex = (rowIndex: number, columnIndex: number) => {
  // get the position in a 2d array for a given row and column
  return rowIndex * rows + columnIndex + 1;
};

const isCoordinateInBounds = (rowIndex: number, columnIndex: number) => {
  // check if a coordinate is in bounds
  return (
    rowIndex >= 0 &&
    rowIndex < rows &&
    columnIndex >= 0 &&
    columnIndex < columns
  );
};

enum PAWN {
  KING = 'king',
  KNIGHT = 'knight',
}

const getMovesForKing = (rowIndex: number, columnIndex: number) => {
  return [
    [rowIndex - 1, columnIndex - 1], // top left
    [rowIndex - 1, columnIndex], // top
    [rowIndex - 1, columnIndex + 1], // top right
    [rowIndex, columnIndex - 1], // left
    [rowIndex, columnIndex + 1], // right
    [rowIndex + 1, columnIndex - 1], // bottom left
    [rowIndex + 1, columnIndex], // bottom
    [rowIndex + 1, columnIndex + 1], // bottom right
  ];
};

const getMovesForKnight = (rowIndex: number, columnIndex: number) => {
  return [
    [rowIndex - 2, columnIndex - 1], // top left
    [rowIndex - 2, columnIndex + 1], // top right
    [rowIndex - 1, columnIndex - 2], // left
    [rowIndex - 1, columnIndex + 2], // right
    [rowIndex + 1, columnIndex - 2], // bottom left
    [rowIndex + 1, columnIndex + 2], // bottom right
    [rowIndex + 2, columnIndex - 1], // bottom left
    [rowIndex + 2, columnIndex + 1], // bottom right
  ];
};

const getPossibleMovesForPawn = (currentPosition: number, role: PAWN) => {
  // Step 1: Position to row and column
  const [rowIndex, columnIndex] = getIndexForPosition(currentPosition);

  let possibleMoves;
  switch (role) {
    case PAWN.KING:
      possibleMoves = getMovesForKing(rowIndex, columnIndex);
      break;
    case PAWN.KNIGHT:
      possibleMoves = getMovesForKnight(rowIndex, columnIndex);
    default:
      break;
  }
  return possibleMoves
    .filter((move) => isCoordinateInBounds(move[0], move[1]))
    .map((move) => getPositionForIndex(move[0], move[1]));
};

getPossibleMovesForPawn(2, PAWN.KING); //?
getPossibleMovesForPawn(35, PAWN.KNIGHT); //?
