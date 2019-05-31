const router = require('express').Router();
const controller = require('./controller.js');

router.route('http://54.173.123.243:3007/all')
  .get(controller.getAllReviews)

router.route('http://54.173.123.243:3007/:id')
  .get(controller.getRestaurantReviews)
  .post(controller.createReview)

router.route('http://54.173.123.243:3007/single/:id')
  .get(controller.getOneReview)
  .delete(controller.deleteReview)


module.exports = router;