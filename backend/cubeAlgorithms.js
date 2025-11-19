// Rubik's Cube Move Algorithms
// Defines how each move transforms the cube state

export const MOVES = {
  // Face rotations (clockwise)
  R: 'R',   // Right face clockwise
  L: 'L',   // Left face clockwise
  U: 'U',   // Up face clockwise
  D: 'D',   // Down face clockwise
  F: 'F',   // Front face clockwise
  B: 'B',   // Back face clockwise
  
  // Prime rotations (counter-clockwise)
  "R'": "R'",
  "L'": "L'",
  "U'": "U'",
  "D'": "D'",
  "F'": "F'",
  "B'": "B'",
  
  // Double rotations (180 degrees)
  R2: 'R2',
  L2: 'L2',
  U2: 'U2',
  D2: 'D2',
  F2: 'F2',
  B2: 'B2'
};

export const ALL_MOVES = Object.keys(MOVES);

// Generate random scramble
export function generateScramble(moveCount = 20) {
  const scramble = [];
  let lastMove = null;
  
  for (let i = 0; i < moveCount; i++) {
    let move;
    do {
      move = ALL_MOVES[Math.floor(Math.random() * ALL_MOVES.length)];
    } while (lastMove && move[0] === lastMove[0]); // Avoid same face consecutively
    
    scramble.push(move);
    lastMove = move;
  }
  
  return scramble;
}

// Get inverse of a move (for solving)
export function getInverseMove(move) {
  if (move.endsWith("'")) {
    return move.slice(0, -1);  // R' -> R
  } else if (move.endsWith('2')) {
    return move;  // R2 -> R2 (same)
  } else {
    return move + "'";  // R -> R'
  }
}

// Validate move notation
export function isValidMove(move) {
  return ALL_MOVES.includes(move);
}
