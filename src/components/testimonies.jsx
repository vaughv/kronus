import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { id: 1, name: 'Aarav Sharma', role: 'Designer', image: 'https://randomuser.me/api/portraits/men/32.jpg', review: 'Absolutely loved the service! Professional and smooth experience throughout.' },
  { id: 2, name: 'Priya Mehta', role: 'Entrepreneur', image: 'https://randomuser.me/api/portraits/women/44.jpg', review: 'Amazing attention to detail. Highly recommended for premium projects!' },
  { id: 3, name: 'Rahul Verma', role: 'Engineer', image: 'https://randomuser.me/api/portraits/men/45.jpg', review: 'Exceptional quality and great communication from start to finish.' },
  { id: 4, name: 'Isha Kapoor', role: 'Marketing Lead', image: 'https://randomuser.me/api/portraits/women/68.jpg', review: 'They really understand client needs and go the extra mile every time.' },
  { id: 5, name: 'Vikram Saini', role: 'Freelancer', image: 'https://randomuser.me/api/portraits/men/28.jpg', review: 'Loved working with the team. Smooth process and beautiful output!' },
  { id: 6, name: 'Ananya Singh', role: 'Developer', image: 'https://randomuser.me/api/portraits/women/12.jpg', review: 'Delivered way beyond my expectations. Highly reliable and creative!' },
  { id: 7, name: 'Rohit Malhotra', role: 'Photographer', image: 'https://randomuser.me/api/portraits/men/67.jpg', review: 'Brilliant designs, perfect timing, and great overall coordination!' },
  { id: 8, name: 'Simran Kaur', role: 'Artist', image: 'https://randomuser.me/api/portraits/women/26.jpg', review: 'I felt heard and understood throughout the entire process. Loved it!' },
  { id: 9, name: 'Aditya Rao', role: 'Consultant', image: 'https://randomuser.me/api/portraits/men/70.jpg', review: 'Best experience ever. The team was super responsive and efficient.' },
  { id: 10, name: 'Neha Bansal', role: 'Content Creator', image: 'https://randomuser.me/api/portraits/women/71.jpg', review: 'Such elegant work! It’s rare to find this level of dedication these days.' },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col items-center gap-4 border border-gray-100 hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.6 }}
  >
    <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover" />
    <p className="text-gray-600 italic">“{testimonial.review}”</p>

    <div className="flex gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" />
      ))}
    </div>

    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
    <p className="text-sm text-gray-500">{testimonial.role}</p>
  </motion.div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, paused]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(index, index + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section
      className="py-16 bg-gray-50 relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Clients Say</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8">
          <button onClick={prevSlide} className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition">
            <ChevronLeft />
          </button>

          {/* ✅ FIXED DOT INDICATORS */}
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === Math.floor(index / 3) ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
