import React, { useEffect } from 'react'
import './App.css'
// Forever imports
import Header from './components/header'

// Pages imports
import Home from './components/home'
import Footer from './components/footer'
import Blog from './components/blog'

// Router (note: install react-router-dom if not present)
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // Initialize a simple IntersectionObserver to add 'is-visible' to sections
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealTargets = document.querySelectorAll('section, .reveal-me, .card, .rounded-2xl');
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionally unobserve so animation runs once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-amber-100 font-inter antialiased overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Footer />
          </>} />

          {/* Blog route only (SEO-friendly separate page) */}
          <Route path="/blog" element={<>
            <Blog />
            <Footer />
          </>} />

          {/* Fallback to home for unknown paths */}
          <Route path="*" element={<>
            <Home />
            <Footer />
          </>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
