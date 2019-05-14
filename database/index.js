const sqlite = require('sqlite3');
const db = new sqlite.Database('/path/to/database.sqlite');
const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: './reviews.db',
  ...
});