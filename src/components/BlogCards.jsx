import React from "react";
import Blogs from "./blogsData.json";
import { Link, useNavigate } from "react-router-dom"; // ✅ Combine the imports
import { FaUser } from "react-icons/fa";
import fertilityImage from "../assets/fertility.jpg";

const BlogCards = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/blogs/${title}`); 
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 mt-20 justify-evenly items-center gap-4">
        {Blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-3 cursor-pointer rounded-xl max-w-sm w-full mx-auto hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            onClick={() => handleClick(blog.title)} 
          >
            <div>
              <img
                src={blog.image}
                alt=""
                className="h-100 w-full object-cover rounded-2xl"
              />
            </div>
            <h3
              className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-center align-center"
              onClick={() => handleClick(blog.title)}
            >
              {blog.title}
            </h3>
            <p className="mb-4 text-gray-400 text-center">
              <FaUser className="inline-flex items-center mr-2"/>
              {blog.author}
            </p>
            <p className="text-sm text-gray-500 text-center">
              Published: {blog.published_date}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
