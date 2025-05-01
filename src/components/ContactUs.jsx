import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "./Footer";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "49ab5496-8884-4e2f-891b-0bb4468f6259");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  };

  return (
    <>
      <section className="py-12 px-6 mt-30 bg-gray-100">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                Fill the form and we will get back to you soon!
              </p>
              <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-2 rounded"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded"
                  name="email"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="border p-2 rounded resize-none"
                  name="message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2 bg-gray-200 p-8 flex flex-col justify-center text-center">
              <h1></h1>
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> 1234 Street Name, City, State
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@example.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 9876543210
              </p>
            </div>
          </div>
        </motion.div>
      </section>

    </>
    
  );
};

export default ContactUs;
