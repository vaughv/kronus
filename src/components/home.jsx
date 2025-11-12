import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  const fadeOptions = {
    texts: [
      "Experienced Realtor and Consultant",
      "Real Estate Advisor",
      "Property Investment Specialist",
    ],
    cycleTime: 8000, // total time per image/text before next starts
    fadeDuration: 1.5, // how long fade transition lasts
  };

  const backgrounds = [
    assets.background1,
    assets.background2,
    assets.background3,
    assets.background4,
    assets.background5,
  ];

  const [index, setIndex] = useState(0);
  const [zoomDirection, setZoomDirection] = useState(true);

  // Parallax scroll motion
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // smooth movement

  // Crossfade + alternating zoom direction
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
      setZoomDirection((prev) => !prev);
    }, fadeOptions.cycleTime - fadeOptions.fadeDuration * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen pt-28 lg:pt-32 overflow-hidden">
        {/* Backgrounds with smooth fade + parallax + alternating zoom */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: zoomDirection ? 1 : 1.1 }}
              animate={{ opacity: 1, scale: zoomDirection ? 1.1 : 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: fadeOptions.cycleTime / 1000,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                y, // from useTransform
                backgroundImage: `url(${backgrounds[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>

          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative py-20 z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-xl">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: fadeOptions.fadeDuration,
                  ease: "easeInOut",
                }}
                className="text-amber-200 text-4xl md:text-6xl font-extrabold leading-tight h-32"
                style={{ textShadow: "0 4px 10px rgba(0,0,0,0.6)" }}
              >
                {fadeOptions.texts[index % fadeOptions.texts.length]}
              </motion.h1>
            </AnimatePresence>

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

      {/* Other sections */}
      <section className="relative bg-white py-5 z-10">
        <GetAHome />
      </section>

      <section className="relative bg-white z-10">
        <JourneyNumbers />
      </section>

      <section className="relative bg-white z-20">
        <ProjectsSlider />
      </section>

      <section className="relative z-10">
        <GallerySection />
      </section>

      <section className="relative z-10">
        <About />
      </section>

      <section className="relative z-10">
        <Testimonies />
      </section>

      <section className="relative z-10">
        <Contacts />
      </section>
    </>
  );
};

export default Home;
