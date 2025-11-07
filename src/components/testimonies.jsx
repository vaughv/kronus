import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// --- Mock Testimonial Data (Total 9) ---
const testimonials = [
  {
    id: 1,
    quote: "In a challenging market, my agent was relentless. They gave me the edge I needed to win the bid. Sharp and available.",
    client: "Kelly B.",
    location: "Young Professional Buyer, Downtown Loft",
    rating: 5,
    initial: "KB",
  },
  {
    id: 2,
    quote: "Eleanor is more than an agent; she's a true neighborhood advocate. Her insight was instrumental in finding our dream home and securing a great deal.",
    client: "The Johnson Family",
    location: "First-time Homebuyers, Eastside, CA",
    rating: 5,
    initial: "JF",
  },
  {
    id: 3,
    quote: "The strategic pricing and marketing plan developed resulted in multiple competing offers in the first 48 hours. The entire process was handled with professionalism and speed.",
    client: "Mark L.",
    location: "Investor, Luxury Properties",
    rating: 4,
    initial: "ML",
  },
  {
    id: 4,
    quote: "Transparent, ethical, and always available. Eleanor made what could have been a stressful cross-country relocation feel effortless. We found the perfect place for our family.",
    client: "Sarah & David K.",
    location: "Relocation Clients, The Suburbs",
    rating: 5,
    initial: "SD",
  },
  {
    id: 5,
    quote: "Excellent service and deep knowledge of the local market. Closed the deal faster than expected and minimized all the stress.",
    client: "Aisha T.",
    location: "Corporate Relocation, North Hills",
    rating: 5,
    initial: "AT",
  },
  {
    id: 6,
    quote: "Responsive, professional, and trustworthy. They guided us through every step of our investment purchase. Highly recommended to all serious buyers.",
    client: "Priya V.",
    location: "Local Investor, Rental Properties",
    rating: 5,
    initial: "PV",
  },
  {
    id: 7,
    quote: "Highly recommend! The level of dedication to finding the perfect home was unmatched. They truly put our family first.",
    client: "Ben C.",
    location: "Family Home Buyer, West County",
    rating: 5,
    initial: "BC",
  },
  {
    id: 8,
    quote: "Strategic negotiation skills secured us a fantastic price in a competitive environment. Couldn't have done it without them.",
    client: "Sofia R.",
    location: "High-End Seller, Beacon Heights",
    rating: 4,
    initial: "SR",
  },
  {
    id: 9,
    quote: "A true master of their craft. From initial consult to closing, everything was seamless and completely stress-free.",
    client: "David W.",
    location: "Retirement Planner, Condo Sale",
    rating: 5,
    initial: "DW",
  },
];

const totalTestimonials = testimonials.length;
const AUTOPLAY_INTERVAL = 3000; // 3 seconds
const CARDS_PER_VIEW = 3; // How many are visible on desktop/large screens

// Component to render star ratings
const StarRating = React.memo(({ rating }) => (
  <div className="flex text-amber-500">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 fill-current transition-colors duration-200 ${
          i < rating ? 'opacity-100' : 'opacity-30'
        }`} 
      />
    ))}
  </div>
));

// Component for a single testimonial card
// We are now passing card classes instead of inline styles
const TestimonialCard = React.memo(({ testimonial, cardClasses }) => (
  <div 
    className={`shrink-0 p-4 transition-transform duration-700 ease-in-out ${cardClasses}`}
  >
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl h-full flex flex-col justify-between">
            {/* Quote and Icon */}
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed min-h-[140px] mb-4 relative">
                <span className="absolute -top-6 -left-6 text-7xl font-serif text-gray-200 opacity-70 leading-none z-0">
                    &ldquo;
                </span>
                {testimonial.quote}
            </p>
            
            {/* Client Info */}
            <div className="mt-4 pt-4 flex flex-col items-start border-t border-gray-100">
                <StarRating rating={testimonial.rating} />
                
                <div className="flex items-center space-x-3 mt-3">
                    {/* Client Avatar Initial Badge */}
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {testimonial.initial}
                    </div>
                    
                    {/* Client Info */}
                    <div>
                        <p className="text-md font-semibold text-gray-900 leading-tight">
                            {testimonial.client}
                        </p>
                        <p className="text-sm text-gray-500 leading-tight">
                            {testimonial.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
));


const TestimonialsSlider = () => {
  // currentIndex tracks the index of the leftmost visible card (0 to 8)
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [userInteracting, setUserInteracting] = useState(false);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Calculate how many dot indicators we need (total testimonials)
  const totalDots = totalTestimonials;

  // Calculates the index after moving one step back (wraps around)
  const goToPrevious = useCallback(() => {
    setCurrentIndex(prevIndex => 
        prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  }, []);

  // Calculates the index after moving one step forward (wraps around)
  const goToNext = useCallback(() => {
    // Seamless looping
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalTestimonials);
  }, []);
  
  // Resets the autoplay timer
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // --- Autoplay Effect ---
  useEffect(() => {
    if (userInteracting) return;
    
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => resetTimeout();
  }, [currentIndex, userInteracting, goToNext]); 

  // --- Interaction Handlers (Swipe/Drag) ---

  const handleInteractionStart = (e) => {
    setUserInteracting(true);
    setIsDragging(true);
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    
    if (sliderRef.current) {
        sliderRef.current.style.cursor = 'grabbing';
    }
    resetTimeout(); // Pause autoplay immediately
  };

  const handleInteractionEnd = useCallback((e) => {
    if (!isDragging) {
        setUserInteracting(false);
        return;
    }

    setIsDragging(false);

    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragStartX - clientX;
    const threshold = 100; // Swipe distance threshold

    if (dragDistance > threshold) {
      goToNext(); 
    } else if (dragDistance < -threshold) {
      goToPrevious(); 
    }

    if (sliderRef.current) {
        sliderRef.current.style.cursor = 'grab';
    }

    // Restart autoplay timer after interaction period
    setTimeout(() => setUserInteracting(false), AUTOPLAY_INTERVAL);
  }, [isDragging, dragStartX, goToNext, goToPrevious]);

  // Attach global mouse handlers for drag release outside the card
  useEffect(() => {
    const handleMouseUp = (e) => handleInteractionEnd(e);
    const handleTouchEnd = (e) => handleInteractionEnd(e);

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragStartX, currentIndex, handleInteractionEnd]); 
  
  // Utility function for button navigation to pause autoplay temporarily
  const handleNavigationClick = () => {
    setUserInteracting(true);
    resetTimeout();
    setTimeout(() => setUserInteracting(false), AUTOPLAY_INTERVAL);
  };

  // 1. Calculate the total track width (e.g., 9 cards * 33.33% = 300%)
  const trackWidth = totalTestimonials * (100 / CARDS_PER_VIEW); 

  // 2. Calculate the total translateX needed for one card shift (e.g., 1 * 33.33% = 33.33%)
  const translateX = currentIndex * (100 / CARDS_PER_VIEW);
  
  // 3. Define the responsive classes for the card width
  const cardClasses = "w-full md:w-1/2 lg:w-1/3";

  // 4. Total track width and current translation
  const trackStyle = {
    width: `${trackWidth}%`,
    transform: `translateX(-${translateX}%)`
  };


  return (
    <section className="font-['Inter'] py-24 bg-gray-100 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-2">
            Trusted by Clients
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See the results of our commitment to excellence in every transaction, from first homes to investment properties.
          </p>
        </div>

        {/* Testimonial Slider Area */}
        {/* The relative container needs hidden overflow to clip the extra cards */}
        <div className="relative overflow-hidden">
          
          {/* Slider Track Container */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out cursor-grab"
            style={trackStyle} 
            
            // Interaction Events
            onMouseDown={handleInteractionStart}
            onTouchStart={handleInteractionStart}
            onTouchMove={(e) => { if (isDragging) { e.preventDefault(); }}}
            onMouseLeave={() => { if (!isDragging && userInteracting) setTimeout(() => setUserInteracting(false), AUTOPLAY_INTERVAL); }}
            onMouseEnter={() => { resetTimeout(); setUserInteracting(true); }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} cardClasses={cardClasses} /> 
            ))}
          </div>

          {/* Slider Navigation Buttons and Dots */}
          <div className="flex justify-center mt-10 space-x-8">
            
            <button
              onClick={() => { handleNavigationClick(); goToPrevious(); }}
              aria-label="Previous testimonial"
              className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator: Active dot corresponds to the currently visible leftmost card */}
            <div className="flex items-center space-x-2">
              {[...Array(totalDots)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleNavigationClick();
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-orange-500 scale-125 w-4' : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { handleNavigationClick(); goToNext(); }}
              aria-label="Next testimonial"
              className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSlider;