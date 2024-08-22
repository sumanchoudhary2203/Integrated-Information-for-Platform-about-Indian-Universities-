import React from 'react';
import { motion } from "framer-motion";
import StateCitySelector from './CllgSearch';


function Hero() {
  return (
    <div>
    <div className="h-[170vh]">
      <video src={"/assets/HeroVideo.mp4"} autoPlay loop muted className='z-0' />
      <motion.div
        className="HeroContent text-center  "
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
      >
        <h2 className="text-4xl font-bold mt-5 mb-5 ml-36">
          WELCOME TO UNIVINDIA COLLEGE SEARCH
        </h2>
        <p className="ml-40">
          This platform is your comprehensive guide to Indian universities.
          <br /> Explore details about various{" "}
          <span className="text-orange-400">universities</span> available{" "}
          <span className="text-orange-400">programs</span>, <br />
          and the admission process. Our goal is to help you make informed{" "}
          <br /> decisions about your education in India.
        </p>
        <StateCitySelector/>
      </motion.div>
      
    </div>
    
    </div>
  );
}

export default Hero;
