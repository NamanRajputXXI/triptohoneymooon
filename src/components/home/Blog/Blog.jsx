import React, { useState, useMemo } from "react";
import blogPosts from "./BlogData";
import BlogCard from "./BlogCard";
import PaginationButton from "./PaginationButton";

const POSTS_PER_PAGE = 3;

const BlogSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { currentPosts, totalPages } = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return {
      currentPosts: blogPosts.slice(indexOfFirstPost, indexOfLastPost),
      totalPages: Math.ceil(blogPosts.length / POSTS_PER_PAGE),
    };
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="md:py-20 py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="mb-10 md:text-5xl text-2xl">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center space-x-2">
          <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </PaginationButton>
          {[...Array(totalPages).keys()].map((number) => (
            <PaginationButton
              key={number + 1}
              onClick={() => paginate(number + 1)}
              active={currentPage === number + 1}
            >
              {number + 1}
            </PaginationButton>
          ))}
          <PaginationButton
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
