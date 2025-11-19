// Scramble Generation Routes
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { generateScramble } from './cubeAlgorithms.js';

const router = express.Router();

// POST /api/cube/scramble
// Generate a random scramble sequence
router.post('/scramble', (req, res) => {
  try {
    const { moveCount = 20 } = req.body;

    // Validate move count
    if (typeof moveCount !== 'number' || moveCount < 1 || moveCount > 100) {
      return res.status(400).json({
        error: 'Invalid move count',
        message: 'moveCount must be between 1 and 100'
      });
    }

    // Generate scramble
    const scramble = generateScramble(moveCount);
    const scrambleId = uuidv4();

    res.json({
      scramble,
      scrambleId,
      moveCount: scramble.length
    });
  } catch (error) {
    console.error('Error generating scramble:', error);
    res.status(500).json({
      error: 'Failed to generate scramble',
      message: error.message
    });
  }
});

export default router;
