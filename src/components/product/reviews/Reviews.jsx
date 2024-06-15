import React from "react";
import ReviewsData from "./ReviewsData";
import SingleReview from "./SingleReview";
import ImageGallary from "./ImageGallary";
import { FaStar } from "react-icons/fa6";

const Reviews = ({ totalCustomer, rating, reviewImageGallary, reviews }) => {
  return (
    <section className="my-10 flex gap-10 flex-col ">
      <ReviewsData totalCustomer={totalCustomer} rating={rating} />
      <ImageGallary reviewImageGallary={reviewImageGallary} />
      {reviews.map((review, i) => (
        <div key={i}>
          <SingleReview review={review} />
        </div>
      ))}
    </section>
  );
};

export default Reviews;
