// import React from "react";

// const BlogPost = () => {
//   const destinations = [
//     {
//       name: "Venice, Italy",
//       image:
//         "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Santorini, Greece",
//       image:
//         "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Bora Bora, French Polynesia",
//       image:
//         "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Paris, France",
//       image:
//         "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Maldives",
//       image:
//         "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=300&q=80",
//     },
//   ];

//   return (
//     <>
//       <header className="relative h-64 sm:h-96 mb-8">
//         <img
//           src="https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1200&q=80"
//           alt="Romantic sunset"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <h1 className="text-3xl sm:text-4xl font-bold text-white text-center px-4">
//             Top 10 Romantic Destinations
//           </h1>
//         </div>
//       </header>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-12">
//           {destinations.map((dest, index) => (
//             <div
//               key={index}
//               className="relative h-64  shadow-lg rounded-lg overflow-hidden"
//             >
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center p-4">
//                 <span className="text-white  font-semibold text-center">
//                   {dest.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           <article className="prose prose-lg lg:prose-xl lg:w-2/3">
//             <h2 className="text-3xl font-bold mb-6">
//               Discover the Most Romantic Places for Your Honeymoon
//             </h2>

//             <p>
//               Embarking on a honeymoon is a magical experience that marks the
//               beginning of a lifelong journey together. It's a time to create
//               unforgettable memories, indulge in romantic moments, and explore
//               breathtaking destinations. To help you plan the perfect romantic
//               getaway, we've curated a list of the top 10 most enchanting
//               destinations for newlyweds.
//             </p>

//             <h3>1. Venice, Italy</h3>
//             <p>
//               Known as the "City of Love," Venice offers a unique blend of
//               romance and history. Glide through narrow canals on a gondola,
//               explore charming cobblestone streets, and share intimate moments
//               in picturesque piazzas. Don't miss the stunning St. Mark's
//               Basilica and a sunset view from the Rialto Bridge.
//             </p>

//             <h3>2. Santorini, Greece</h3>
//             <p>
//               With its iconic white-washed buildings and blue-domed churches set
//               against the backdrop of the Aegean Sea, Santorini is a paradise
//               for couples. Enjoy world-famous sunsets in Oia, take a wine tour
//               in the island's vineyards, and relax on unique red and black sand
//               beaches.
//             </p>

//             <h3>3. Bora Bora, French Polynesia</h3>
//             <p>
//               For the ultimate tropical escape, Bora Bora offers crystal-clear
//               lagoons, overwater bungalows, and lush landscapes. Snorkel in
//               coral gardens, indulge in couples' spa treatments, and savor
//               romantic dinners on the beach under starlit skies.
//             </p>

//             <h3>4. Paris, France</h3>
//             <p>
//               The "City of Light" has long been synonymous with romance. Ascend
//               the Eiffel Tower for panoramic views, stroll hand-in-hand along
//               the Seine River, and explore world-class museums like the Louvre.
//               Don't forget to enjoy intimate café moments and picnics in
//               charming gardens.
//             </p>

//             <h3>5. Maldives</h3>
//             <p>
//               A haven of luxury and tranquility, the Maldives offers pristine
//               white-sand beaches and turquoise waters. Stay in lavish overwater
//               villas, enjoy private island picnics, and experience underwater
//               dining for a truly unforgettable honeymoon.
//             </p>

//             <h3>6. Kyoto, Japan</h3>
//             <p>
//               For couples seeking a blend of culture and serenity, Kyoto offers
//               a unique romantic experience. Visit ancient temples, stroll
//               through bamboo forests, and witness the breathtaking cherry
//               blossoms in spring. Immerse yourselves in traditional tea
//               ceremonies and stay in a ryokan for an authentic Japanese
//               experience.
//             </p>

//             <h3>7. Amalfi Coast, Italy</h3>
//             <p>
//               The stunning Amalfi Coast combines dramatic cliff-side villages
//               with the azure Mediterranean Sea. Explore charming towns like
//               Positano and Ravello, take boat trips to hidden coves, and indulge
//               in exquisite Italian cuisine and limoncello.
//             </p>

