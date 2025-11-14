import React, { useRef, useEffect, useState, useCallback } from "react";
import { Bed, Bath, MapPin, X, Square, DollarSign, ExternalLink } from "lucide-react";

// ------------------- PROJECT DATA -------------------
const projects = [
  {
    id: 1,
    name: "Modern City Loft",
    description:
      "Stunning industrial-style loft in the heart of the tech district. Features exposed brick, high ceilings, and panoramic city views.",
    image:
      "https://images.unsplash.com/photo-1572044152504-f4b9679f1577?q=80&w=2942&auto=format&fit=crop",
    price: "950,000",
    location: "Downtown, Sector 4",
    beds: 2,
    baths: 2,
    size: 1250,
    link: "https://maps.app.goo.gl/listing1",
  },
  {
    id: 2,
    name: "Suburban Family Home",
    description:
      "A cozy, spacious four-bedroom house perfect for a growing family, located near top-rated schools and parks.",
    image:
      "https://images.unsplash.com/photo-1549634289-e13768b5774e?q=80&w=2942&auto=format&fit=crop",
    price: "620,000",
    location: "Greenwood Estates",
    beds: 4,
    baths: 3,
    size: 2800,
    link: "https://maps.app.goo.gl/listing2",
  },
  {
    id: 3,
    name: "Luxury Penthouse",
    description:
      "Exclusive top-floor residence with private elevator access, infinity pool, and 360-degree views of the coastline.",
    image:
      "https://images.unsplash.com/photo-1510511459019-5be7099edf10?q=80&w=2940&auto=format&fit=crop",
    price: "2,500,000",
    location: "Ocean View Heights",
    beds: 3,
    baths: 4,
    size: 3500,
    link: "https://maps.app.goo.gl/listing3",
  },
  {
    id: 4,
    name: "Coastal Bungalow",
    description:
      "Quaint seaside retreat just steps from the beach. Ideal for vacation rental income or a tranquil permanent residence.",
    image:
      "https://images.unsplash.com/photo-1559825481-12a839e995c1?q=80&w=2940&auto=format&fit=crop",
    price: "480,000",
    location: "Sunset Bay",
    beds: 2,
    baths: 1,
    size: 900,
    link: "https://maps.app.goo.gl/listing4",
  },
  {
    id: 5,
    name: "Downtown Studio Flat",
    description:
      "Efficient and chic studio in a vibrant neighborhood, featuring a modern kitchen and in-unit laundry.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f6b248464?q=80&w=2940&auto=format&fit=crop",
    price: "320,000",
    location: "The Metropole, Unit B",
    beds: 1,
    baths: 1,
    size: 550,
    link: "https://maps.app.goo.gl/listing5",
  },
  {
    id: 6,
    name: "Historic Farmhouse",
    description:
      "Beautifully preserved 19th-century farmhouse on five acres of land, fully renovated with modern amenities.",
    image:
      "https://images.unsplash.com/photo-1521737711867-ee1375d8d85e?q=80&w=2942&auto=format&fit=crop",
    price: "890,000",
    location: "Rural Plains, Acre 5",
    beds: 5,
    baths: 3,
    size: 3200,
    link: "https://maps.app.goo.gl/listing6",
  },
];

// ------------------- REUSABLE COMPONENTS -------------------

const Stat = ({ Icon, value, label }) => (
  <div className="flex items-center gap-2">
    <Icon className="text-blue-500" size={20} />
    <span className="font-semibold text-gray-700">{value}</span>
    <span className="text-gray-500 hidden sm:inline">{label}</span>
  </div>
);

const ProjectCard = ({ project, onSelectProject }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => onSelectProject(project)}
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer group overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-3 left-4 text-white text-2xl font-bold drop-shadow-md">
          ${project.price}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif truncate">
          {project.name}
        </h3>
        <div className="flex items-center text-gray-600 mb-3 text-sm">
          <MapPin size={16} className="mr-1 text-red-500" />
          <span className="truncate">{project.location}</span>
        </div>

        <div className="flex justify-between items-center text-sm border-t pt-3">
          <Stat Icon={Bed} value={project.beds} label="Beds" />
          <Stat Icon={Bath} value={project.baths} label="Baths" />
          <Stat Icon={Square} value={`${project.size}`} label="sqft" />
        </div>
      </div>
    </div>
  );
};

const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4 animate-fadeIn">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 sm:h-80 object-cover rounded-t-xl"
          />

          <div className="p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 font-serif">
              {project.name}
            </h2>

            <div className="flex items-center text-lg text-gray-700 mb-6">
              <MapPin size={20} className="mr-2 text-red-500" />
              <span>{project.location}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-blue-50 rounded-lg">
              <Stat Icon={DollarSign} value={`$${project.price}`} label="Price" />
              <Stat Icon={Bed} value={project.beds} label="Beds" />
              <Stat Icon={Bath} value={project.baths} label="Baths" />
              <Stat Icon={Square} value={`${project.size}`} label="Sq. Ft." />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:inquiry@realestate.com?subject=Inquiry about ${project.name}`}
                className="flex-1 flex justify-center items-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                <DollarSign size={20} /> Request Viewing
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-3 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
              >
                <ExternalLink size={20} /> View on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------- MAIN COMPONENT -------------------

const Projects = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setTitleVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 font-inter">
      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slideUp { animation: slideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-12 sm:mb-16 transition-all duration-1000 transform ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } font-serif`}
        >
          Featured <span className="text-blue-600">Real Estate</span> Listings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelectProject={openModal} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
