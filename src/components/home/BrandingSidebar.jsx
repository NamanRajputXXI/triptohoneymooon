"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const BrandingSidebar = () => {
  return (
    <div className="bg-black pt-14 ">
      <h1 className="text-center  text-white text-4xl font-Briem font-bold">
        Our Clients
      </h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky   top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default BrandingSidebar;

const cards = [
  {
    url: "couple1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/productImages/dubai/dubaiCarousel1.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1576604303920-8cdf7b1ca1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbmV5bW9vbnxlbnwwfDF8MHx8fDA%3D",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1576604263328-99ac27310567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbmV5bW9vbnxlbnwwfDF8MHx8fDA%3D",
    title: "Title 4",
    id: 4,
  },
  {
    url: "couple1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1629309129085-7afc89bd81ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9uZXltb29ufGVufDB8MXwwfHx8MA%3D%3D",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1576604303920-8cdf7b1ca1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbmV5bW9vbnxlbnwwfDF8MHx8fDA%3D",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1576604263328-99ac27310567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbmV5bW9vbnxlbnwwfDF8MHx8fDA%3D",
    title: "Title 4",
    id: 4,
  },
];
