const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/reviews.js")

//Reviews
//Post review Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReviews));


//Delete review Route
router.delete("/:reviewId", isReviewAuthor,isLoggedIn,wrapAsync(reviewController.destroyReviews));

module.exports=router;