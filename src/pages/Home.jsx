import React, { useContext, useEffect } from "react";
import Carousel from "../components/Carousel";
import MidBanner from "../components/MidBanner";
const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Carousel />  
      <MidBanner/>   
    </div>
  );
};

export default Home;
