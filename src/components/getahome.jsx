import React, { useRef, useEffect, useState } from "react";

// Fade-in component
const FadeInText = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={className}>{children}</div>
    </div>
  );
};

const GetAHome = () => {
  return (
    <section className="relative w-full min-h-screen pt-28 lg:pt-32 overflow-hidden bg-gray-50">
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* GET A HOME with darker glow */}
        <FadeInText delay={0}>
          <h1 className="text-amber-300 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight h-32 tracking-tight drop-shadow-[0_0_25px_rgba(165,120,70,0.9)]">
            GET A HOME
          </h1>
        </FadeInText>

        <FadeInText delay={200}>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-widest text-gray-700">
            THAT MAKES YOU PROUD
          </h2>
        </FadeInText>

        <FadeInText delay={400}>
          <p className="mt-6 max-w-2xl sm:max-w-xl text-lg sm:text-xl text-gray-600">
            Discover your dream home with Kronus Infratech. We blend modern
            design, quality construction, and prime locations to create spaces
            you'll love to live in. Explore our projects and find the perfect
            home that fits your lifestyle and budget.
          </p>
        </FadeInText>

        <FadeInText delay={600}>
          <button className="mt-8 px-8 py-4 rounded-full bg-amber-300 text-gray-900 font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-300">
            Explore Projects
          </button>
        </FadeInText>
      </div>

      {/* Shimmer Animated Taglines with darker glow */}
      <div className="absolute bottom-14 left-0 w-full text-center">
        <h3 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight text-amber-300 drop-shadow-[0_0_25px_rgba(165,120,70,0.9)]">
          Your ideal home awaits
        </h3>
      </div>

      <div className="absolute bottom-10 left-0 w-full text-center">
        <h4 className="text-2xl sm:text-3xl lg:text-5xl font-light uppercase tracking-widest text-black opacity-90 drop-shadow-[0_0_12px_rgba(165,120,70,0.5)]">
          seamless, sophisticated, and uniquely yours.
        </h4>
      </div>
    </section>
  );
};

export default GetAHome;
