const sqlite = require('sqlite3').verbose()
// remove verbose() to get rid of query logging!
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/reviews.db'
})

const Restaurant = sequelize.define('restaurant', {
  name: Sequelize.STRING,
  owner: Sequelize.STRING,
  ownerAvatar: Sequelize.STRING
});

const Review = sequelize.define('review', {
  restaurant_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Restaurant,
      key: 'rowid'
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
  review_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Review,
      key: 'rowid'
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
    Review.create({
      restaurant_id: options.restaurant_id,
      user: options.user,
      rating: options.rating,
      date: options.date,
      text: options.text
    })
    .then(data => {
      console.log('Review created.')
      callback(null, data)
    })
    .catch(err => {
      console.log(`Error creating review: ${err}`)
      callback(err)
    })
  },
  delete: (id, callback) => {
    Review.destroy({
      where: {
        rowid: id
      }
    })
    .then(data => {
      console.log('Review deleted.')
      callback(null, data)
    })
    .catch(err => {
      console.log(`Error deleting review: ${err}`)
      callback(err)
    }) 
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
  },
  search: (id, term, callback) => {
    let results = []

    Review.findAll({
      where: {
        restaurant_id: id
      }
    })
    .then(data => {
      console.log(`Searching reviews...`)
      for (let i = 0; i < data.length; i++) {
        let words = data[i].text.split(' ')
        for(let x = 0; x < words.length; x++) {
          if(words[x] === term) {
            results.push(data[i])
          }
        }
      }
      callback(null, results)
    })
    .catch(err => {
      console.log(`Error searching reviews: ${err}`)
      callback(err)
    })
  }
}