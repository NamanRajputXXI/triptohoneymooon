import BlogPost from "@/components/blog/BlogPost";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BlogPost />
      <Footer />
    </>
  );
};

export default page;
