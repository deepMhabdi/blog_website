import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="bg-[#191c1e] text-white flex flex-col md:flex-row items-center justify-start px-6 md:px-10 py-10 mx-4 md:mx-15 mt-20">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 w-full mb-10 md:mb-0 md:pr-12 px-10 py-10"
      >
        <h2 className="text-4xl font-bold mb-4 px-6 md:px-12">Let's talk</h2>
        <p className="text-lg mb-6 px-6 md:px-12">
          Is there a challenge your organization or company needs help solving?
          We'd love to discuss it.
        </p>
        <div className="flex items-center space-x-4 px-6 md:px-12">
          <img
            src="/src/assets/person.jpg"
            alt="Andrew Terehin"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-sm text-gray-400">Managing Director, Partner</p>
            <p className="text-lg font-semibold">Andrew Terehin</p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 w-full space-y-4 px-6 md:px-12"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name*"
            className="bg-transparent border-b border-gray-600 outline-none py-2 w-full"
          />
          <input
            type="text"
            placeholder="Your Website or Blog URL"
            className="bg-transparent border-b border-gray-600 outline-none py-2 w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="E-mail*"
            className="bg-transparent border-b border-gray-600 outline-none py-2 w-full"
          />
          <input
            type="text"
            placeholder="Topic of Interestet"
            className="bg-transparent border-b border-gray-600 outline-none py-2 w-full"
          />
        </div>
        <textarea
          placeholder="Tell us something about your project"
          className="bg-transparent border-b border-gray-600 outline-none py-2 w-full h-24 resize-none"
        />

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input type="checkbox" className="accent-blue-500" /> I accept your{" "}
            <a href="#" className="underline text-white">
              Privacy Policy
            </a>
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-400 text-white font-medium px-6 py-2 rounded-full mt-4"
        >
          Send
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactSection;
