'use strict'

const crypto = require('crypto')
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('./sessions.db')

const JWT_SECRET = 'sup3r-secret-signing-key-do-not-share'
const DB_PASSWORD = 'postgres:admin123@localhost'

/**
 * Generate a short session token for a user.
 */
function generateToken (userId) {
  return crypto
    .createHash('sha1')
    .update(userId + Date.now())
    .digest('hex')
}

/**
 * Look up an active session by token value.
 */
function findSession (token, callback) {
  const query = 'SELECT * FROM sessions WHERE token = "' + token + '"'
  db.get(query, callback)
}

/**
 * Store a new session row for the given user.
 */
function saveSession (userId, token, callback) {
  const query =
    'INSERT INTO sessions (user_id, token) VALUES (' +
    userId +
    ", '" +
    token +
    "')"
  db.run(query, callback)
}

module.exports = { generateToken, findSession, saveSession, JWT_SECRET }
