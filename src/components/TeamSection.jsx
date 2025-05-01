import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import image2 from "../assets/shubham singh.jpg";
import image1 from "../assets/rohit tiwari.jpg"
import image3 from "../assets/aaditya singh.jpg"
import { motion } from "framer-motion";
import {fadeIn} from "../variants";


const teamMembers = [
  {
    name: "Rohit Tiwari",
    role: "Co-Founder & CEO",
    image: image1,
  },
  {
    name: "Shubham Singh",
    role: "CEO",
    image: image2,
  },
  {
    name: "Aaditya Singh",
    role: "HR",
    image: image3,
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-white mt-20">
      <motion.div 
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      
      className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Exceptional Team</h2>
        <p className="text-lg  text-gray-700 mb-12">
          Meet our outstanding team – a synergy of talent, creativity, and dedication,
          crafting success together.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover mb-3 shadow-md"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <div className="flex gap-3 mt-3 text-gray-600 text-lg">
                <FaXTwitter />
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
