import React from "react";
import ReviewsData from "./ReviewsData";
import SingleReview from "./SingleReview";
import ImageGallary from "./ImageGallary";

const Reviews = () => {
  return (
    <section className="my-10 flex gap-10 flex-col ">
      <ReviewsData />
      <ImageGallary />
      <SingleReview />
      <SingleReview />
      <SingleReview />
    </section>
  );
};

export default Reviews;
