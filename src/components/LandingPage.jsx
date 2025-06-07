import React, { useState } from "react";
import image from "../assets/banner.jpg";
import { PiArrowBendUpRightLight } from "react-icons/pi";
import BlogCards from "./BlogCards";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ContactUs from "./ContactUs";
import FAQSection from "./FAQSection";
import Author from "./Author";

const Banner = () => {
  const [showNav, setShowNav] = useState(false);

  const navItems = [{ path: "/blogs", link: "Blogs" }];

  return (
    <>
      <section className="px-6 md:px-10 py-10 mx-4 md:mx-15 -mt-10 mb-20">
        <div className="overflow-hidden rounded-3xl">
          <div className="relative">
            <img
              src={image}
              alt="Featured blog post"
              className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[675px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white">
              <div className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xl font-medium backdrop-blur-sm">
                Featured
              </div>
              <h1 className="mb-3 text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
                Breaking Into Product Design:
                <br className="hidden sm:block" />
                Advice from Untitled Founder, Frankie
              </h1>
              <p className="mb-7 max-w-5xl text-xs sm:text-xl md:text-2xl text-white/80 hidden sm:block">
                Let's get one thing out of the way: you don't need a fancy
                Bachelor's Degree to get into Product Design. We sat down with
                Frankie Selkirk to talk about gate-keeping in product design and
                how anyone can get into this growing industry.
              </p>
            </div>

            {showNav && (
              <ul className="absolute top-full right-4 bg-white/90 p-4 rounded-md shadow-md mt-2 z-10 text-black">
                {navItems.map(({ path, link }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "font-bold underline"
                          : isPending
                          ? "opacity-50"
                          : ""
                      }
                    >
                      {link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <Author />
      <section className="container mx-auto mb-7">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-5 text-3xl font-semibold px-10 mt-10 text-center justify-center"
        >
          Check our articles on sexual wellness
          <p className="mt-4 text-lg text-gray-600 px-6 md:px-12">
            Sexual wellness is about more than just physical intimacy — it's
            about connection, consent, and confidence. Our goal is to break
            taboos, spark conversations, and promote healthy, respectful
            relationships for all.
          </p>
        </motion.h2>
      </section>

      <BlogCards />

      <ContactUs />
    </>
  );
};

export default Banner;
