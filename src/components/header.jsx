import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navItems = [
  { name: 'HOME', to: '/' },
  { name: 'PROJECTS', to: '#projects' },
  { name: 'ABOUT', to: '#about' },
  { name: 'BLOG', to: '/blog' },
  { name: 'GALLERY', to: '#gallery' },
  { name: 'CONTACT', to: '#contact' },
];

// small top pills (styled to match Figma)
const TopPills = () => (
  <div className="absolute inset-x-0 top-3 pointer-events-none z-40 bg-white/40 backdrop-blur-sm py-1  ">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center pointer-events-auto">
      <div className=" text-black text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200 hover:bg-white ">
        <span className="font-medium">Call Us:</span>
        <span className="ml-2">+91 9324XXXXXX</span>
      </div>
      <div className=" text-black text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200 hover:bg-white ">
        <span className="font-medium">Email us:</span>
        <span className="ml-2">example@gmail.com</span>
      </div>
    </div>
  </div>
);

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // For mobile menu position
  const [setMenuPos] = useState({ top: 0, left: 0, width: 0 });

  const handleMenuOpen = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPos({ top: rect.bottom + window.scrollY, left: rect.left, width: rect.width });
    setOpen(true);
  };

  return (
    <div className={`relative z-50`}>
      <TopPills />

      <div className={`max-w-7xl mx-auto px-4 py-15 flex items-center justify-between`}>
        {/* Logo - oval style like Figma */}
        <div className={`flex items-center justify-between w-full py-4 rounded-3xl bg-clip-padding backdrop-filter ${scrolled ? 'fixed top-0 left-0 right-0 bg-white/80 shadow-lg transition-all duration-300' : 'bg-white-700 bg-opacity-90'} `} style={scrolled ? {zIndex: 1000} : {}}>
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className=" rounded-full px-auto py-auto shadow-sm flex items-center">
              <img src='logonobg1.png' alt='Kronus Logo' className='w-50 h-auto'/>
            </div>
          </Link>

          {/* Centered nav links for large screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((n) => (
              n.to.startsWith('/') ? (
                <Link
                  key={n.name}
                  to={n.to}
                  className={`text-white/90 hover:text-gray-400 text-sm font-semibold uppercase tracking-widest hover:backdrop-blur-2xl transition px-3 py-2 rounded-md ${location.pathname === n.to ? 'border-b-2 border-white' : ''}`}
                >
                  {n.name}
                </Link>
              ) : (
                <a
                  key={n.name}
                  href={n.to}
                  className="text-white/90 hover:text-gray-400 text-sm font-semibold uppercase tracking-widest hover:backdrop-blur-2xl transition px-3 py-2 rounded-md"
                >
                  {n.name}
                </a>
              )
            ))}
          </div>

          {/* Right side - contact CTA / mobile hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-red-500 transition"
            >
              Contact Us
            </a>

            {/* Mobile hamburger - circular pill */}
            <button
              onClick={handleMenuOpen}
              className="lg:hidden bg-white/90 p-3 rounded-full shadow-md border border-gray-200"
              aria-expanded={open}
              aria-label="Open menu"
            ><img src='https://icon-library.com/images/free-hamburger-menu-icon/free-hamburger-menu-icon-6.jpg' alt='Menu Icon' className='h-6 w-auto'/>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="lg:hidden fixed bg-white/95 backdrop-blur-md z-1000 rounded-xl shadow-2xl border border-gray-200"
          style={{ top: '80px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '400px' }}
        >
          <div className="px-6 py-6 flex flex-col items-center space-y-4">
            {navItems.map((n) => (
              n.to.startsWith('/') ? (
                <Link
                  key={n.name}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-black text-lg font-semibold uppercase hover:text-red-600 transition-colors"
                >
                  {n.name}
                </Link>
              ) : (
                <a
                  key={n.name}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className="text-black text-lg font-semibold uppercase hover:text-red-600 transition-colors"
                >
                  {n.name}
                </a>
              )
            ))}
            <div className="pt-2 border-t border-black/10 w-full flex flex-col items-center">
              <a href="tel:+919224XXXXXX" className="flex items-center gap-2 text-black/90">
                <Phone size={16} /> <span>+91-9224XXXXXX</span>
              </a>
              <a href="mailto:devops@gmail.com" className="flex items-center gap-2 mt-2 text-black/90">
                <Mail size={16} /> <span>devops@gmail.com</span>
              </a>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-full"
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none w-full">
      {/* header uses pointer-events-none at container level so inner interactive elements opt-in */}
      <div className="pointer-events-auto w-full">
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;