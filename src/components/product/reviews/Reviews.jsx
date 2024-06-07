import React from "react";
import ReviewsData from "./ReviewsData";
import SingleReview from "./SingleReview";

const Reviews = () => {
  return (
    <section className="my-10 flex gap-10 flex-col ">
      <ReviewsData />
      <SingleReview />
      <SingleReview />
      <SingleReview />
    </section>
  );
};

export default Reviews;
