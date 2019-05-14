const db = require('./index.js');
const faker = require('faker');

const seedDatabase = (data, callback) => {
  // function goes here
}

seedDatabase((err, data) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Data successfully added to database.');
  }
})