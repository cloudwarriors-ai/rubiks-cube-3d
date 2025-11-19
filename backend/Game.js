// Game Session Management
import { v4 as uuidv4 } from 'uuid';
import cubeService from './CubeService.js';

class Game {
  constructor() {
    this.sessions = new Map();
  }

  // Create new game session
  createSession() {
    const sessionId = uuidv4();
    const session = {
      id: sessionId,
      cubeState: cubeService.getInitialState(),
      moves: [],
      startTime: Date.now(),
      solved: true
    };

    this.sessions.set(sessionId, session);
    return session;
  }

  // Get session by ID
  getSession(sessionId) {
    return this.sessions.get(sessionId);
  }

  // Update session
  updateSession(sessionId, updates) {
    const session = this.sessions.get(sessionId);
    if (!session) return null;

    Object.assign(session, updates);
    this.sessions.set(sessionId, session);
    return session;
  }

  // Delete session
  deleteSession(sessionId) {
    return this.sessions.delete(sessionId);
  }

  // Clean up old sessions (optional)
  cleanupSessions(maxAge = 3600000) {
    const now = Date.now();
    for (const [id, session] of this.sessions.entries()) {
      if (now - session.startTime > maxAge) {
        this.sessions.delete(id);
      }
    }
  }
}

export default new Game();
