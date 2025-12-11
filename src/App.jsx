import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';

import About from './pages/About.jsx';
import Treatments from './pages/Treatments.jsx';
import Services from './pages/Services.jsx';
import Gallery from './pages/Gallery.jsx';     
import Contact from './pages/Contact.jsx';

import Testimonials from './subpages/Testimonials.jsx';
import Therapies from './subpages/Therapies.jsx';
import Equipments from './subpages/Equipments.jsx';
import Rehabs from './subpages/Rehabs.jsx';
import Wellness from './subpages/Wellness.jsx';

function App() {
  const BRAND_NAME = "R P Pansari Jan Seva Trust";

  return (
    <ThemeProvider>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/testimonials" element={<Testimonials />}/>
           
          <Route path="/about" element={<About />}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/treatments" element={<Treatments/>} />

          <Route path="/treatments/therapies" element={<Therapies />} />
          <Route path="/treatments/equipments" element={<Equipments />} />
          <Route path="/treatments/rehabs" element={<Rehabs />} />
          <Route path="/treatments/wellness-prevention" element={<Wellness />} />
          
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

        <Footer brandName={BRAND_NAME} />

      </Router>
    </ThemeProvider>
  )
}

export default App