//             <h3>8. Maui, Hawaii</h3>
//             <p>
//               Maui offers a perfect blend of adventure and relaxation for
//               honeymooners. Watch the sunrise from Haleakala Crater, drive the
//               scenic Road to Hana, and snorkel in Molokini Crater. Enjoy luaus
//               on the beach and luxurious resorts for the ultimate Hawaiian
//               romance.
//             </p>

//             <h3>9. Queenstown, New Zealand</h3>
//             <p>
//               For adventure-loving couples, Queenstown provides a backdrop of
//               stunning natural beauty. Enjoy thrilling activities like bungee
//               jumping and skydiving, or opt for more relaxed experiences like
//               wine tasting tours and scenic lake cruises.
//             </p>

//             <h3>10. Seychelles</h3>
//             <p>
//               This archipelago in the Indian Ocean boasts some of the world's
//               most beautiful beaches and unique wildlife. Explore pristine
//               islands, go island-hopping, and enjoy secluded beaches. The
//               Seychelles offers the perfect blend of luxury and natural beauty
//               for an unforgettable honeymoon.
//             </p>

//             <p>
//               Whether you're dreaming of a tropical paradise, a cultural
//               exploration, or an adventurous getaway, these top 10 romantic
//               destinations offer something for every couple. Remember, the most
//               important aspect of your honeymoon is spending quality time
//               together and beginning your married life with beautiful memories.
//               Wherever you choose to go, make sure to immerse yourselves in the
//               local culture, try new experiences together, and take moments to
//               simply enjoy each other's company in these stunning settings.
//             </p>

//             <p>
//               Your honeymoon is a once-in-a-lifetime trip, so don't hesitate to
//               splurge on special experiences or accommodations that will make
//               your journey even more memorable. Many of these destinations offer
//               special packages or perks for honeymooners, so be sure to mention
//               that you're newlyweds when booking.
//             </p>

//             <p>
//               As you embark on this romantic adventure, remember that the most
//               precious souvenir you'll bring back is the collection of shared
//               moments and the deepened bond between you and your partner. Happy
//               travels and congratulations on your new life together!
//             </p>
//           </article>

//           <aside className="lg:w-1/3">
//             <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-semibold mb-4">
//                 Get Latest Updates
//               </h3>
//               <form className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block mb-1 font-medium">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block mb-1 font-medium">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPost;

import Image from "next/image";
import React from "react";

