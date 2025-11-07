import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Zap,
  Star,
  ShieldCheck,
  TrendingUp,
  Quote,
} from "lucide-react";
import Reward from "./reward";
import JourneyNumbers from "./JourneyNumbers";

// --- Data Section ---
const aboutData = {
  name: "Kronus Infratech",
  title: "Building Legacies, Not Just Structures.",
  motto: "Crafting Spaces that Inspire. Building Trust that Lasts.",
  tagline:
    "Where vision meets innovation — redefining modern real estate across India.",
  mission:
    "At Kronus Infratech, our mission is to create sustainable, luxurious, and future-ready homes that redefine comfort and elevate lifestyles. Every project we undertake is a commitment to quality, transparency, and innovation.",
  bio: "With decades of combined expertise, Kronus Infratech stands as a symbol of reliability and excellence in real estate development. Our portfolio spans premium residential, commercial, and infrastructure projects that showcase timeless design and engineering precision. Guided by integrity and driven by innovation, we’re building spaces that go beyond walls — we’re building dreams.",
  imageUrl:
    "https://placehold.co/1200x500/0d1117/30363d?text=Kronus+Infratech+Vision",
};

const valueProps = [
  {
    title: "Innovation & Design",
    description:
      "We blend aesthetic excellence with cutting-edge technology to build smart, elegant, and enduring spaces.",
    icon: Star,
    color: "text-lime-400",
  },
  {
    title: "Transparency & Integrity",
    description:
      "Every project is delivered with honesty, accountability, and complete transparency to earn our clients' trust.",
    icon: ShieldCheck,
    color: "text-teal-400",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction drives our success. We listen, adapt, and deliver beyond expectations.",
    icon: TrendingUp,
    color: "text-cyan-400",
  },
];

const founderVideos = [
  { 
    id: "VQk2vsGrcRw", 
    title: "Vision for the Future of Urban Living",
    description: "Discover our innovative approach to modern urban development and community building."
  },
  { 
    id: "fa7aWsQ5mhQ", 
    title: "Sustainability in Real Estate Innovation",
    description: "Learn about our commitment to sustainable development and eco-friendly construction."
  },
];

// --- Animated Counter Component ---
const AnimatedCounter = ({ endValue, unit, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const step = Math.min(1, progress / duration);
      const currentValue =
        unit === "Billion" ? (step * endValue).toFixed(1) : Math.floor(step * endValue);
      setCount(currentValue);
      if (step < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [endValue, unit]);

  return (
    <span className="text-4xl sm:text-5xl font-extrabold text-lime-400 block">
      {count}
      {suffix}
    </span>
  );
};

// --- Main About Component ---
const About = () => {
  return (
    <section className="min-h-screen bg-black text-gray-300 font-['Inter'] overflow-hidden">
      {/* HERO */}
      <div className="relative w-full h-[60vh] bg-black overflow-hidden">
        <img
          src={aboutData.imageUrl}
          alt="Kronus Vision"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-lime-400 drop-shadow-xl uppercase tracking-tight">
            {aboutData.title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl">
            {aboutData.motto}
          </p>
          <p className="mt-2 text-lg text-gray-400 italic">
            {aboutData.tagline}
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-lime-400 mb-6 border-l-4 border-lime-400 pl-4">
            About Us
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {aboutData.mission}
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            {aboutData.bio}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <img
            src="https://placehold.co/600x500/0d1117/94a3b8?text=Kronus+Team"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Journey Numbers Section */}
      <section className="relative z-10">
        <JourneyNumbers />
      </section>

      {/* VALUE PILLARS */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <h3 className="text-4xl font-bold text-lime-400 text-center mb-16">
          The Pillars of Our Success
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-lime-400 transition-all transform hover:-translate-y-1"
            >
              <prop.icon className={`w-12 h-12 ${prop.color} mb-4`} />
              <h4 className="text-2xl font-bold text-white mb-2">
                {prop.title}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>

       {/* achievements section */}

      <section className="relative z-10">
        <Reward />
      </section>

      {/* VIDEOS */}
      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-lime-400 mb-12">
            Watch Our Vision in Action
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founderVideos.map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-white/5 backdrop-blur-md hover:border-lime-400/50 transition-all duration-300"
              >
                <div
                  className="relative w-full pb-[56.25%]"
                >
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Insights and innovation from Kronus Infratech’s leadership.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
