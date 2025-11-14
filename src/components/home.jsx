import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import ProjectsSlider from "./projectslider";
import assets from "../assets";
import JourneyNumbers from "./JourneyNumbers";
import GetAHome from "./getahome";
import WhyUs from "./whyus";
import Testimonies from "./testimonies";
import Contacts from "./contact";
import About from "./about";
import GallerySection from "./gallery";

const Home = () => {
  const typewriterOptions = {
    strings: [
      "Experienced Realtor and Consultant",
      "Real Estate Advisor",
      "Property Investment Specialist"
    ],
    autoStart: true,
    loop: true,
    delay: 50,
    deleteSpeed: 30,
  };

  const backgrounds = [
    assets.background1,
    assets.background2,
    assets.background3,
    assets.background4,
    assets.background5
  ];
  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen pt-28 lg:pt-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `url(${backgrounds[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
        </AnimatePresence>
        {/* Hero Content */}
        <div className="relative py-20 z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-xl">
            <h1
              className="text-amber-200 text-4xl md:text-6xl font-extrabold leading-tight h-32"
              style={{ textShadow: "0 4px 10px rgba(0,0,0,0.6)" }}
            >
              <Typewriter options={typewriterOptions} />
            </h1>
            <div className="py-20">
              <p className="mt-6 text-lg md:text-xl text-gray-200">
                Transforming environments with excellence, detail, and visionary design — from luxury interiors
                to modern workspace solutions.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg transition duration-300">
                  Explore Projects
                </button>
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 text-lg rounded-lg shadow-lg border border-white/20 transition duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-white"></div>
      </section>

      {/* get a home section */}
      <section className="relative bg-white py-5 z-10">
        <GetAHome />
      </section>

      {/* JourneyNumbers section */}
      <section className="relative bg-white z-10">
        <JourneyNumbers />
      </section>

      {/* PROJECTS SECTION (now visually separate) */}
      <section className="relative bg-white z-20">
        <ProjectsSlider />
      </section>

      {/*gallery section */}
      <section className="relative z-10">
        <GallerySection />
      </section>

      {/* about us section */}
      <section className="relative z-10">
        <About />
      </section>

      {/* testimonial section */}
      <section className="relative z-10">
        <Testimonies />
      </section>

      {/* contact us section */}
      <section className="relative z-10">
        <Contacts />
      </section>
    </>
  );
};

export default Home;
