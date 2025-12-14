// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const { isDarkMode } = useTheme();

  // Auto scroll to top INSTANTLY when route changes (NO visible scroll animation)
  useEffect(() => {
    // Disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = 'instantly';
    
    // Jump to top instantly
    window.scrollTo(0, 0);
    
    // Re-enable smooth scrolling after a short delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'instantly';
    }, 100);
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

        html {
          scroll-behavior: smooth;
        }

        button:hover {
          box-shadow: 0 0 20px rgba(13, 148, 136, 0.5);
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;