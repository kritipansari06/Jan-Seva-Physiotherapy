// import React, { useEffect, useRef } from 'react';
// import img1 from '../assets/images/1.JPG';
// import img2 from '../assets/images/2.JPG';
// import img3 from '../assets/images/3.JPG';
// import img4 from '../assets/images/4.JPG';
// import img5 from '../assets/images/5.JPG';
// import img6 from '../assets/images/6.JPG';


// export default function Gallery() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const cards = cardsRef.current.filter(Boolean);
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = cards.indexOf(entry.target);
//         if (entry.isIntersecting) {
//           entry.target.style.transitionDelay = `${index * 80}ms`;
//           entry.target.classList.add('visible');
//         } else {
//           entry.target.classList.remove('visible');
//         }
//       });
//     }, {
//       threshold: 0.1
//     });

//     cards.forEach(card => {
//       observer.observe(card);
//     });

//     return () => {
//       cards.forEach(card => {
//         observer.unobserve(card);
//       });
//     };
//   }, []);

//   const handleCardClick = (e, index) => {
//     e.preventDefault();
//     const card = cardsRef.current[index];
//     const cardsContainer = document.querySelector('.cards');
    
//     let isShowing = false;

//     if (card.classList.contains('show')) {
//       isShowing = true;
//     }

//     if (cardsContainer.classList.contains('showing')) {
//       const showingCard = document.querySelector('div.card.show');
//       if (showingCard) {
//         showingCard.classList.remove('show');
//       }

//       if (isShowing) {
//         cardsContainer.classList.remove('showing');
//       } else {
//         const zindex = parseInt(card.style.zIndex || 10) + 1;
//         card.style.zIndex = zindex;
//         card.classList.add('show');
//       }
//     } else {
//       cardsContainer.classList.add('showing');
//       const zindex = parseInt(card.style.zIndex || 10) + 1;
//       card.style.zIndex = zindex;
//       card.classList.add('show');
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

//         body {
//           font-family: Hepta Slab, sans-serif;
//           font-weight: 500;
//         }
//         * {
//           box-sizing: border-box;
//         }

//         ::-webkit-scrollbar {
//           width: 1px;
//           height: 1px;
//         }

//         ::-webkit-scrollbar-button {
//           width: 1px;
//           height: 1px;
//         }
//         .external {
//           overflow: hidden;
//           height: 100vh;
//         }

//         .horizontal-scroll-wrapper {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           width: 100vh;
//           transform: rotate(-90deg) translate3d(0,-100vh,0);
//           transform-origin: right top;
//           overflow-y: auto;
//           overflow-x: hidden;
//           padding: 0;
//           height: 100vw;
//           perspective: 1px;
//           transform-style: preserve-3d;
//           padding-bottom: 10rem;
//         }
//         .img-wrapper {
//           transform: rotate(90deg);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 40vh;
//           transform-origin: 50% 50%;
//           transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
//           transition: 1s;
//         }

//         .img-wrapper:hover {
//           min-height: 65vh;
//         }

//         .slower {
//           transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh);
//         }
//         .slower1 {
//           transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh);
//         }
//         .slower2 {
//           transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh);
//         }
//         .slower-down {
//           transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh);
//         }
//         .faster {
//           transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh);
//         }
//         .faster1 {
//           transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh);
//         }
//         .fastest {
//           transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh);
//         }
//         .vertical {
//           transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%);
//         }
//         .last {
//           transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh);
//         }
//         .scroll-info, header {
//           position: absolute;
//           left: 1rem;
//         }

//         header {
//           bottom: 1rem;
//         }
//         .scroll-info {
//           top: 1rem;
//         }
//         a {
//           color: inherit;
//           font-weight: 500;
//         }
//         h1 {
//           font-weight: 300;
//           font-size: 1rem;
//         }

//         .img-wrapper a {
//           overflow: hidden;
//           display: block;
//           padding: 1vh;
//           background: #efecdb;
//           box-shadow: 0 10px 50px #5f2f1182;
//         }
//         img {
//           max-width: 45vh;
//           max-height: 50vh;
//           transition: .5s;
//           vertical-align: top;
//           filter: saturate(40%) sepia(30%) hue-rotate(5deg);
//         }
//         a:hover img {
//           filter: none;
//         }
//         p {
//           margin: 0;
//         }
//         .scroll-info {
//           display: flex;
//           align-items: center;
//         }
//         .icon svg {
//           width: 50px;
//           fill: currentcolor;
//         }

