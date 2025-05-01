import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import BlogCards from "./components/BlogCards";
import TeamSection from "./components/TeamSection";
import BlogDetails from "./components/BlogDetails";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div className="font-family">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<BlogCards />} />
        <Route path="/blogs/:blogTitle" element={<BlogDetails />} />
        <Route path="/team-section" element={<TeamSection />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
