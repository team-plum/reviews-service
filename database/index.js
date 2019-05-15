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
  reviews: {
    type: Sequelize.INTEGER,
    references: {
      model: 'review',
      key: 'id'
    }
  },
  owner: Sequelize.STRING
});

const Review = sequelize.define('review', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  restaurant: {
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
  photos: {
    type: Sequelize.INTEGER,
    references: {
      model: 'photo',
      key: 'id'
    }
  },
  voters: Sequelize.INTEGER,
  funny: Sequelize.INTEGER,
  cool: Sequelize.INTEGER,
  useful: Sequelize.INTEGER,
  firstCheck: Sequelize.BOOLEAN,
  firstReview: Sequelize.BOOLEAN,
  elite: Sequelize.BOOLEAN
});

const Photo = sequelize.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  url: Sequelize.STRING,
  caption: Sequelize.STRING,
  review: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Review',
      key: 'id'
    }
  },
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