//         :root {
//           --white: #ffffff;
//           --lightBG: #dce1df;
//           --salmon: #ff6666;
//           --teal: #0096a0;
//           --tealMid: #0ebac7;
//           --tealContrast: #33ffff;
//           --tealShade: #007c85;
//           --darkGrey: #4f585e;
//         }

//         body {
//           background: var(--lightBG);
//           color: var(--darkGrey);
//           font-family: 'Source Sans Pro', sans-serif;
//           text-rendering: optimizeLegibility;
//         }

//         a.btn {
//           background: var(--teal);
//           border-radius: 4px;
//           box-shadow: 0 2px 0px 0 rgba(0,0,0,0.25);
//           color: var(--white);
//           display: inline-block;
//           padding: 6px 30px 8px;
//           position: relative;
//           text-decoration: none;
//           transition: all 0.1s 0s ease-out;
//         }

//         .no-touch a.btn:hover {
//           background: var(--tealMid);
//           box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
//           transform: translateY(-2px);
//           transition: all 0.25s 0s ease-out;
//         }

//         .no-touch a.btn:active,
//         a.btn:active {
//           background: var(--tealShade);
//           box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
//           transform: translate3d(0,1px,0);
//           transition: all 0.025s 0s ease-out;
//         }

//         div.cards {
//           margin: 80px auto;
//           max-width: 960px;
//           text-align: center;
//         }

//         div.card {
//           background: var(--white);
//           display: inline-block;
//           margin: 8px;
//           max-width: 300px;
//           perspective: 1000;
//           position: relative;
//           text-align: left;
//           transition: all 0.3s 0s ease-in;
//           width: 300px;
//           z-index: 1;
//         }

//         div.card img {
//           max-width: 300px;
//         }

//         div.card .card__image-holder {
//           background: rgba(0,0,0,0.1);
//           height: 0;
//           padding-bottom: 75%;
//         }

//         div.card div.card-title {
//           background: var(--white);
//           padding: 6px 15px 10px;
//           position: relative;
//           z-index: 0;
//         }

//         div.card div.card-title a.toggle-info {
//           border-radius: 32px;
//           height: 32px;
//           padding: 0;
//           position: absolute;
//           right: 15px;
//           top: 10px;
//           width: 32px;
//         }

//         div.card div.card-title a.toggle-info span {
//           background: var(--white);
//           display: block;
//           height: 2px;
//           position: absolute;
//           top: 16px;
//           transition: all 0.15s 0s ease-out;
//           width: 12px;
//         }

//         div.card div.card-title a.toggle-info span.left {
//           right: 14px;
//           transform: rotate(45deg);
//         }

//         div.card div.card-title a.toggle-info span.right {
//           left: 14px;
//           transform: rotate(-45deg);
//         }

//         div.card div.card-title h2 {
//           font-size: 24px;
//           font-weight: 700;
//           letter-spacing: -0.05em;
//           margin: 0;
//           padding: 0;
//         }

//         div.card div.card-title h2 small {
//           display: block;
//           font-size: 18px;
//           font-weight: 600;
//           letter-spacing: -0.025em;
//         }

//         div.card div.card-description {
//           padding: 0 15px 10px;
//           position: relative;
//           font-size: 14px;
//         }

//         div.card div.card-actions {
//           box-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);
//           padding: 10px 15px 20px;
//           text-align: center;
//         }

//         div.card div.card-flap {
//           background: var(--white);
//           position: absolute;
//           width: 100%;
//           transform-origin: top;
//           transform: rotateX(-90deg);
//         }

//         div.card div.flap1 {
//           transition: all 0.3s 0.3s ease-out;
//           z-index: -1;
//         }

//         div.card div.flap2 {
//           transition: all 0.3s 0s ease-out;
//           z-index: -2;
//         }

//         div.cards.showing div.card {
//           cursor: pointer;
//           opacity: 0.6;
//           transform: scale(0.88);
//         }

//         .no-touch div.cards.showing div.card:hover {
//           opacity: 0.94;
//           transform: scale(0.92);
//         }

//         div.card.show {
//           opacity: 1 !important;
//           transform: scale(1) !important;
//         }

//         div.card.show div.card-title a.toggle-info {
//           background: var(--salmon) !important;
//         }

//         div.card.show div.card-title a.toggle-info span {
//           top: 15px;
//         }

//         div.card.show div.card-title a.toggle-info span.left {
//           right: 10px;
//         }

//         div.card.show div.card-title a.toggle-info span.right {
//           left: 10px;
//         }

//         div.card.show div.card-flap {
//           background: var(--white);
//           transform: rotateX(0deg);
//         }

//         div.card.show div.flap1 {
//           transition: all 0.3s 0s ease-out;
//         }

