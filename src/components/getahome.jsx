import React, { useRef, useEffect, useState } from "react";

// Fade-in component using Intersection Observer
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
    <section className="relative w-full min-h-screen pt-28 lg:pt-32 overflow-hidden bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <FadeInText delay={0}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-lime-400 leading-tight">
            GET A HOME
          </h1>
        </FadeInText>

        <FadeInText delay={200}>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-widest text-white">
            THAT MAKES YOU PROUD
          </h2>
        </FadeInText>

        <FadeInText delay={400}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-300">
            Discover your dream home with Kronus Infratech. We blend modern
            design, quality construction, and prime locations to create spaces
            you'll love to live in. Explore our projects and find the perfect
            home that fits your lifestyle and budget.
          </p>
        </FadeInText>

        <FadeInText delay={600}>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="inline-flex items-center bg-red-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-red-500 transition"
            >
              CONTACT US
            </a>
          </div>
        </FadeInText>
      </div>

      {/* Shimmer Animated Taglines */}
      <div
        className="text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-tight leading-tight absolute bottom-20 left-0 w-full text-center text-transparent bg-clip-text bg-linear-to-r from-lime-300 via-lime-500 to-lime-300 bg-size-[200%_100%] opacity-20"
      >
        Your ideal home awaits
      </div>

      <div
        className="text-2xl sm:text-4xl lg:text-6xl font-light uppercase tracking-widest absolute bottom-1 left-0 w-full text-center text-transparent bg-clip-text bg-linear-to-r from-gray-300 via-white to-gray-300 bg-size-[200%_100%] animate-[shimmer_5s_ease-in-out_infinite_2.5s]"
      >
        seamless, sophisticated, and uniquely yours.
      </div>
    </section>
  );
};

export default GetAHome;
