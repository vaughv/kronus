import React, { useEffect } from 'react';
import { MapPin, TrendingUp, Handshake, ChevronRight, Briefcase } from 'lucide-react';

// Data for the "Why Choose Us" features
const features = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Proprietary AI & Predictive Analytics",
    description:
      "We don't guess—we calculate. We leverage proprietary AI tools for real-time trend forecasting and asset valuation, ensuring sellers maximize returns and buyers secure profitable acquisitions.",
    iconColor: "text-red-500",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Hyper-Local Market Mastery",
    description:
      "Our expertise goes beyond city lines. We provide block-by-block knowledge on schools, future municipal developments, and micro-market dynamics to inform your strategic decision-making.",
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Holistic, Long-Term Partnership",
    description:
      "Our relationship extends far past closing. We offer post-sale support, provide vetted vendor lists, and deliver long-term portfolio counsel to sustain your investment success.",
    iconColor: "text-teal-500",
  },
];

// Reusable Feature Card
const FeatureCard = ({ feature, index }) => {
  const { icon: Icon, title, description, iconColor } = feature;
  const desktopMarginClass =
    index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-32" : "lg:mt-0";

  return (
    <div
      className={`w-full ${desktopMarginClass} fade-in-staggered`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col items-start h-full transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
        <div className={`p-4 rounded-full ${iconColor} bg-white mb-6 shadow-md`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

        <button
          className={`mt-6 flex items-center text-sm font-semibold transition-colors duration-200 ${iconColor}`}
        >
          Explore Detail <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

// Main Component
const WhyUs = () => {
  useEffect(() => {
    // Intersection observer for fade-in scroll animation
    const elements = document.querySelectorAll(".fade-in-staggered");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>

      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center py-20 px-4 sm:px-8 font-sans">
        <div className="w-full max-w-7xl">
          {/* Trust Section */}
          <div className="text-center mb-4">
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-500">
              TRUSTED BY THE TOP TIER
            </p>
          </div>

          {/* Header Section */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="text-6xl font-black text-gray-900 tracking-tighter leading-snug">
              Why Our Clients Choose{" "}
              <span className="text-orange-600">Excellence</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              We fuse deep market wisdom with cutting-edge{" "}
              <span className="italic">PropTech</span> and ethical partnership to
              deliver superior, predictable results for every client.
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-500">
              Proudly Ranked <span className="italic">Top 1%</span> in Local Sales
              Volume for the last five consecutive years.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>

          {/* Call-to-Action Section */}
          <div className="mt-24 bg-gray-900 p-10 rounded-2xl text-center shadow-2xl">
            <h3 className="text-4xl font-black text-white mb-4">
              Your Next Investment Awaits.
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Ready to take the first step toward maximizing your portfolio?
              Schedule a confidential, private consultation with our lead
              strategist.
            </p>
            <button
              className="flex items-center justify-center mx-auto bg-orange-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-700 hover:scale-[1.03] transform text-lg uppercase tracking-wider"
            >
              <Briefcase className="w-5 h-5 mr-3" />
              Start Your Private Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