//         div.card.show div.flap2 {
//           transition: all 0.3s 0.2s ease-out;
//         }

//         .card {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease, transform 0.5s ease;
//         }

//         .card.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>

//       <div className="external">
//         <div className="horizontal-scroll-wrapper">
//           <div className="img-wrapper slower">
//             <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener">
//               <img src={img1} alt="" />
//             </a>
//           </div>

//           <div className="img-wrapper faster">
//             <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
//               <img src={img2} alt="" />
//             </a>
//           </div>

//           <div className="img-wrapper slower vertical">
//             <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
//               <img src={img3} alt="" />
//             </a>
//           </div>

//           <div className="img-wrapper slower slower-down">
//             <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
//               <img src={img4} alt="" />
//             </a>
//           </div>

//           <div className="img-wrapper">
//             <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener">
//               <img src={img5} alt="" />
//             </a>
//           </div>

//           <div className="img-wrapper slower">
//             <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener">
//               <img src={img6} alt="" />
//             </a>
//           </div>

//           <div className="img-wrapper faster1">
//             <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener">
//               <img src="images/6.JPG" alt="" />
//             </a>
//           </div>
          
//           <div className="img-wrapper slower slower2">
//             <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener">
//               <img src="images/1.JPG" alt="" />
//             </a>
//           </div>
          
//           <div className="img-wrapper">
//             <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
//               <img src="images/1.JPG" alt="" />
//             </a>
//           </div>
          
//           <div className="img-wrapper slower">
//             <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener">
//               <img src="images/2.JPG" alt="" />
//             </a>
//           </div>
          
//           <div className="img-wrapper slower last">
//             <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener">
//               <img src="images/1.JPG" alt="" />
//             </a>
//           </div>
//         </div>
//         <p className="scroll-info">
//           <span className="icon">
//             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
//               <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"/>
//             </svg>
//           </span> Try scrolling down
//         </p>
//         <header>
//           <p>Postcards from Paris.</p>
//           <h1>Css-only parallax horizontal gallery</h1>
//           <p>Grab (these and more) photos from - <a href="https://altphotos.com/free/paris/" target="_blank" rel="noopener">altphotos.</a></p>
//         </header>
//       </div>

//       <div className="cards">
//         {[...Array(24)].map((_, i) => (
//           <div 
//             key={i} 
//             className="card" 
//             ref={el => cardsRef.current[i] = el}
//             onClick={(e) => handleCardClick(e, i)}
//           >
//             <div className="card__image-holder">
//               <img className="card__image" src={`https://source.unsplash.com/300x225/?${['wave', 'beach', 'mountain', 'field', 'water', 'river', 'kite', 'underwater', 'desert'][i % 9]}`} alt={['wave', 'beach', 'mountain', 'field', 'water', 'river', 'kite', 'underwater', 'desert'][i % 9]} />
//             </div>
//             <div className="card-title">
//               <a href="#" className="toggle-info btn">
//                 <span className="left"></span>
//                 <span className="right"></span>
//               </a>
//               <h2>
//                 Card title
//                 <small>Image from unsplash.com</small>
//               </h2>
//             </div>
//             <div className="card-flap flap1">
//               <div className="card-description">
//                 This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
//               </div>
//               <div className="card-flap flap2">
//                 <div className="card-actions">
//                   <a href="#" className="btn">Read more</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


























import React, { useEffect, useRef } from 'react';
import img1 from '../assets/images/1.JPG';
import img2 from '../assets/images/2.JPG';
import img3 from '../assets/images/3.JPG';
import img4 from '../assets/images/4.JPG';
import img5 from '../assets/images/5.JPG';
import img6 from '../assets/images/6.JPG';

