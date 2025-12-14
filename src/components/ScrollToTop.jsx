// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const { isDarkMode } = useTheme();

  // Auto scroll to top INSTANTLY when route changes (ZERO animation)
  useEffect(() => {
    // Set to auto (instant) for route changes
    document.documentElement.scrollBehavior = 'auto';
    document.body.scrollBehavior = 'auto';
    
    // Jump to top instantly without any animation
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Keep it auto for page navigation
  }, [pathname]);

  // Show/hide scroll button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top when button is clicked
  const scrollToTop = () => {
    // Enable smooth only for button click
    document.documentElement.scrollBehavior = 'smooth';
    document.body.scrollBehavior = 'smooth';
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 animate-fade-in ${
            isDarkMode
              ? 'bg-teal-600 hover:bg-teal-700 text-white'
              : 'bg-teal-600 hover:bg-teal-700 text-white'
          }`}
          title="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }

        /* Default: NO smooth scrolling (instant for page navigation) */
        html {
          scroll-behavior: auto;
        }

        body {
          scroll-behavior: auto;
        }

        /* Smooth scrolling only when needed */
        html.smooth-scroll {
          scroll-behavior: smooth;
        }

        body.smooth-scroll {
          scroll-behavior: smooth;
        }

        /* Optional: Add a subtle glow effect on hover */
        button:hover {
          box-shadow: 0 0 20px rgba(13, 148, 136, 0.5);
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;