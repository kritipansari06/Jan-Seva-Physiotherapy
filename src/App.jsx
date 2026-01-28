import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';

import OurStory from './pages/OurStory.jsx';
import About from './pages/About.jsx';
import Treatments from './pages/Treatments.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';     
import Contact from './pages/Contact.jsx';

import Testimonials from './subpages/Testimonials.jsx';

import HotColdTherapy from './subpages/HotColdTherapy.jsx';
import ElectroTherapy from './subpages/Electrotherapy.jsx';
import ExerciseTherapy from './subpages/ExerciseTherapy.jsx';
import ManualTherapy from './subpages/ManualTherapy.jsx';
import AdvancedTherapy from './subpages/AdvancedTherapy.jsx';


function AppContent() {
  const { isDarkMode } = useTheme();
  const BRAND_NAME = "R P Pansari Jan Seva Trust";

  return (
    <Router>
      <ScrollToTop />
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Navbar/>

        <main className={`grow ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/our-story" element={<OurStory />}/>
            <Route path="/testimonials" element={<Testimonials />}/>
             
            <Route path="/about" element={<About />}/>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/treatments" element={<Treatments/>} />

            <Route path="/treatments/HotColdTherapy" element={<HotColdTherapy />} />
            <Route path="/treatments/ElectroTherapy" element={<ElectroTherapy />} />
            <Route path="/treatments/ExerciseTherapy" element={<ExerciseTherapy />} />
            <Route path="/treatments/ManualTherapy" element={<ManualTherapy />} />
            <Route path="/treatments/AdvancedTherapy" element={<AdvancedTherapy />} />

            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>

        <Footer brandName={BRAND_NAME} />
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App