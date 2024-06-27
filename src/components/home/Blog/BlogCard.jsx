import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div
      key={post.id}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
