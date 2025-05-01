import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import nature from "../assets/nature.jpg";
import Footer from "./Footer";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BlogDetails = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const { blogTitle } = useParams(); // Get blog title from URL

  const blogTitles = [
    "Beautiful Nature",
    "Wildlife Wonders",
    "Mountain Escapes",
    "Tropical Paradise",
    "Forest Retreat",
  ];

  const blogContent = {
    "Beautiful Nature": {
      image: nature,
      content: `Explore the breathtaking beauty of the natural world with us. From lush forests to sparkling rivers, there's so much to discover! 
      The charm of dense forests, clear blue skies, and peaceful streams create a relaxing experience that soothes the soul.`,
    },
    "Wildlife Wonders": {
      image: nature,
      content: `Discover the fascinating world of wildlife! From majestic elephants to colorful birds, wildlife offers endless wonder and adventure.`,
    },
    "Mountain Escapes": {
      image: nature,
      content: `Escape to the serene mountains, where the cool breeze and scenic views offer a peaceful retreat from busy city life.`,
    },
    "Tropical Paradise": {
      image: nature,
      content: `Unwind in tropical locations with golden beaches, swaying palm trees, and crystal-clear waters.`,
    },
    "Forest Retreat": {
      image: nature,
      content: `Rejuvenate your spirit in quiet forests full of life, lush greenery, and natural harmony.`,
    },
  };

  const blog = blogContent[blogTitle] || blogContent["Beautiful Nature"];

  return (
    <>
      <section className="min-h-screen w-screen bg-gray-100 flex flex-col md:flex-row relative">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-md w-64 p-4 transform transition-transform duration-300 ease-in-out 
            ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
            fixed z-50 h-full top-0 left-0`}
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setShowSidebar(false)}
              className="text-gray-600 hover:text-red-500 text-xl transition duration-200"
            >
              ✖
            </button>
          </div>

          <h2 className="text-lg font-bold mb-4 text-gray-800">Other Blogs</h2>
          <ul className="space-y-2">
            {blogTitles.map((title, index) => (
              <li
                key={index}
                className="cursor-pointer text-blue-600 hover:underline"
                onClick={() => navigate(`/blog/${encodeURIComponent(title)}`)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Toggle Button */}
        <div className="w-full flex justify-start px-4 mt-4 z-40 fixed top-16 left-0">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="bg-white rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {showSidebar ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        {/* Main Blog Content */}
        <div className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 mt-20 md:mt-0">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
            {blogTitle || "Beautiful Nature"}
          </h1>
          <div className="w-full md:w-3/4 h-[300px] md:h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blogTitle} className="w-full h-full object-cover" />
          </div>

          <div className="w-full md:w-3/4 mt-6 bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-600 text-base">{blog.content}</p>
          </div>
        </div>
      </section>

    </>
  );
};

export default BlogDetails;
