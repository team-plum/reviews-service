const express = require('express')
const path = require('path')
const morgan = require('morgan')
const parser = require('body-parser')
const router = require('./routes.js')
const db = require('../database')

const app = express();

app.use(parser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use('/:id', express.static(path.join(__dirname, '../client/dist')))

app.use('/reviews', router)

app.get('/restaurant/:id', (req, res) => {
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

app.get('/photos/:id', (req, res) => {
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

app.get('/search/:id', (req, res) => {
  let id = req.body.id || 1
  // let term = req.body.term || 'dolorum'
  db.search(id, req.body.term, (err, data) => {
    if(err) {
      console.log(`Error searching: ${err}`)
      res.sendStatus(500)
    } else {
      res.send(data)
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