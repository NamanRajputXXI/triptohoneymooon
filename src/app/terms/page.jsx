import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl flex flex-col gap-10 mx-auto md:py-20 py-10">
        <h2 className="text-4xl font-semibold">Privacy Policy</h2>
        <p>
          In case of cancellation of tour/travel services due to any
          avoidable/unavoidable reason/s, we must be informed in writing.
          Cancellation charges would be effective from the date we receive the
          letter in writing and cancellation charges would be as follows:
        </p>
        <ul>
          <li>Weeks in advance: 25% Cancellation charge</li>
          <li>1 week in advance: 50% Cancellation charge</li>
          <li>Less than a week/No Show: 100% Cancellation charge</li>
        </ul>
        <p>
          In case of special train journeys, flight bookings, packages with
          government accommodation, and peak season hotel bookings, a separate
          cancellation policy is applicable (which would be advised as and when
          required). In case you cancel the trip after commencement, the refund
          would be restricted to a limited amount that too would depend on the
          amount that we would be able to recover from the hoteliers we
          patronize. For unused hotel accommodation, chartered transportation,
          and missed meals, etc., we do not bear any responsibility to refund.
        </p>
        <p>
          Hope the above is in order. Further, we will be pleased if you ask any
          questions for any clarification.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
