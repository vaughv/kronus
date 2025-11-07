import React, { useState, useEffect, useRef } from 'react';
import { Book, TrendingUp, Star, Zap } from 'lucide-react';

const AnimatedNumber = ({ value, duration = 2000, suffix = '', label = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value);
    const increment = end / (duration / 16); // Update every 16ms for smooth animation
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));

      if (start >= end) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center p-6">
      <div className="text-6xl font-bold text-lime-400 mb-2 tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-300 uppercase tracking-wider text-center">
        {label}
      </div>
    </div>
  );
};

const JourneyNumbers = () => {
  const stats = [
    {
      value: 20,
      suffix: '+',
      label: 'Industry Experience',
      Icon: Book
    },
    {
      value: 150,
      suffix: '+',
      label: 'Delivered Successfully',
      Icon: TrendingUp
    },
    {
      value: 100,
      suffix: '%',
      label: 'Client Happiness',
      Icon: Star
    },
    {
      value: 10,
      suffix: '+',
      label: 'Across India',
      Icon: Zap
    }
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-gray-900 to-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          OUR JOURNEY IN <span className="text-lime-400">NUMBERS</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-5 rounded-lg transition-all duration-500"></div>
              <div className="flex flex-col items-center">
                <stat.Icon className="w-12 h-12 text-lime-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyNumbers;