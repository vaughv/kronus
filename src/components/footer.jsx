import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-200 text-gray-300 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-black tracking-wider mb-3">
            KRONUS INFRATECH
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Building spaces that define luxury, comfort, and trust.
            Your dream home, delivered with precision and passion.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-black hover:text-lime-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-black hover:text-lime-400 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-black hover:text-lime-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-black hover:text-lime-400 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-3 text-black text-sm">
            <li><a href="#home" className="hover:text-lime-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-lime-400 transition">Projects</a></li>
            <li><a href="#about" className="hover:text-lime-400 transition">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-lime-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-lime-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-black">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-black shrink-0 mt-1" />
              <span>KRONUS Infratech Pvt. Ltd.<br />Banashankari Stage 2, Bengaluru, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-black" />
              <a href="tel:+919319787895" className="hover:text-lime-400 transition">+91 93197 87895</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-black" />
              <a href="mailto:info@kronusinfratech.com" className="hover:text-lime-400 transition">
                info@kronusinfratech.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Call to Action */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Stay Updated</h3>
          <p className="text-sm text-black mb-4">
            Subscribe to get updates on our latest projects and offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-full bg-gray-800 text-white text-sm focus:outline-none border border-gray-700 focus:border-lime-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-200 text-black font-semibold rounded-r-full hover:bg-lime-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 mb-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} <span className="text-red-500 font-semibold">Kronus Infratech</span>. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed & Developed by <span className="text-red-500 font-semibold"><a href="https://knomodevelopers.com/">Knomo Developers</a></span></p>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute bottom-8 right-8 p-3 bg-lime-500 text-black rounded-full shadow-lg hover:bg-lime-400 transition transform hover:-translate-y-1"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
