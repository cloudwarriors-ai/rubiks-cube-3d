// Cube Validation Routes
import express from 'express';
import cubeService from './CubeService.js';

const router = express.Router();

// POST /api/cube/validate
// Validate cube state structure and check if solved
router.post('/validate', (req, res) => {
  try {
    const { cubeState } = req.body;

    if (!cubeState) {
      return res.status(400).json({
        valid: false,
        message: 'cubeState is required'
      });
    }

    // Validate structure
    const isValid = cubeService.validateCubeState(cubeState);
    
    if (!isValid) {
      return res.json({
        valid: false,
        message: 'Invalid cube state structure'
      });
    }

    // Check if solved
    const isSolved = cubeService.isSolved(cubeState);

    res.json({
      valid: true,
      solved: isSolved,
      message: isSolved ? 'Cube is solved!' : 'Cube is valid but not solved'
    });
  } catch (error) {
    console.error('Error validating cube:', error);
    res.status(500).json({
      valid: false,
      message: error.message
    });
  }
});

export default router;
