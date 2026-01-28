import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.scrollBehavior = 'auto';
    document.body.scrollBehavior = 'auto';
    
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
  }, [pathname]);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.documentElement.scrollBehavior = 'smooth';
    document.body.scrollBehavior = 'smooth';
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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