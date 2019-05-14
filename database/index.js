const sqlite = require('sqlite3');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './reviews.db'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });