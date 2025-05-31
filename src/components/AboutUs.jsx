import React, { useState } from "react";


import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const AboutUs = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl font-bold tracking-tighter">About Us</h1>
              <p className="text-xl text-gray-600 max-w-md">
                Take control of your financial future and achieve the life
                you've always dreamed of.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-auto md:h-auto rounded-xl overflow-hidden"
            >
              <img
                src={image11}
                alt="Business professional on phone"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-auto md:h-auto rounded-xl overflow-hidden"
            >
              <img
                src={image11}
                alt="Modern skyscraper"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
            variants={fadeIn("left", 0.2)}      
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            
            className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter">
                Discover a World of Investment Opportunities
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-600">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-38 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <div className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-2">
              SOLUTION
            </div>
            <h2 className="text-4xl font-bold tracking-tighter">
              Smart Investment Solutions
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[750px] rounded-xl overflow-hidden mb-16">
            <video
              id="background-video"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              playsInline
            >
              <source src={video10} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Stats */}
          <ScrollTrigger
            onEnter={() => setCounterStart(true)}
            onExit={() => counterStart(false)}
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">
                  {counterStart && <CountUp start={0} end={35}></CountUp>}k
                </div>
                <div className="text-gray-500">Investors</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">
                  {counterStart && <CountUp start={0} end={90}></CountUp>}+
                </div>
                <div className="text-gray-500">Assets</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">
                  {counterStart && <CountUp start={0} end={5000}></CountUp>}
                </div>
                <div className="text-gray-500">Objects</div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
