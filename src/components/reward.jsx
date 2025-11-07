import React from "react";
import {
  Award,
  Star,
  Trophy,
  Crown,
  Building2,
  Medal,
  Gem,
} from "lucide-react";

const Reward = () => {
  const mockAchievements = [
    {
      id: 1,
      title: "Best Real Estate Developer 2024",
      description:
        "Recognized for outstanding architectural design and customer satisfaction in luxury residential projects.",
      year: "2024",
      icon: Trophy,
      type: "Company",
    },
    {
      id: 2,
      title: "Innovation in Smart Homes",
      description:
        "Awarded for pioneering eco-smart home technology and sustainable infrastructure solutions.",
      year: "2023",
      icon: Gem,
      type: "Company",
    },
    {
      id: 3,
      title: "Leadership Excellence Award",
      description:
        "Presented to our CEO for visionary leadership and innovation in transforming urban spaces.",
      year: "2023",
      icon: Crown,
      type: "CEO",
    },
    {
      id: 4,
      title: "Top Infrastructure Firm",
      description:
        "Recognized for excellence in structural engineering and large-scale real estate execution.",
      year: "2022",
      icon: Building2,
      type: "Company",
    },
    {
      id: 5,
      title: "Sustainability Award",
      description:
        "Honored for integrating green building practices and reducing carbon footprint across projects.",
      year: "2022",
      icon: Medal,
      type: "Company",
    },
    {
      id: 6,
      title: "Customer Trust Recognition",
      description:
        "Acknowledged for our commitment to transparency, timely delivery, and customer satisfaction.",
      year: "2021",
      icon: Star,
      type: "Company",
    },
  ];

  // Individual award card
  const AwardCard = ({ achievement }) => {
    const Icon = achievement.icon;
    const isCEO = achievement.type === "CEO";

    return (
      <div
        className={`relative overflow-hidden rounded-2xl p-6 backdrop-blur-lg border transition-all duration-500
        ${
          isCEO
            ? "bg-linear-to-br from-lime-500/10 to-black border-lime-400/40 hover:border-lime-400/80 hover:shadow-lime-400/40"
            : "bg-white/5 border-gray-700 hover:border-lime-400/40 hover:shadow-lime-400/30"
        } hover:scale-[1.04] group`}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-lime-500/10 via-transparent to-transparent rounded-2xl blur-xl"></div>

        {/* Header */}
        <div className="flex items-start justify-between mb-5 relative z-10">
          <div>
            <span
              className={`text-xs font-bold uppercase tracking-widest ${
                isCEO ? "text-lime-400" : "text-gray-400"
              }`}
            >
              {isCEO ? "CEO Award" : "Company Award"}
            </span>
            <h3 className="text-2xl font-semibold text-white mt-1 leading-snug">
              {achievement.title}
            </h3>
          </div>
          <div
            className={`p-3 rounded-full ${
              isCEO
                ? "bg-lime-400/20 text-lime-400"
                : "bg-gray-600/20 text-gray-400"
            }`}
          >
            <Icon size={28} />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">
          {achievement.description}
        </p>

        {/* Year Tag */}
        <div className="relative z-10">
          <span className="text-xs font-semibold text-gray-400 border border-gray-600/50 px-2 py-1 rounded-full">
            {achievement.year}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="rewards"
      className="min-h-screen py-20 bg-black text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lime-400 uppercase">
            Our Achievements
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Celebrating milestones that reflect our dedication to innovation,
            sustainability, and excellence in every project we build.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockAchievements.map((achievement) => (
            <AwardCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reward;
