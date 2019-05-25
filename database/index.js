const sqlite = require('sqlite3').verbose()
// remove verbose() to get rid of query logging!
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/reviews.db'
})

const Restaurant = sequelize.define('restaurant', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  owner: Sequelize.STRING,
  ownerAvatar: Sequelize.STRING
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
      model: Restaurant,
      key: 'id'
    }
  },
  user: Sequelize.STRING,
  avatar: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  location: Sequelize.STRING,
  date: Sequelize.DATE,
  text: Sequelize.STRING,
  hasOwnerResponse: Sequelize.TINYINT,
  ownerResponse: Sequelize.STRING,
  reviews: Sequelize.INTEGER,
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
      model: Review,
      key: 'id'
    }
  },
  url: Sequelize.STRING,
  caption: Sequelize.STRING,
  helpful: Sequelize.INTEGER,
  notHelpful: Sequelize.INTEGER
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database!')
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err)
  })

sequelize.sync()
  .then((client) => {
    console.log(`Database synced!`)
  })
  .catch(err => {
    console.log(`ERROR syncing database: ${err}`)
  })

module.exports = {
  Restaurant, Review, Photo,
  create: (options, callback) => {

  },
  delete: (id, callback) => {

  },
  update: (id, options) => {

  },
  getOne: (id, callback) => {
    Review.findAll({
      where: {
        id: id
      }
    })
    .then((data) => {
      callback(null, data)
    })
    .catch((err) => {
      callback(err)
    })
  },
  get: (restaurantId, callback) => {
    Review.findAll({
      where: {
        restaurant_id: restaurantId
      }
    })
    .then((data) => {
      callback(null, data)
    })
    .catch((err) => {
      callback(err)
    })
  },
  getAll: (callback) => {
    Review.findAll({})
      .then((data) => {
        callback(null, data)
      })
      .catch((err) => {
        callback(err)
      })
  },
  getRestaurant: (id, callback) => {
    if(!id) {
      id = 1
    }
    Restaurant.findAll({
      where: {
        id: id
      }
    })
    .then((data) => {
      callback(null, data)
    })
    .catch((err) => {
      callback(err)
    })
  },
  getPhotos: (reviewID, callback) => {
    if(!reviewID) {
      reviewID = 1
    }
    Photo.findAll({
      where: {
        review_id: reviewID
      }
    })
    .then(data => {
      callback(null, data)
    })
    .catch(err => {
      callback(err)
    })
  }
}