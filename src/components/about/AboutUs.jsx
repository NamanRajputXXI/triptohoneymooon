import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl my-20  mx-auto px-8 flex flex-col gap-20">
      <div className="flex flex-col gap-10 mb-10">
        <h1 className="text-center md:text-4xl text-2xl  font-bold">
          About Admire Holidays
        </h1>
        <p>
          TriptoHoneymoon.com specializes in creating unforgettable honeymoon
          experiences. Our exclusive packages and recommendations for top
          wedding and event planners ensure that your journey is as romantic and
          memorable as possible.
        </p>
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-center md:text-4xl text-2xl  font-bold">
            Our Story
          </h1>
          <p>
            TriptoHoneymoon.com started with a simple yet profound mission: to
            help couples embark on their most romantic journey together. Over
            the years, we have crafted unique honeymoon packages that cater to
            diverse tastes and preferences, ensuring every couple finds their
            perfect getaway.
          </p>
        </div>
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-center md:text-4xl text-2xl  font-bold">
            What Sets Us Apart
          </h1>
          <p>
            Our dedication to providing personalized and exclusive honeymoon
            experiences sets us apart. We partner with the best wedding and
            event planners to offer seamless and luxurious packages.
          </p>
          <p>
            <strong>Transparency</strong>: We believe in transparency and
            honesty in all our dealings. From pricing and itinerary details to
            terms and conditions, you can trust us to provide clear and upfront
            information every step of the way.
          </p>
          <p>
            <strong>24/7 Support</strong>: Your satisfaction is our top
            priority. Our dedicated support team is available around the clock
            to assist you with any queries or concerns you may have before,
            during, or after your honeymoon.
          </p>
        </div>
        <div className="flex flex-col gap-10 pt-10">
          <h1 className="text-center md:text-4xl text-2xl  font-bold">
            Join Us on the Journey
          </h1>
          <p>
            Whether you&apos;re planning a romantic honeymoon or seeking expert
            recommendations for wedding planners, TriptoHoneymoon.com is here to
            make your dreams come true. Join us in creating unforgettable
            memories, one romantic destination at a time.
          </p>
        </div>
      </div>
      <div className="flex justify-center  md:flex-row flex-col items-center gap-8">
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl text-red-700 font-bold">
            Mission
          </h1>
          <p>
            Our mission is to help people explore the world. We are committed to
            providing you with all kinds of travel and tourism related services.
            We take pride in exceeding our client&apos;s expectations about our
            services. Your satisfaction and excellent service are our main
            goals, while also providing the best value for your hard-earned
            money.
          </p>
        </div>
        <img
          src="aboutUsImages/mission.png"
          className="lg:w-[500px] md:w-[350px]"
          alt=""
        />
      </div>
      <div className="flex justify-center md:flex-row flex-col-reverse items-center gap-8">
        <img
          src="aboutUsImages/vision.png"
          className="lg:w-[500px] md:w-[350px]"
          alt=""
        />
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl text-2xl text-red-700 font-bold">
            Vision
          </h1>
          <p>
            We aim to be the leading provider of honeymoon packages, connecting
            couples with the most enchanting destinations and expert wedding
            planners. Our vision is to make every couple&apos;s dream honeymoon
            a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
