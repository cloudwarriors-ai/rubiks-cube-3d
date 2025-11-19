# Rubik's Cube 3D Simulator

A full-stack 3D Rubik's Cube simulator with real-time manipulation, scramble generation, and auto-solve functionality.

## Features

1. ✅ Backend Connection Status
2. ✅ 3D Cube Rendering (Three.js)
3. ✅ 18 Move Controls (R, L, U, D, F, B + prime + 2)
4. ✅ Scramble Generator (20 random moves)
5. ✅ Statistics (move counter + timer)
6. ✅ Auto-Solve (reverses all moves)
7. ✅ Reset Cube (instant reset)

## Technology Stack

### Frontend
- React 18.2.0 + TypeScript 5.3.0
- Vite 5.0.0
- Three.js 0.160.0
- @react-three/fiber 8.15.0
- Tailwind CSS 3.4.0

### Backend
- Express 4.18.2
- Node.js (ES Modules)
- CORS enabled

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
npm start
# Backend runs on http://localhost:3001
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Frontend runs on http://localhost:8080
```

## API Endpoints

- `GET /health` - Health check
- `POST /api/cube/scramble` - Generate scramble
- `POST /api/cube/validate` - Validate cube state

## Usage

1. Open http://localhost:8080 in your browser
2. Verify backend connection (green checkmark)
3. Use move buttons to manipulate the cube
4. Click "Generate Scramble" for random scramble
5. Click "Auto Solve" to reverse all moves
6. Click "Reset Cube" to return to solved state

## Auto-Solve Implementation

The auto-solve feature uses:
- **useRef** for synchronous move history access
- **Inverse moves**: R → R', R' → R, R2 → R2
- **Reverse order**: Applies inverse moves in reverse
- **Visual verification**: Animates return to solved state

## Project Structure

```
rubiks-cube-demo/
├── backend/
│   ├── index.js
│   ├── cubeAlgorithms.js
│   ├── CubeService.js
│   ├── Game.js
│   ├── routes-scramble.js
│   ├── routes-validate.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── GameBoard.tsx
│   │   │   ├── CubeDisplay.tsx
│   │   │   ├── CubeRenderer.tsx
│   │   │   ├── BackendConnection.tsx
│   │   │   ├── ScrambleGenerator.tsx
│   │   │   ├── MoveControls.tsx
│   │   │   ├── Statistics.tsx
│   │   │   └── AutoSolve.tsx
│   │   ├── utils/
│   │   │   ├── cubeLogic.ts
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
└── README.md
```

## Build Complete

All 7 features implemented and tested.
Backend and frontend ready for deployment.
