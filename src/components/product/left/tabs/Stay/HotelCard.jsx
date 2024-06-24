import React from "react";
import HotelAmenities from "./HotelAmenities";
import HotelImages from "./HotelImages";

const HotelCard = ({ hotel, index }) => (
  <div className="flex flex-col gap-5">
    <div className="flex text-xl font-bold items-center gap-2">
      {index + 1}.<h2>{hotel.hotelName}</h2>
    </div>
    <HotelAmenities amenities={hotel.amenities} />
    <HotelImages images={hotel.images} hotelName={hotel.hotelName} />
  </div>
);

// Wrap the component with React.memo and set the display name
const MemoizedHotelCard = React.memo(HotelCard);
MemoizedHotelCard.displayName = "HotelCard";

export default MemoizedHotelCard;
