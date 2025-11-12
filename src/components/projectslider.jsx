import React, { useState, useEffect, useRef } from "react";

// Fonts (add these in your global CSS or Tailwind config)
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@400;600&display=swap');

const mockProjects = [
  { id: 1, tag: "LAUNCHING PHASE 2", title: "KRONUS Welkin Park", location: "OFF SONIPAT ROAD", imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Phase+2+View" },
  { id: 2, tag: "PREMIUM UPPER FLOORS", title: "KRONUS Lakefront", location: "BELLANDUR", imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Lakefront+Towers" },
  { id: 3, tag: "LUXURY LIVING", title: "KRONUS Premia", location: "BANASHANKARI, STAGE 2", imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Premia+Highrise" },
  { id: 4, tag: "ULTRA LUXURY", title: "KRONUS Signature", location: "NORTH SONIPAT", imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Signature+Villas" },
  { id: 5, tag: "NEW LAUNCH", title: "KRONUS Meadows", location: "SECTOR 45", imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Meadows+Apartments" },
];

const loopedProjects = [...mockProjects, ...mockProjects];

const ProjectCard = ({ project }) => (
  <div className="shrink-0 p-4 w-80 md:w-96">
    <div className="relative rounded-xl overflow-hidden transform hover:scale-[1.03] transition duration-500 shadow-2xl group">
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:h-80 object-cover rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl"></div>

      <span className="absolute top-4 left-4 bg-amber-200 text-gray-900 font-bold px-3 py-1 text-xs rounded-full shadow-md z-10" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#d9b611', color: '#fffaf0' }}>
        {project.tag}
      </span>

      <div className="absolute bottom-4 left-4 z-20 text-left">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-[0_0_10px_rgba(184,115,51,0.8)] animate-[shimmerText_4s_ease-in-out_infinite]" style={{ fontFamily: 'Playfair Display, serif', color: '#d9b611' }}>
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base uppercase tracking-wide mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.location}
        </p>
      </div>
    </div>
  </div>
);

const ProjectsSlider = () => {
  const sliderRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame;
    const slider = sliderRef.current;
    if (!slider) return;
    const totalWidth = slider.scrollWidth / 2;
    const speed = 1;

    const animate = () => {
      if (!isHovered) {
        setTranslateX(prev => {
          const next = prev - speed;
          if (Math.abs(next) >= totalWidth) return 0;
          return next;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#fffaf0' }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12" style={{ fontFamily: 'Playfair Display, serif', color: '#d9b611' }}>
          OUR PROJECTS
        </h2>

        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={sliderRef}
            className="flex gap-4 w-max"
            style={{ transform: `translateX(${translateX}px)`, transition: "transform 0.016s linear" }}
          >
            {loopedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
