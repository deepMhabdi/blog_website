import React from "react";
import nature from "../assets/nature.jpg";


const InsideBlog = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center bg-gray-100 py-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Beautiful Nature
        </h1>
      <div className="w-11/12 md:w-1/2 h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={nature} alt="nature" className="w-full h-full object-cover" />
      </div>

      <div className="w-11/12 md:w-1/2 mt-6 rounded-lg p-6">
        
        <p className="text-gray-600 text-base text-left">
          Explore the breathtaking beauty of the natural world with us. From
          lush forests to sparkling rivers, there's so much to discover!
          <br />
          <br />
          The charm of dense forests, the freshness of clear blue skies, and the
          peaceful sound of water flowing through streams create a relaxing
          experience that soothes the soul.
          <br />
          <br />
          Adventure seekers can find exciting hiking trails, while those seeking
          peace can relax amidst the tranquility of nature.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea culpa
          harum vel error officia modi cupiditate quae magnam nobis in incidunt
          sapiente dolor unde, eos, nihil itaque accusantium, voluptatibus
          autem.
        </p>
      </div>
  
    </section>
  );
};

export default InsideBlog;
