import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs"; // assuming you created it
import LandingPage from "./components/LandingPage";
import BlogCards from "./components/BlogCards";
import TeamSection from "./components/TeamSection";
import BlogDetails from "./components/BlogDetails";

const App = () => {
  return (
    <div className="font-family">
      <Navbar />

      <Routes>
        {/* Home route -> Only Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Blogs route */}
        <Route path="/blogs" element={<BlogCards />} />

        {/* Blog detail */}
        <Route path="/blogs/:id" element={<BlogDetails />} />

        {/* About Us route */}
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        <Route path="/team-section" element={<TeamSection />} />

        {/* Contact Us route */}
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
