const db = require('../database/index.js')

module.exports = {
  // creates review in database
  createReview: (req, res) => {
    console.log(req.params)
    let options = {
      restaurant_id: req.params.id,
      user: req.body.user,
      rating: req.body.rating,
      date: req.body.date,
      text: req.body.text
    }
    db.create(options, (err, data) => {
      if(err) {
        console.log(`ERROR creating review: ${err}`)
        res.sendStatus(500)
      } else {
        console.log('Review created successfully.')
        res.send(data)
      }
    })
  },
  // get a single review
  getOneReview: (req, res) => {
    let id = req.params.id
    db.getOne(id, (err, data) => {
      if(err) {
        console.log(`ERROR retrieving review: ${err}`)
        res.sendStatus(500)
      } else {
        console.log(`Retrieving review #${id}...`)
        res.send(data)
      }
    })
  },
  // gets all reviews for a given restaurant
  getRestaurantReviews: (req, res) => {
    let id = req.params.id
    db.get(id, (err, data) => {
      if(err) {
        console.log(`ERROR retrieving review: ${err}`)
        res.sendStatus(500)
      } else {
        console.log(`Retrieving reviews for restaurant #${id}...`)
        res.send(data)
      }
    })
  },
  // gets EVERY review in the database. only for testing!!
  getAllReviews: (req, res) => {
    db.getAll((err, data) => {
      if(err) {
        console.log(`ERROR retrieving reviews: ${err}`)
        res.sendStatus(500)
      } else {
        console.log('Retrieving ALL reviews...')
        res.send(data)
      }
    })
  },
  // deletes a review. testing purposes, remove broken reviews
  deleteReview: (req, res) => {
    if(req.params.id === null) {
      let id = null
    } else {

      id = req.params.id
    }
    db.delete(id, (err, data) => {
      if(err) {
        console.log(`Error deleted`)
        res.sendStatus(500)
      } else {
        console.log('Review deleted.')
        res.send(`${data} items deleted.`)
      }
    })
  }
}