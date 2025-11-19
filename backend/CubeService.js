// Cube State Management Service
// Handles cube state transformations and validations

export class CubeService {
  constructor() {
    this.initialState = this.getInitialState();
  }

  // Get solved cube state
  getInitialState() {
    return {
      front: [
        ['red', 'red', 'red'],
        ['red', 'red', 'red'],
        ['red', 'red', 'red']
      ],
      back: [
        ['orange', 'orange', 'orange'],
        ['orange', 'orange', 'orange'],
        ['orange', 'orange', 'orange']
      ],
      left: [
        ['green', 'green', 'green'],
        ['green', 'green', 'green'],
        ['green', 'green', 'green']
      ],
      right: [
        ['blue', 'blue', 'blue'],
        ['blue', 'blue', 'blue'],
        ['blue', 'blue', 'blue']
      ],
      top: [
        ['white', 'white', 'white'],
        ['white', 'white', 'white'],
        ['white', 'white', 'white']
      ],
      bottom: [
        ['yellow', 'yellow', 'yellow'],
        ['yellow', 'yellow', 'yellow'],
        ['yellow', 'yellow', 'yellow']
      ]
    };
  }

  // Validate cube state structure
  validateCubeState(state) {
    if (!state) return false;

    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    const validColors = ['red', 'orange', 'green', 'blue', 'white', 'yellow'];

    for (const face of faces) {
      if (!state[face] || !Array.isArray(state[face])) return false;
      if (state[face].length !== 3) return false;

      for (let row = 0; row < 3; row++) {
        if (!Array.isArray(state[face][row])) return false;
        if (state[face][row].length !== 3) return false;

        for (let col = 0; col < 3; col++) {
          const color = state[face][row][col];
          if (!validColors.includes(color)) return false;
        }
      }
    }

    return true;
  }

  // Check if cube is solved
  isSolved(state) {
    if (!this.validateCubeState(state)) return false;

    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];

    for (const face of faces) {
      const firstColor = state[face][0][0];
      
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (state[face][row][col] !== firstColor) {
            return false;
          }
        }
      }
    }

    return true;
  }

  // Apply a single move to cube state
  applyMove(state, move) {
    // This is handled on frontend for performance
    // Backend just validates structure
    return state;
  }
}

export default new CubeService();
