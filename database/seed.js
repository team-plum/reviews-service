const db = require('./index.js');
const faker = require('faker');

const images = [
  'alex-holyoake-139326-unsplash.jpg',
  'andy-falconer-1130597-unsplash.jpg',
  'anita-austvika-706359-unsplash.jpg',
  'athena-lam-132197-unsplash.jpg',
  'berry-cheesecake.jpg',
  'brigitte-tohm-236161-unsplash.jpg',
  'brooke-lark-96787-unsplash.jpg',
  'bundo-kim-1257586-unsplash.jpg',
  'bundo-kim-1498153-unsplash.jpg',
  'buttered-waffles-with-powdered-sugar.jpg',
  'cafe-patio.jpg',
  'chocolate-marshmallow-cake.jpg',
  'claudia-viloria-20157-unsplash.jpg',
  'coffee-and-cake.jpg',
  'daisy-floral-cake.jpg',
  'dan-gold-1115487-unsplash.jpg',
  'daniela-araya-1348846-unsplash.jpg',
  'david-emrich-1472691-unsplash.jpg',
  'delux-pizza-slices-being-served.jpg',
  'flame-broiled-hamburger-with-garnishes.jpg',
  'fresh-appetizers-cocktails.jpg',
  'fresh-water-on-restaurant-table.jpg',
  'hand-on-menu.jpg',
  'healthy-breakfast.jpg',
  'ian-baldwin-49824-unsplash.jpg',
  'japanese-food-in-restaurant.jpg',
  'katarzyna-grabowska-397448-unsplash.jpg',
  'mariya-fish-1299651-unsplash.jpg',
  'masaaki-komori-567582-unsplash.jpg',
  'matthew-t-rader-1300653-unsplash.jpg',
  'nick-cooper-539410-unsplash.jpg',
  'nikola-jovanovic-198375-unsplash.jpg',
  'obed-hernandez-473160-unsplash.jpg',
  'peter-lewicki-614619-unsplash.jpg',
  'petr-sevcovic-594807-unsplash.jpg',
  'pouring-maple-syrup-on-waffles.jpg',
  'praveen-gupta-1358389-unsplash.jpg',
  'ptmp-1105879-unsplash.jpg',
  'robert-bye-141857-unsplash.jpg',
  'roman-kraft-156096-unsplash.jpg',
  'rudy-barrientos-1455689-unsplash.jpg',
  'sander-dalhuisen-1590288-unsplash.jpg',
  'table-for-two.jpg',
  'top-view-of-chocolate-cake-with-raspberry-coulis.jpg',
  'waffle-breakfast.jpg',
  'waffles-for-breakfast.jpg',
  'waffles-with-whipped-cream.jpg',
  'whole-grain-healthy-pancakes.jpg',
  'wild-salmon-dinner.jpg',
  'wood-set-table-at-restaurant.jpg'
]

const seedDatabase = (data, callback) => {
  let restaurants = [];
  let reviews = [];
  let photos = [];

  for (let i = 1; i < 101; i++) {
    restaurants.push(
      db.Restaurant.create({
      id: i,
      name: `${faker.commerce.productAdjective()} ${faker.commerce.color()}`,
      review_id: Math.floor((Math.random() * 100) + 1),
      owner: `${faker.name.firstName()} ${faker.name.lastName()}`
    })
      .catch(err => {
        console.log(err)
      })
    )
  }

  Promise.all(restaurants)
    .then(() => {
      console.log(`Restaurants added to database.`)
    })
    .catch(() => {
      console.log(`Error occurred adding restaurants.`)
    })

  for (let i = 1; i < 1001; i++) {
    reviews.push(
      db.Review.create({
        id: i,
        restaurant_id: Math.floor((Math.random() * 100) + 1),
        user: `${faker.name.firstName()} ${faker.name.lastName()}`,
        rating: Math.floor(Math.random() * 6),
        date: `${faker.date.past()}`,
        text: `${faker.lorem.paragraphs()}`,
        hasOwnResponse: `${Math.floor(Math.random * 1)}`,
        ownerResponse: `${faker.lorem.paragraph()}`,
        reviews: `${faker.random.number(500)}`,
        friends: `${faker.random.number(600)}`,
        funny: Math.floor(Math.random() * 10),
        cool: Math.floor(Math.random() * 10),
        useful: Math.floor(Math.random() * 10)
      })
      .catch(err => {
        console.log(err)
      })
    )
  }

  Promise.all(reviews)
  .then(() => {
    console.log(`Reviews added to database.`)
  })
  .catch(() => {
    console.log(`Error occurred adding reviews.`)
  })

  for (let i = 1; i < 3001; i++) {
    let random = Math.floor((Math.random() * 50) + 1);
    photos.push(db.Photo.create({
      id: i,
      review_id: Math.floor((Math.random() * 100) + 1),
      url: `https://s3.amazonaws.com/reviews-service/${images[Math.floor(Math.random() * 50)]}`,
      caption: `${faker.lorem.sentence(2)}`,
      helpful: Math.floor(Math.random() * 5),
      notHelpful: Math.floor(Math.random() * 5)
    })
    .catch(err => {
      console.log(err)
    })
    )
  }

  Promise.all(photos)
  .then(() => {
    console.log(`Photos added to database.`)
  })
  .catch(() => {
    console.log(`Error occurred adding photos.`)
  })
}

seedDatabase((err, data) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Data successfully added to database.');
  }
})