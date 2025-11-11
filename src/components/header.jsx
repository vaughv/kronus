import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';

const navItems = [
  { name: 'HOME', to: '/' },
  { name: 'PROJECTS', to: '#projects' },
  { name: 'ABOUT', to: '#about' },
  { name: 'BLOG', to: '/blog' },
  { name: 'GALLERY', to: '#gallery' },
  { name: 'CONTACT', to: '#contact' },
];

// small top pills (styled to match Figma)
const TopPills = ({ scrolled }) => (
  <div className={`absolute py-4 inset-x-0 top-0 pointer-events-none  transition-all duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center pointer-events-auto">
      <a href="tel:+919324XXXXXX" className="text-black text-xs px-3 py-1 rounded-full shadow-sm border bg-white/80 border-gray-200 hover:bg-white transition-colors flex items-center gap-2">
        <Phone size={14} />
        <span className="font-medium">+91 9324XXXXXX</span>
      </a>
      <a href="mailto:example@gmail.com" className="text-black text-xs px-3 py-1 rounded-full shadow-sm border bg-white/80 border-gray-200 hover:bg-white transition-colors flex items-center gap-2">
        <Mail size={14} />
        <span className="font-medium">example@gmail.com</span>
      </a>
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

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`relative z-50`}>
      <TopPills scrolled={scrolled} />

      <div className={`w-full px-5 py-15 flex items-center justify-between ${scrolled ? 'bg-slate-200 shadow-lg h-8' : ''} transition-all duration-300`}>
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center">
            <img src='logonobg1.png' alt='Kronus Logo' className='w-60 h-auto '/>
          </Link>

          {/* Centered nav links for large screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((n) => (
              n.to.startsWith('/') ? (
                <Link
                  key={n.name}
                  to={n.to}
                  className={`text-black backdrop-blur-lg hover:text-gray-400 text-sm font-semibold uppercase tracking-widest hover:backdrop-blur-2xl transition px-3 py-2 rounded-md ${location.pathname === n.to ? 'border-b-2 border-white' : ''}`}
                >
                  {n.name}
                </Link>
              ) : (
                <a
                  key={n.name}
                  href={n.to}
                  className="text-black backdrop-blur-lg hover:text-gray-400 text-sm font-semibold uppercase tracking-widest hover:backdrop-blur-2xl transition px-3 py-2 rounded-md"
                >
                  {n.name}
                </a>
              )
            ))}
          </div>
          

          {/* Right side - contact CTA / mobile hamburger */}
          <div className="flex items-center gap-4">
            <a>
              <button className="bg-amber-200 hover:bg-amber-600 text-black text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-md transition hidden lg:block ">
                contact us
              </button>
            </a>
            {/* Mobile hamburger - circular pill */}
            <button
              onClick={handleMenuOpen}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 transform ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>
            <nav className="flex-1">
              <div className="space-y-3">
                {navItems.map((n) => (
                  n.to.startsWith('/') ? (
                    <Link
                      key={n.name}
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {n.name}
                    </Link>
                  ) : (
                    <a
                      key={n.name}
                      href={n.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {n.name}
                    </a>
                  )
                ))}
              </div>
            </nav>
            <div className="pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <a href="tel:+919224XXXXXX" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+91-9224XXXXXX</span>
                </a>
                <a href="mailto:devops@gmail.com" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>devops@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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