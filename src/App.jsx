import React from "react";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import InsideBlog from "./components/InsideBlog";

const App = () => {
  return (
    <div className="font-family">
      <InsideBlog />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
