import React, { useState, useEffect } from "react";
import { MapPin, Maximize2, Bed, ChevronLeft, ChevronRight } from "lucide-react";


 

const mockProjects = [
  {
    id: 1,
    tag: "LAUNCHING PHASE 2",
    title: "KRONUS Welkin Park",
    location: "OFF SONIPAT ROAD",
    units: "1377 - 1897 SQ FT",
    bedrooms: "2.5 - 3 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Phase+2+View",
  },
  {
    id: 2,
    tag: "PREMIUM UPPER FLOORS",
    title: "KRONUS Lakefront",
    location: "BELLANDUR",
    units: "1341 - 2824 SQ FT",
    bedrooms: "2 - 4 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Lakefront+Towers",
  },
  {
    id: 3,
    tag: "LUXURY LIVING",
    title: "KRONUS Premia",
    location: "BANASHANKARI, STAGE 2",
    units: "2050 - 2400 SQ FT",
    bedrooms: "3 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Premia+Highrise",
  },
  {
    id: 4,
    tag: "ULTRA LUXURY",
    title: "KRONUS Signature",
    location: "NORTH SONIPAT",
    units: "3000 - 4500 SQ FT",
    bedrooms: "4 - 5 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Signature+Villas",
  },
  {
    id: 5,
    tag: "NEW LAUNCH",
    title: "KRONUS Meadows",
    location: "SECTOR 45",
    units: "1100 - 1500 SQ FT",
    bedrooms: "2 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Meadows+Apartments",
  },
  {
    id: 6,
    tag: "READY TO MOVE",
    title: "KRONUS Heights",
    location: "GURUGRAM EXT.",
    units: "1900 - 2500 SQ FT",
    bedrooms: "3 - 4 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Heights+Residency",
  },
  {
    id: 7,
    tag: "COMMERCIAL",
    title: "KRONUS Galleria",
    location: "CENTRAL BUSINESS DIST.",
    units: "Retail & Office Spaces",
    bedrooms: "N/A",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Galleria+Commercial",
  },
  {
    id: 8,
    tag: "VILLAS",
    title: "KRONUS Estates",
    location: "OUTSKIRTS",
    units: "4000+ SQ FT",
    bedrooms: "5 BHK",
    imageUrl: "https://placehold.co/600x400/1e293b/a7f3d0?text=Luxury+Estates",
  },
];

const ProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(window.innerWidth < 768 ? 1 : 3);

  // handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (mockProjects.length - cardsPerView + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (mockProjects.length - cardsPerView + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mockProjects.length - cardsPerView : prev - 1
    );
  };

  const ProjectCard = ({ project }) => (
    <div className="shrink-0 p-4 w-full md:w-1/3">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-lime-400 text-gray-900 font-bold px-3 py-1 text-xs rounded-full shadow-lg">
            {project.tag}
          </span>
          <span className="absolute bottom-4 right-4 bg-red-600 text-white font-bold px-4 py-1 text-sm rounded-full shadow-lg">
            ON GOING
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <MapPin size={14} className="mr-1 text-lime-600" />
            <span>{project.location}</span>
          </div>

          <div className="border-t border-gray-200 pt-4 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs uppercase text-gray-500 font-semibold mb-1">
                UNIT SIZE
              </span>
              <div className="flex items-center text-gray-800 font-bold">
                <Maximize2 size={16} className="mr-1 text-lime-500" />
                {project.units}
              </div>
            </div>

            <div>
              <span className="text-xs uppercase text-gray-500 font-semibold mb-1">
                BEDROOMS
              </span>
              <div className="flex items-center text-gray-800 font-bold">
                <Bed size={16} className="mr-1 text-lime-500" />
                {project.bedrooms}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between gap-4">
            <button className="w-1/2 py-2 text-sm font-semibold text-lime-600 border border-lime-600 rounded-lg hover:bg-lime-50 transition">
              ENQUIRE
            </button>
            <button className="w-1/2 py-2 text-sm font-semibold text-white bg-lime-600 rounded-lg hover:bg-lime-700 transition">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 md:py-24 bg-black"
       
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-white mb-12 text-center">
          OUR PROJECTS
        </h2>

        <div className="relative">
          {/* Slider wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-10000ms ease-linear"
              style={{
                transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
              }}
            >
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-900/50 text-white p-3 rounded-full hover:bg-gray-900 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="py-3 px-8 text-lg font-semibold text-white bg-lime-600 rounded-lg shadow-xl hover:bg-lime-700 transition transform hover:scale-[1.03]">
            View All Projects
          </button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-45 bg-linear-to-t from-black to-transparent"></div>

    </section>
  );
};

export default ProjectsSlider;
