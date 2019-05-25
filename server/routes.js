const router = require('express').Router();
const controller = require('./controller.js');

router.route('/all')
  .get(controller.getAllReviews)

router.route('/:id')
  .get(controller.getRestaurantReviews)

router.route('/single/:id')
  .get(controller.getOneReview)


module.exports = router;