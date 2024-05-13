const mongoose = require("mongoose");

// Define sub-schema for hotel details
const hotelDetailSchema = new mongoose.Schema({
  destination: String,
  hotels: [String],
});

// Define sub-schema for package options
const packageOptionSchema = new mongoose.Schema({
  package: String,
  price: String,
  previousPrice: String,
  hotelDestination: String,
  hotelDetails: [hotelDetailSchema],
});

// Define the main schema for the trip
const KashmirSchema = new mongoose.Schema({
  heading: String,
  subHeading: String,
  mapSrc: String,
  packageOptions: [packageOptionSchema],
  carouselImageUrl: [String],
  exclusions: [String],
  inclusions: [String],
  itinerary: [
    {
      day: String,
      dayHeading: String,
      dayOverview: String,
    },
  ],
  overView: [
    {
      heading: String,
      text: String,
    },
  ],
  duration: String,
  imageUrl: String,
});

// Create and export the model based on the schema
module.exports = mongoose.model("Kashmir", KashmirSchema);
