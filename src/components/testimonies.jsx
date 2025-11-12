import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Aarav Sharma", role: "Designer", image: "https://randomuser.me/api/portraits/men/32.jpg", review: "Absolutely loved the service! Professional and smooth experience throughout." },
  { id: 2, name: "Priya Mehta", role: "Entrepreneur", image: "https://randomuser.me/api/portraits/women/44.jpg", review: "Amazing attention to detail. Highly recommended for premium projects!" },
  { id: 3, name: "Rahul Verma", role: "Engineer", image: "https://randomuser.me/api/portraits/men/45.jpg", review: "Exceptional quality and great communication from start to finish." },
  { id: 4, name: "Isha Kapoor", role: "Marketing Lead", image: "https://randomuser.me/api/portraits/women/68.jpg", review: "They really understand client needs and go the extra mile every time." },
  { id: 5, name: "Vikram Saini", role: "Freelancer", image: "https://randomuser.me/api/portraits/men/28.jpg", review: "Loved working with the team. Smooth process and beautiful output!" },
  { id: 6, name: "Ananya Singh", role: "Developer", image: "https://randomuser.me/api/portraits/women/12.jpg", review: "Delivered way beyond my expectations. Highly reliable and creative!" },
  { id: 7, name: "Rohit Malhotra", role: "Photographer", image: "https://randomuser.me/api/portraits/men/67.jpg", review: "Brilliant designs, perfect timing, and great overall coordination!" },
  { id: 8, name: "Simran Kaur", role: "Artist", image: "https://randomuser.me/api/portraits/women/26.jpg", review: "I felt heard and understood throughout the entire process. Loved it!" },
  { id: 9, name: "Aditya Rao", role: "Consultant", image: "https://randomuser.me/api/portraits/men/70.jpg", review: "Best experience ever. The team was super responsive and efficient." },
  { id: 10, name: "Neha Bansal", role: "Content Creator", image: "https://randomuser.me/api/portraits/women/71.jpg", review: "Such elegant work! It’s rare to find this level of dedication these days." },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white h-[350px] rounded-2xl shadow-2xl p-6 text-center flex flex-col items-center gap-4 border border-gray-100 min-w-[280px] md:min-w-[300px] transition-transform duration-300 hover:scale-[1.03]">
    <img
      src={testimonial.image}
      alt={testimonial.name}
      className="w-20 h-20 rounded-full object-cover shadow-md"
    />
    <p className="text-gray-700 italic">“{testimonial.review}”</p>
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className="text-amber-300 drop-shadow-[0_0_4px_rgba(217,182,17,0.6)]"
        />
      ))}
    </div>
    <h3 className="font-playfair text-amber-400 text-xl md:text-2xl mt-2">
      {testimonial.name}
    </h3>
    <p className="text-gray-500 text-sm">{testimonial.role}</p>
  </div>
);

const Testimonials = () => {
  const containerRef = useRef(null);
  const edgePadding = 48; // padding from edges in px
  const speed = 0.5;

  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const [x, setX] = useState(-edgePadding); // start at -padding

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setX((prev) => {
        const container = containerRef.current;
        if (!container) return prev;

        const width = container.scrollWidth / 2; // half because duplicated
        const next = prev - speed;
        return next <= -width ? -edgePadding : next; // loop seamlessly
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-gray-800 font-serif">
          Trusted Voices. <span className="text-amber-500">Real Results.</span>
        </h2>
        <div
  ref={containerRef}
  className="flex gap-6 will-change-transform"
  style={{
    transform: `translateX(${x}px)`,
  }}
>
  {/* Left spacer */}
  <div style={{ minWidth: `${edgePadding}px`, flexShrink: 0 }} />

  {duplicatedTestimonials.map((testimonial, idx) => (
    <div key={idx} className="inline-block">
      <TestimonialCard testimonial={testimonial} />
    </div>
  ))}

  {/* Right spacer */}
  <div style={{ minWidth: `${edgePadding}px`, flexShrink: 0 }} />
</div>

      </div>
    </section>
  );
};

export default Testimonials;