const Gallery = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = cards.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 80}ms`;
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
        observer.unobserve(card);
      });
    };
  }, []);

  const handleCardClick = (e, index) => {
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
        const zindex = parseInt(card.style.zIndex || 10) + 1;
        card.style.zIndex = zindex;
        card.classList.add('show');
      }
    } else {
      cardsContainer.classList.add('showing');
      const zindex = parseInt(card.style.zIndex || 10) + 1;
      card.style.zIndex = zindex;
      card.classList.add('show');
    }
  };

  return (
    <>
      <style>{`
        @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,300,600,700,900);

        body {
          font-family: Hepta Slab, sans-serif;
          font-weight: 500;
        }
        * {
          box-sizing: border-box;
        }

        ::-webkit-scrollbar {
          width: 1px;
          height: 1px;
        }

        ::-webkit-scrollbar-button {
          width: 1px;
          height: 1px;
        }
        .external {
          overflow: hidden;
          height: 100vh;
        }

        .horizontal-scroll-wrapper {
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
        .img-wrapper {
          transform: rotate(90deg);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40vh;
          transform-origin: 50% 50%;
          transform: rotate(90deg) translateZ(.1px) scale(0.9) translateX(0px) translateY(-3vh);
          transition: 1s;
        }

        .img-wrapper:hover {
          min-height: 65vh;
        }

        .slower {
          transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(-10vh);
        }
        .slower1 {
          transform: rotate(90deg) translateZ(-.25px) scale(1.05) translateX(0%) translateY(8vh);
        }
        .slower2 {
          transform: rotate(90deg) translateZ(-.3px) scale(1.3) translateX(0%) translateY(2vh);
        }
        .slower-down {
          transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(0%) translateY(16vh);
        }
        .faster {
          transform: rotate(90deg) translateZ(.15px) scale(0.8) translateX(0%) translateY(14vh);
        }
        .faster1 {
          transform: rotate(90deg) translateZ(.05px) scale(0.8) translateX(0%) translateY(10vh);
        }
        .fastest {
          transform: rotate(90deg) translateZ(.22px) scale(0.7) translateX(-10vh) translateY(-15vh);
        }
        .vertical {
          transform: rotate(90deg) translateZ(-.15px) scale(1.15) translateX(0%) translateY(0%);
        }
        .last {
          transform: rotate(90deg) translateZ(-.2px) scale(1.1) translateX(25vh) translateY(-8vh);
        }
        .scroll-info, header {
          position: absolute;
          left: 1rem;
        }

        header {
          bottom: 1rem;
        }
        .scroll-info {
          top: 1rem;
        }
        a {
          color: inherit;
          font-weight: 500;
        }
        h1 {
          font-weight: 300;
          font-size: 1rem;
        }

        .img-wrapper a {
          overflow: hidden;
          display: block;
          padding: 1vh;
          background: #efecdb;
          box-shadow: 0 10px 50px #5f2f1182;
        }
        img {
          max-width: 45vh;
          max-height: 50vh;
          transition: .5s;
          vertical-align: top;
          filter: saturate(40%) sepia(30%) hue-rotate(5deg);
        }
        a:hover img {
          filter: none;
        }
        p {
          margin: 0;
        }
        .scroll-info {
          display: flex;
          align-items: center;
        }
        .icon svg {
          width: 50px;
          fill: currentcolor;
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

        body {
          background: var(--lightBG);
          color: var(--darkGrey);
          font-family: 'Source Sans Pro', sans-serif;
          text-rendering: optimizeLegibility;
        }

        a.btn {
          background: var(--teal);
          border-radius: 4px;
          box-shadow: 0 2px 0px 0 rgba(0,0,0,0.25);
          color: var(--white);
          display: inline-block;
          padding: 6px 30px 8px;
          position: relative;
          text-decoration: none;
          transition: all 0.1s 0s ease-out;
        }

        .no-touch a.btn:hover {
          background: var(--tealMid);
          box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
          transform: translateY(-2px);
          transition: all 0.25s 0s ease-out;
        }

        .no-touch a.btn:active,
        a.btn:active {
          background: var(--tealShade);
          box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
          transform: translate3d(0,1px,0);
          transition: all 0.025s 0s ease-out;
        }

        div.cards {
          margin: 80px auto;
          max-width: 960px;
          text-align: center;
        }

        div.card {
          background: var(--white);
          display: inline-block;
          margin: 8px;
          max-width: 300px;
          perspective: 1000;
          position: relative;
          text-align: left;
          transition: all 0.3s 0s ease-in;
          width: 300px;
          z-index: 1;
        }

        div.card img {
          max-width: 300px;
        }

        div.card .card__image-holder {
          background: rgba(0,0,0,0.1);
          height: 0;
          padding-bottom: 75%;
        }

        div.card div.card-title {
          background: var(--white);
          padding: 6px 15px 10px;
          position: relative;
          z-index: 0;
        }

        div.card div.card-title a.toggle-info {
          border-radius: 32px;
          height: 32px;
          padding: 0;
          position: absolute;
          right: 15px;
          top: 10px;
          width: 32px;
        }

        div.card div.card-title a.toggle-info span {
          background: var(--white);
          display: block;
          height: 2px;
          position: absolute;
          top: 16px;
          transition: all 0.15s 0s ease-out;
          width: 12px;
        }

        div.card div.card-title a.toggle-info span.left {
          right: 14px;
          transform: rotate(45deg);
        }

        div.card div.card-title a.toggle-info span.right {
          left: 14px;
          transform: rotate(-45deg);
        }

        div.card div.card-title h2 {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.05em;
          margin: 0;
          padding: 0;
        }

        div.card div.card-title h2 small {
          display: block;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        div.card div.card-description {
          padding: 0 15px 10px;
          position: relative;
          font-size: 14px;
        }

        div.card div.card-actions {
          box-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);
          padding: 10px 15px 20px;
          text-align: center;
        }

        div.card div.card-flap {
          background: var(--white);
          position: absolute;
          width: 100%;
          transform-origin: top;
          transform: rotateX(-90deg);
        }

        div.card div.flap1 {
          transition: all 0.3s 0.3s ease-out;
          z-index: -1;
        }

        div.card div.flap2 {
          transition: all 0.3s 0s ease-out;
          z-index: -2;
        }

        div.cards.showing div.card {
          cursor: pointer;
          opacity: 0.6;
          transform: scale(0.88);
        }

        .no-touch div.cards.showing div.card:hover {
          opacity: 0.94;
          transform: scale(0.92);
        }

        div.card.show {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        div.card.show div.card-title a.toggle-info {
          background: var(--salmon) !important;
        }

        div.card.show div.card-title a.toggle-info span {
          top: 15px;
        }

        div.card.show div.card-title a.toggle-info span.left {
          right: 10px;
        }

        div.card.show div.card-title a.toggle-info span.right {
          left: 10px;
        }

        div.card.show div.card-flap {
          background: var(--white);
          transform: rotateX(0deg);
        }

        div.card.show div.flap1 {
          transition: all 0.3s 0s ease-out;
        }

        div.card.show div.flap2 {
          transition: all 0.3s 0.2s ease-out;
        }

        .card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener">
              <img src={img1} alt="" />
            </a>
          </div>

          <div className="img-wrapper faster">
            <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener">
              <img src={img2} alt="" />
            </a>
          </div>

          <div className="img-wrapper slower vertical">
            <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener">
              <img src={img3} alt="" />
            </a>
          </div>

          <div className="img-wrapper slower slower-down">
            <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener">
              <img src={img4} alt="" />
            </a>
          </div>

          <div className="img-wrapper">
            <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener">
              <img src={img5} alt="" />
            </a>
          </div>

          <div className="img-wrapper slower">
            <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_ blank" rel="noopener">
              <img src={img6} alt="" />
            </a>
          </div>

          <div className="img-wrapper faster1">
            <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener">
              <img src="images/6.JPG" alt="" />
            </a>
          </div>
          
          <div className="img-wrapper slower slower2">
            <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener">
              <img src="images/1.JPG" alt="" />
            </a>
          </div>
          
          <div className="img-wrapper">
            <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener">
              <img src="images/1.JPG" alt="" />
            </a>
          </div>
          
          <div className="img-wrapper slower">
            <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener">
              <img src="images/2.JPG" alt="" />
            </a>
          </div>
          
          <div className="img-wrapper slower last">
            <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener">
              <img src="images/1.JPG" alt="" />
            </a>
          </div>
        </div>
        <p className="scroll-info">
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
              <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4      c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1      C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5      c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3      c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"/>
            </svg>
          </span> Try scrolling down
        </p>
        <header>
          <p>Postcards from Paris.</p>
          <h1>Css-only parallax horizontal gallery</h1>
          <p>Grab (these and more) photos from - <a href="https://altphotos.com/free/paris/" target="_blank" rel="noopener">altphotos.</a></p>
        </header>
      </div>

      <div className="cards">
        {[...Array(24)].map((_, i) => (
          <div 
            key={i} 
            className="card" 
            ref={el => cardsRef.current[i] = el}
            onClick={(e) => handleCardClick(e, i)}
          >
            <div className="card__image-holder">
              <img className="card__image" src={`https://source.unsplash.com/300x225/?${['wave', 'beach', 'mountain', 'field', 'water', 'river', 'kite', 'underwater', 'desert'][i % 9]}`} alt={['wave', 'beach', 'mountain', 'field', 'water', 'river', 'kite', 'underwater', 'desert'][i % 9]} />
            </div>
            <div className="card-title">
              <a href="#" className="toggle-info btn">
                <span className="left"></span>
                <span className="right"></span>
              </a>
              <h2>
                Card title
                <small>Image from unsplash.com</small>
              </h2>
            </div>
            <div className="card-flap flap1">
              <div className="card-description">
                This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
              </div>
              <div className="card-flap flap2">
                <div className="card-actions">
                  <a href="#" className="btn">Read more</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;