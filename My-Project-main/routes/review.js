const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const ReviewController = require("../controllers/reviews.js");
const {validateReview,isLoggedIn,isReviewAuthor}  = require("../middleware.js");


//Post review route
router.post("/",isLoggedIn,validateReview,wrapAsync(ReviewController.createReview)
);

//Delete Review Route
router.delete("/:reviewID",isLoggedIn,isReviewAuthor,
    wrapAsync(ReviewController.deleteReview));


module.exports = router;