const BlogPost = () => {
  const destinations = [
    {
      name: "Venice, Italy",
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Bora Bora, French Polynesia",
      image:
        "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <>
      <header className="relative h-64 sm:h-96 mb-8">
        <img
          src="https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=1200&q=80"
          alt="Romantic sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center px-4">
            Top 10 Romantic Destinations
          </h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-12">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative h-64 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end justify-center p-4">
                <span className="text-white font-semibold text-center">
                  {dest.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <article className="prose prose-lg lg:prose-xl lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">
              Discover the Most Romantic Places for Your Honeymoon
            </h2>

            <p className="mb-8">
              Embarking on a honeymoon is a magical experience that marks the
              beginning of a lifelong journey together. It&apos;s a time to
              create unforgettable memories, indulge in romantic moments, and
              explore breathtaking destinations. To help you plan the perfect
              romantic getaway, we&apos;ve curated a list of the top 10 most
              enchanting destinations for newlyweds.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  1. Venice, Italy
                </h3>
                <img
                  src={destinations[0].image}
                  alt="Venice"
                  className="mb-4 h-96 object-cover w-full"
                />
                <p>
                  Known as the City of Love, Venice offers a unique blend of
                  romance and history. Glide through narrow canals on a gondola,
                  explore charming cobblestone streets, and share intimate
                  moments in picturesque piazzas. Don&apos;t miss the stunning
                  St. Mark&apos;s Basilica and a sunset view from the Rialto
                  Bridge. Wander through the vibrant markets, savor Italian
                  cuisine in cozy trattorias, and immerse yourself in the rich
                  cultural heritage that Venice has to offer. The enchanting
                  atmosphere of Venice makes it a perfect destination for
                  honeymooners seeking romance and adventure.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  2. Santorini, Greece
                </h3>
                <img
                  src={destinations[1].image}
                  alt="Santorini"
                  className="mb-4 h-96 object-cover w-full"
                />
                <p>
                  With its iconic white-washed buildings and blue-domed churches
                  set against the backdrop of the Aegean Sea, Santorini is a
                  paradise for couples. Enjoy world-famous sunsets in Oia, take
                  a wine tour in the island&apos;s vineyards, and relax on
                  unique red and black sand beaches. Stroll through the charming
                  villages of Fira and Imerovigli, discover the ancient ruins of
                  Akrotiri, and indulge in delicious Greek cuisine. The
                  breathtaking views, luxurious accommodations, and serene
                  ambiance make Santorini a top choice for a romantic honeymoon.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  3. Bora Bora, French Polynesia
                </h3>
                <img
                  src={destinations[2].image}
                  alt="Bora Bora"
                  className="mb-4 h-96 object-cover w-full"
                />
                <p>
                  For the ultimate tropical escape, Bora Bora offers
                  crystal-clear lagoons, overwater bungalows, and lush
                  landscapes. Snorkel in coral gardens, indulge in couples spa
                  treatments, and savor romantic dinners on the beach under
                  starlit skies. Take a boat tour around the island, explore the
                  vibrant marine life, and enjoy water sports like
                  paddleboarding and jet skiing. Bora Bora&apos;s serene beauty
                  and luxurious amenities provide the perfect setting for an
                  unforgettable honeymoon.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  4. Paris, France
                </h3>
                <img
                  src={destinations[3].image}
                  alt="Paris"
                  className="mb-4 h-96 object-cover w-full"
                />
                <p>
                  The City of Light has long been synonymous with romance.
                  Ascend the Eiffel Tower for panoramic views, stroll
                  hand-in-hand along the Seine River, and explore world-class
                  museums like the Louvre. Don&apos;t forget to enjoy intimate
                  café moments and picnics in charming gardens. Discover the
                  historic neighborhoods of Montmartre and Le Marais, visit the
                  magnificent Notre-Dame Cathedral, and indulge in exquisite
                  French pastries. Paris offers endless opportunities for
                  romantic experiences, making it an ideal destination for
                  honeymooners.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">5. Maldives</h3>
                <img
                  src={destinations[4].image}
                  alt="Maldives"
                  className="mb-4 h-96 object-cover w-full"
                />
                <p>
                  A haven of luxury and tranquility, the Maldives offers
                  pristine white-sand beaches and turquoise waters. Stay in
                  lavish overwater villas, enjoy private island picnics, and
                  experience underwater dining for a truly unforgettable
                  honeymoon. Snorkel and dive in the vibrant coral reefs, relax
                  with a couples spa treatment, and take a sunset cruise on a
                  traditional dhoni boat. The Maldives serene beauty and
                  exclusive resorts create an idyllic setting for a romantic and
                  luxurious honeymoon.
                </p>
              </div>

              {/* Add the remaining destinations here following the same pattern */}
            </div>

            <p className="mt-12">
              Whether you&apos;re dreaming of a tropical paradise, a cultural
              exploration, or an adventurous getaway, these top 10 romantic
              destinations offer something for every couple. Remember, the most
              important aspect of your honeymoon is spending quality time
              together and beginning your married life with beautiful memories.
              Wherever you choose to go, make sure to immerse yourselves in the
              local culture, try new experiences together, and take moments to
              simply enjoy each other&apos;s company in these stunning settings.
            </p>

            <p>
              Your honeymoon is a once-in-a-lifetime trip, so don&apos;t
              hesitate to splurge on special experiences or accommodations that
              will make your journey even more memorable. Many of these
              destinations offer special packages or perks for honeymooners, so
              be sure to mention that you&apos;re newlyweds when booking.
            </p>

            <p>
              As you embark on this romantic adventure, remember that the most
              precious souvenir you&apos;ll bring back is the collection of
              shared moments and the deepened bond between you and your partner.
              Happy travels and congratulations on your new life together!
            </p>
          </article>

          <aside className="lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">
                Get Latest Updates
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
