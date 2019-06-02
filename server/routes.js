const router = require('express').Router();
const controller = require('./controller.js');


// all routes for /reviews/
router.route('/all')  // /reviews/all

  // get ALL reviews. only for testing
  .get(controller.getAllReviews)

router.route('/:id')  // /reviews/:id

  // get all reviews for a given ID param
  .get(controller.getRestaurantReviews)

  // create new review for given ID
  .post(controller.createReview)

router.route('/single/:id')  // /reviews/single/:id

  // get a single review matching given ID param
  .get(controller.getOneReview)

  // deletes a single review matching ID param.
  // (REVIEW ID, not restaurant ID!)
  .delete(controller.deleteReview)


module.exports = router;