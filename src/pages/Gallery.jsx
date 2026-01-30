import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Gallery = () => {
  const { isDarkMode } = useTheme();
  const cardsRef = useRef([]);
const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryImages = [
    '/images/Gallery/Inauguration.png',
    '/images/Gallery/Physio Nameplate.jpeg',
    '/images/Gallery/Physio Exterior.jpeg',
    '/images/Gallery/Physio.png',
    '/images/Gallery/Physio Interior 1.jpeg',
    '/images/Gallery/Physio Interior 2.jpeg',
    '/images/Gallery/Doctor cabin.jpeg',
    '/images/Gallery/Waiting Area.JPG',
    '/images/Gallery/Proud moments.JPG',
    '/images/Gallery/Yoga.jpeg',
    '/images/Gallery/Pediatric Rehab.png',
  ];

  const scrollImages = [
    { src: '/images/Gallery/1.JPG', alt: 'Gallery Image 1' },
    { src: '/images/Gallery/2.JPG', alt: 'Gallery Image 2' },
    { src: '/images/Gallery/3.JPG', alt: 'Gallery Image 3' },
    { src: '/images/Gallery/4.JPG', alt: 'Gallery Image 4' },
    { src: '/images/Gallery/5.png', alt: 'Gallery Image 5' },
    { src: '/images/Gallery/6.JPG', alt: 'Gallery Image 6' },
    { src: '/images/Gallery/7.JPG', alt: 'Gallery Image 7' },
    { src: '/images/Gallery/8.JPG', alt: 'Gallery Image 8' },
    { src: '/images/Gallery/9.JPG', alt: 'Gallery Image 9' },
    { src: '/images/Gallery/10.JPG', alt: 'Gallery Image 10' },
    { src: '/images/Gallery/11.JPG', alt: 'Gallery Image 11' },
  ];

  const imageClasses = [
    'slower',
    'faster',
    'slower vertical',
    'slower slower-down',
    '',
    'slower',
    'faster1',
    'slower slower2',
    '',
    'slower',
    'slower last',
  ];

  const cardItems = [
    {
      id: 1,
      title: 'Physiotherapy Sessions',
      subtitle: 'Professional Facilities',
      description: 'State-of-the-art physiotherapy sessions with expert therapists.',
      image: galleryImages[0],
      type: 'image'
    },
    {
      id: 2,
      title: 'Rehabilitation Program',
      subtitle: 'Professional Facilities',
      description: 'Comprehensive rehabilitation programs designed for recovery.',
      image: galleryImages[1],
      type: 'image'
    },
    {
      id: 3,
      title: 'Fitness Training',
      subtitle: 'Professional Facilities',
      description: 'Modern fitness equipment and professional training sessions.',
      image: galleryImages[2],
      type: 'image'
    },
    {
      id: 4,
      title: 'Wellness Center',
      subtitle: 'Professional Facilities',
      description: 'Complete wellness solutions for your health and fitness.',
      image: galleryImages[3],
      type: 'image'
    },
    {
      id: 5,
      title: 'Exercise Programs',
      subtitle: 'Professional Facilities',
      description: 'Customized exercise programs tailored to your needs,Complete wellness solutions for your health and fitness,Complete wellness solutions for your health and fitness.',
      image: galleryImages[4],
      type: 'image'
    },
    {
      id: 6,
      title: 'Medical Services',
      subtitle: 'Professional Facilities',
      description: 'Professional medical consultations and services available.',
      image: galleryImages[5],
      type: 'image'
    },
    {
      id: 7,
      title: 'Health Clinic',
      subtitle: 'Professional Facilities',
      description: 'Dedicated health clinic with experienced professionals.',
      image: galleryImages[6],
      type: 'image'
    },
    {
      id: 8,
      title: 'Therapy Sessions',
      subtitle: 'Professional Facilities',
      description: 'Various therapy sessions for holistic health improvement.',
      image: galleryImages[7],
      type: 'image'
    },
    {
      id: 9,
      title: 'Recovery Programs',
      subtitle: 'Professional Facilities',
      description: 'Specialized recovery programs for injury rehabilitation.',
      image: galleryImages[8],
      type: 'image'
    },
    {
      id: 10,
      title: 'Clinic Gallery',
      subtitle: 'Professional Facilities',
      description: 'Explore our state-of-the-art rehabilitation center facilities.',
      image: galleryImages[9],
      type: 'image'
    },
    {
      id: 11,
      title: 'Clinic Gallery',
      subtitle: 'Professional Facilities',
      description: 'Explore our state-of-the-art rehabilitation center facilities.',
      image: galleryImages[10],
      type: 'image'
    },
    {
      id: 12,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/12.mp4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 13,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/13.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 14,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/14.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 15,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/15.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 16,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/16.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 17,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/17.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 18,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/18.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 19,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/19.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
    {
      id: 20,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/20.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
        {
      id: 21,
      title: 'Rehab Exercise Demo',
      subtitle: 'Professional Facilities',
      description: 'Live physiotherapy exercise demonstration.',
      thumbnail: '/Thumbnail/Thumbnail1.JPG',   // ✅ THUMBNAIL
      videoSrc: '/videos/21.MP4',          // ✅ VIDEO FILE
      type: 'video'
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    cards.forEach(card => {
        if (card) {
            card.classList.remove('visible');
            card.style.transitionDelay = ''; 
        }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cards.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 40}ms`;
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        if (card) {
            observer.unobserve(card);
        }
      });
    };
  }, [isDarkMode]);

const handleCardMediaClick = (e, item) => {
  e.stopPropagation();
  setSelectedMedia(item);
};
const handleScrollImageClick = (imageSrc) => {
  setSelectedMedia({
    type: "image",
    image: imageSrc,
  });
};

  const handleCardToggle = (e, index) => {
    e.preventDefault();
    const card = cardsRef.current[index];
    const cardsContainer = document.querySelector('.cards');
    
    let isShowing = false;

    if (card.classList.contains('show')) {
      isShowing = true;
    }

    if (cardsContainer.classList.contains('showing')) {
      const showingCard = document.querySelector('div.card.show');
      if (showingCard) {
        showingCard.classList.remove('show');
      }

      if (isShowing) {
        cardsContainer.classList.remove('showing');
      } else {
        const zindex = parseInt(card.style.zIndex || 100) + 1;
        card.style.zIndex = zindex;
        card.classList.add('show');
      }
    } else {
      cardsContainer.classList.add('showing');
      const zindex = parseInt(card.style.zIndex || 100) + 1;
      card.style.zIndex = zindex;
      card.classList.add('show');
    }
  };


  return (
    <>
      <style>{`
        @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

        .gallery-page-wrapper {
          background-color: ${isDarkMode ? '#111827' : 'white'};
          transition: background-color 0.3s ease;
        }

        ::-webkit-scrollbar {
          width: 1px;
          height: 1px;
        }

        ::-webkit-scrollbar-button {
          width: 1px;
          height: 1px;
        }

        .gallery-page-wrapper .external {
          overflow: hidden;
          height: 100vh;
          background: ${isDarkMode ? '#111827' : 'white'};
          transition: background-color 0.3s ease;
        }

        .gallery-page-wrapper .horizontal-scroll-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100vh;
          transform: rotate(-90deg) translate3d(0,-100vh,0);
          transform-origin: right top;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 0;
          height: 100vw;
          perspective: 1px;
          transform-style: preserve-3d;
          padding-bottom: 10rem;
        }

        .gallery-page-wrapper .img-wrapper {
          transform: rotate(90deg);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40vh;
          transform-origin: 50% 50%;
          transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
          transition: 1s;
          cursor: pointer;
        }

        .gallery-page-wrapper .img-wrapper:hover {
          min-height: 65vh;
        }

        .gallery-page-wrapper .slower {
          transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh);
        }

        .gallery-page-wrapper .slower1 {
          transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh);
        }

        .gallery-page-wrapper .slower2 {
          transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh);
        }

        .gallery-page-wrapper .slower-down {
          transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh);
        }

        .gallery-page-wrapper .faster {
          transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh);
        }

        .gallery-page-wrapper .faster1 {
          transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh);
        }

        .gallery-page-wrapper .fastest {
          transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh);
        }

        .gallery-page-wrapper .vertical {
          transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%);
        }

        .gallery-page-wrapper .last {
          transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh);
        }

        .gallery-page-wrapper .scroll-info, 
        .gallery-page-wrapper header {
          position: absolute;
          left: 1rem;
        }

        .gallery-page-wrapper header {
          bottom: 1rem;
        }

        .gallery-page-wrapper .scroll-info {
          top: 1rem;
        }

        .gallery-page-wrapper a {
          color: inherit;
          font-weight: 500;
        }

        .gallery-page-wrapper h1 {
          font-weight: 300;
          font-size: 1rem;
        }

        .gallery-page-wrapper .img-wrapper div {
          overflow: hidden;
          display: block;
          padding: 1vh;
          background: ${isDarkMode ? '#2d3748' : '#efecdb'};
          box-shadow: 0 10px 50px ${isDarkMode ? 'rgba(0,0,0,0.4)' : '#5f2f1182'};
          transition: all 0.3s ease;
        }

        .gallery-page-wrapper .img-wrapper img {
          max-width: 45vh;
          max-height: 50vh;
          transition: .5s;
          vertical-align: top;
          filter: saturate(40%) sepia(30%) hue-rotate(5deg);
        }

        .gallery-page-wrapper .img-wrapper:hover img {
          filter: none;
        }

        .gallery-page-wrapper .card__image {
          max-width: 300px;
          filter: none;
          color: ${isDarkMode ? '#ffffff' : '#111827'};
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-page-wrapper .card__image:hover {
          transform: scale(1.05);
        }

        .gallery-page-wrapper p {
          margin: 0;
        }

        .gallery-page-wrapper .scroll-info {
          display: flex;
          align-items: center;
        }

        .gallery-page-wrapper .icon svg {
          width: 50px;
          fill: ${isDarkMode ? '#9ca3af' : 'currentColor'};
        }

        :root {
          --white: #ffffff;
          --lightBG: #dce1df;
          --salmon: #ff6666;
          --teal: #0096a0;
          --tealMid: #0ebac7;
          --tealContrast: #33ffff;
          --tealShade: #007c85;
          --darkGrey: #4f585e;
        }

        .gallery-page-wrapper a.btn {
          background: var(--teal);
          border-radius: 4px;
          box-shadow: 0 2px 0px 0 rgba(0,0,0,0.25);
          color: var(--white);
          display: inline-block;
          padding: 6px 30px 8px;
          position: relative;
          text-decoration: none;
          transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .gallery-page-wrapper .no-touch a.btn:hover {
          background: var(--tealMid);
          box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
          transform: translateY(-2px);
        }

        .gallery-page-wrapper .no-touch a.btn:active,
        .gallery-page-wrapper a.btn:active {
          background: var(--tealShade);
          box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
          transform: translate3d(0,1px,0);
        }

        .gallery-page-wrapper .cards {
          margin: 0 auto 80px auto; 
          max-width: 960px;
          text-align: center;
          background: ${isDarkMode ? '#111827' : 'white'}; 
          transition: background-color 0.3s ease;
          padding-top: 80px;
          padding-bottom: 80px; 
        }

        .gallery-page-wrapper .card {
          background: ${isDarkMode ? '#374151' : 'white'};
          display: inline-block;
          margin: 8px;
          max-width: 300px;
          perspective: 1000;
          position: relative;
          text-align: left;
          transition: opacity 0.3s ease, transform 0.3s ease;
          width: 300px;
          z-index: 1;
          border: 1px solid ${isDarkMode ? '#4b5563' : '#e0e0e0'};
          border-radius: 8px;
          box-shadow: ${isDarkMode ? '0 4px 6px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'};
        }

        .gallery-page-wrapper .card img {
          max-width: 300px;
          color: ${isDarkMode ? '#ffffff' : '#111827'};
        }

        .gallery-page-wrapper .card .card__image-holder {
          background: ${isDarkMode ? '#2d3748' : 'rgba(0,0,0,0.1)'};
          height: 0;
          padding-bottom: 75%;
          overflow: hidden;
        }

        .gallery-page-wrapper .card div.card-title {
          background: ${isDarkMode ? '#374151' : 'white'};
          padding: 6px 15px 10px;
          position: relative;
          z-index: 0;
          color: ${isDarkMode ? '#f3f4f6' : '#333'};
        }

        .gallery-page-wrapper .card div.card-title a.toggle-info {
          border-radius: 32px;
          height: 32px;
          padding: 0;
          position: absolute;
          right: 15px;
          top: 10px;
          width: 32px;
          background: var(--teal);
          transition: background-color 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .gallery-page-wrapper .card div.card-title a.toggle-info:hover {
          background: var(--tealShade) !important;
        }

        .gallery-page-wrapper .card div.card-title a.toggle-info span {
          background: ${isDarkMode ? '#f3f4f6' : 'var(--white)'};
          display: block;
          height: 2px;
          position: absolute;
          top: 16px;
          transition: transform 0.2s ease;
          width: 12px;
        }

        .gallery-page-wrapper .card div.card-title a.toggle-info span.left {
          right: 14px;
          transform: rotate(45deg);
        }

        .gallery-page-wrapper .card div.card-title a.toggle-info span.right {
          left: 14px;
          transform: rotate(-45deg);
        }

        .gallery-page-wrapper .card div.card-title h2 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.05em;
          margin: 0;
          padding: 0;
          color: ${isDarkMode ? '#f3f4f6' : '#333'};
        }

        .gallery-page-wrapper .card div.card-title h2 small {
          display: block;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: ${isDarkMode ? '#d1d5db' : '#666'};
        }

        .gallery-page-wrapper .card div.card-description {
          padding: 15px;
          position: relative;
          font-size: 14px;
          color: ${isDarkMode ? '#d1d5db' : '#666'};
        }

        .gallery-page-wrapper .card div.card-flap {
          background: ${isDarkMode ? '#374151' : 'white'};
          position: absolute;
          width: 100%;
          transform-origin: top;
          transform: rotateX(-90deg);
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .gallery-page-wrapper .card div.flap1 {
          z-index: -1;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .gallery-page-wrapper .card div.flap2 {
          z-index: -2;
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .gallery-page-wrapper .cards.showing .card {
          cursor: pointer;
          opacity: 0.6;
          transform: scale(0.88);
        }

        .gallery-page-wrapper .no-touch .cards.showing .card:hover {
          opacity: 0.94;
          transform: scale(0.92);
        }

        .gallery-page-wrapper .card.show {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .gallery-page-wrapper .card.show .card-title a.toggle-info {
          background: var(--salmon) !important;
        }

        .gallery-page-wrapper .card.show .card-title a.toggle-info span {
          top: 15px;
        }

        .gallery-page-wrapper .card.show .card-title a.toggle-info span.left {
          right: 10px;
        }

        .gallery-page-wrapper .card.show .card-title a.toggle-info span.right {
          left: 10px;
        }

        .gallery-page-wrapper .card.show .card-flap {
          transform: rotateX(0deg);
        }

        .gallery-page-wrapper .card.show .flap1 {
          transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .gallery-page-wrapper .card.show .flap2 {
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .gallery-page-wrapper .card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .gallery-page-wrapper .card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .gallery-page-wrapper .scroll-info {
          color: ${isDarkMode ? '#9ca3af' : 'currentColor'};
        }

        .gallery-page-wrapper header {
          color: ${isDarkMode ? '#d1d5db' : 'currentColor'};
        }

        .gallery-page-wrapper header p {
          color: ${isDarkMode ? '#9ca3af' : 'currentColor'};
        }

        .gallery-page-wrapper header h1 {
          color: ${isDarkMode ? '#f3f4f6' : 'currentColor'};
        }

        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .image-modal img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 8px;
        }

        .image-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 32px;
          cursor: pointer;
          background: none;
          border: none;
        }

        .video-play-icon {
  position: absolute;
  font-size: 42px;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
  /* Gallery.jsx ke style tag ke andar ise add karein */
@media (max-width: 768px) {
  .gallery-page-wrapper .external {
    height: auto !important;
    overflow: visible !important;
  }

  .gallery-page-wrapper .horizontal-scroll-wrapper {
    display: flex !important;
    flex-direction: row !important; /* Mobile pe row layout */
    width: 100% !important;
    height: auto !important;
    transform: none !important; /* Rotation ko mobile pe disable karein */
    overflow-x: auto !important; /* Side scroll enable karein */
    overflow-y: hidden !important;
    padding: 20px 10px !important;
    -webkit-overflow-scrolling: touch; /* iOS smooth scrolling ke liye */
  }

  .gallery-page-wrapper .img-wrapper {
    transform: none !important; /* Parallax/3D effect mobile pe remove karein */
    margin-right: 15px !important;
    min-width: 280px !important; /* Har image ki width set karein */
    min-height: auto !important;
    display: inline-block !important;
  }

  .gallery-page-wrapper .img-wrapper img {
    max-width: 100% !important;
    max-height: 350px !important;
    filter: none !important;
  }

  .gallery-page-wrapper .scroll-info {
    display: none !important; /* Mobile pe "try scrolling down" ki zarurat nahi */
  }
}

      `}</style>

      <div className="gallery-page-wrapper">
        <div className="external">
          <div className="horizontal-scroll-wrapper">
            {scrollImages.map((image, i) => (
              <div
  key={i}
  className={`img-wrapper ${imageClasses[i]}`}
  onClick={() => handleScrollImageClick(image.src)}
>
                <div>
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </div>

          <p className="scroll-info">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
                <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"/>
              </svg>
            </span> Try scrolling down
          </p>

          <header>
            <h1>Visual journey through our facilities and services</h1> 
          </header>
        </div>

        <div className="cards">
          {cardItems.map((item, i) => (
            <div 
              key={item.id} 
              className="card" 
              ref={el => cardsRef.current[i] = el}>
              <div className="card__image-holder">
                <img
  className="card__image"
  src={item.type === 'video' ? item.thumbnail : item.image}
  alt={item.title}
  onClick={(e) => handleCardMediaClick(e, item)}
/>

{item.type === 'video' && (
  <span className="video-play-icon">▶</span>
)}

              </div>
              <div className="card-title">
                <a href="#" className="toggle-info btn" onClick={(e) => handleCardToggle(e, i)}>
                  <span className="left"></span>
                  <span className="right"></span>
                </a>
                <h2>
                  {item.title}
                  <small>{item.subtitle}</small>
                </h2>
              </div>
              <div className="card-flap flap1">
                <div className="card-description">
                  {item.description}
                </div>
                <div className="card-flap flap2">
                </div>
              </div>
            </div>
          ))}
        </div>

{selectedMedia && (
  <div className="image-modal" onClick={() => setSelectedMedia(null)}>
    <button className="image-modal-close">×</button>

    {selectedMedia.type === 'image' ? (
      <img src={selectedMedia.image} alt="Full view" />
    ) : (
      /* Video play karne ke liye ye attributes zaroori hain */
      <video
        src={selectedMedia.videoSrc}
        controls
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ maxWidth: '90%', maxHeight: '90%' }}
      />
    )}
  </div>
)}
  
      </div>
    </>
  );
};

export default Gallery;