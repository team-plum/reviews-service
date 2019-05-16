const sqlite = require('sqlite3').verbose();
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

const Restaurant = sequelize.define('restaurant', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  owner: Sequelize.STRING
});

const Review = sequelize.define('review', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  restaurant_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'restaurant',
      key: 'id'
    }
  },
  user: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  date: Sequelize.DATE,
  text: Sequelize.STRING,
  hasOwnerResponse: Sequelize.BOOLEAN,
  ownerResponse: Sequelize.STRING,
  friends: Sequelize.INTEGER,
  funny: Sequelize.INTEGER,
  cool: Sequelize.INTEGER,
  useful: Sequelize.INTEGER,
});

const Photo = sequelize.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  review_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'review',
      key: 'id'
    }
  },
  url: Sequelize.STRING,
  caption: Sequelize.STRING,
  helpful: Sequelize.INTEGER,
  notHelpful: Sequelize.INTEGER
});

module.exports = {
  createReview: () => {
  },
  deleteReview: () => {

  },
  updateReview: () => {

  },
  getReview: () => {

  },
  Restaurant, Review, Photo
}