import React from "react";
import { MapPin } from "lucide-react";
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

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative  w-full min-h-screen pt-28 lg:pt-32 overflow-hidden"
        style={{
          backgroundImage: `url(${assets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-start">
          <div className="w-full lg:w-1/2 py-20">
            <div className="bg-white/5 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-tight text-lime-400 leading-tight">
                
              </h1>
              <h2 className="mt-2 text-2xl sm:text-4xl lg:text-6xl font-light uppercase tracking-widest text-white">
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-black"></div>

      </section>

      {/* get a home section */}
      <section className="relative bg-black py-16 z-10">
        <GetAHome />
      </section>


      {/* PROJECTS SECTION (now visually separate) */}
      <section className="relative bg-gray-100 z-20">
        <ProjectsSlider />
      </section>


      { /* why us section */ }
      <section className="relative z-10">
        <WhyUs />
      </section>

      {/* about us section */}
      <section className="relative z-10">
        <About />
      </section>

     



      {/* testimonial section */}
      <section className="relative z-10">
      < Testimonies />
      </section>

      {/*gallery section */}
      <section className="relative z-10">
        <GallerySection/>
      </section>



      {/* contact us section */}
      <section className="relative z-10">
        <Contacts />
      </section>

    </>
  );
};

export default Home;
