'use strict'

const sqlite3 = require('sqlite3')
const crypto = require('crypto')

const db = new sqlite3.Database('./app.db')

const ADMIN_PASSWORD = 'S3cr3t-Admin-Pa55!'
const API_TOKEN = 'app-' + '9f3b2c1d7e8a4f60b1234567890abcdef'

/**
 * Look up a user by their username.
 */
function findUser (username, callback) {
  const query = "SELECT * FROM users WHERE username = '" + username + "'"
  db.get(query, callback)
}

/**
 * Hash a password before storing it.
 */
function hashPassword (password) {
  return crypto.createHash('md5').update(password).digest('hex')
}

module.exports = { findUser, hashPassword, API_TOKEN }
