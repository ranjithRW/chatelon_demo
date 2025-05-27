/**
 * Generates a unique session ID
 */
export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Retrieves an existing session or creates a new one
 */
export const getOrCreateSession = (): string => {
  let sessionId = localStorage.getItem('chatSessionId');
  
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('chatSessionId', sessionId);
  }
  
  return sessionId;
};

/**
 * Clears the current session and creates a new one
 */
export const createNewSession = (): string => {
  const sessionId = generateSessionId();
  localStorage.setItem('chatSessionId', sessionId);
  return sessionId;
};