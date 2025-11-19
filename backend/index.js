// Rubik's Cube Backend Server
import express from 'express';
import cors from 'cors';
import scrambleRoutes from './routes-scramble.js';
import validateRoutes from './routes-validate.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Server start time for uptime calculation
const serverStartTime = Date.now();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  const uptime = Math.floor((Date.now() - serverStartTime) / 1000);
  res.json({
    status: 'ok',
    message: 'Backend is running',
    uptime,
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/cube', scrambleRoutes);
app.use('/api/cube', validateRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Rubiks Cube API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      scramble: 'POST /api/cube/scramble',
      validate: 'POST /api/cube/validate'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Rubiks Cube Backend running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎲 Scramble API: http://localhost:${PORT}/api/cube/scramble`);
});

export default app;
