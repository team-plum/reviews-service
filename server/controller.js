const db = require('../database/index.js')

module.exports = {
  createReview: (req, res) => {

  },
  updateReview: (req, res) => {
    
  },
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
  // this is for testing purposes!!
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
  deleteReview: (req, res) => {
    
  }
}