import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import BlogCards from "./components/BlogCards";
import BlogDetails from "./components/BlogDetails";
import FAQSection from "./components/FAQSection";
import Author from "./components/Author";



const App = () => {
  return (
    <div className="font-family bg-[#f5efda]">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<BlogCards />} />
        <Route path="/blogs/:blogTitle" element={<BlogDetails />} />
        <Route path="/articles" element={<BlogCards />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
