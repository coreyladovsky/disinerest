const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/disinterest');

module.exports = { db }
