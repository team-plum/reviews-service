const express = require('express')
const path = require('path')
const morgan = require('morgan')
const parser = require('body-parser')
const router = require('./routes.js')
const db = require('../database')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(parser.json());
app.use(morgan('dev'));

app.use('http://54.173.123.243:3007/', express.static(path.join(__dirname, '../client/dist')))
app.use('http://54.173.123.243:3007/:id', express.static(path.join(__dirname, '../client/dist')))

app.use('http://54.173.123.243:3007/reviews', router)

app.get('http://54.173.123.243:3007/restaurant/:id', (req, res) => {
  let id = req.params.id || 1
  db.getRestaurant(id, (err, data) => {
    if(err) {
      console.log(`Error retrieving photos: ${err}`)
      res.sendStatus(500)
    } else {
      res.send(data)
    }
  })
})

app.get('http://54.173.123.243:3007/photos/:id', (req, res) => {
  let id = req.params.id || 1
  db.getPhotos(id, (err, data) => {
    if(err) {
      console.log(`Error retrieving photos: ${err}`)
      res.sendStatus(500)
    } else {
      res.send(data)
    }
  })
})


// SEARCH REVIEWS
app.get('http://54.173.123.243:3007/search/:id', (req, res) => {
  let id = req.body.id || 1
  console.log('SEARCH REQ.BODY: ', req.body)
  let term = req.body.term

  if(!term) {
    res.send('Please include a search term.')
    return;
  }

  db.search(id, term, (err, data) => {
    if(err) {
      console.log(`Error searching: ${err}`)
      res.sendStatus(500)
    } else {
      res.send(data)
    }
  })
})


// DELETE REVIEW -- testing purposes
app.delete('http://54.173.123.243/delete/:id', (req, res) => {
  let restaurant_id = req.body.restaurant_id || req.params.id
  let rowid = req.body.rowid

  db.delete(restaurant_id, rowid, (err, data) => {
    if(err) {
      console.log(`Error deleting: ${err}`)
      res.sendStatus(500)
    } else {
      res.send(`${data} items deleted.`)
    }
  })
})

const PORT = process.env.PORT || 3007;

app.listen(PORT, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Listening on ${PORT}...`);
  }
})