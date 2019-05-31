const router = require('express').Router();
const controller = require('./controller.js');

router.route('/all')
  .get(controller.getAllReviews)

router.route('/:id')
  .get(controller.getRestaurantReviews)
  .post(controller.createReview)

router.route('/single/:id')
  .get(controller.getOneReview)
  .delete(controller.deleteReview)


module.exports = router;