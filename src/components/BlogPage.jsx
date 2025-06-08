import React, { useEffect, useState } from "react";
import BlogCards from "../components/BlogCards";
import Blogheader from "../components/Blogheader";

const Blogpage = () => {
  return (
    <>
      <Blogheader/>
      <BlogCards />
   </>
  );
};

export default Blogpage;
