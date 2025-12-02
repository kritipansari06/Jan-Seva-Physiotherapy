import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

import About from './pages/About';
import Treatments from './pages/Treatments';
import Services from './pages/Services';
import Gallery from './pages/Gallery';     
import Contact from './pages/Contact';

import Therapies from './subpages/Therapies';
import Equipments from './subpages/Equipments';
import Rehabs from './subpages/Rehabs';
import Wellness from './subpages/Wellness';

function App() {
  const BRAND_NAME = "R P Pansari Jan Seva Trust";

  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/treatments" element={<Treatments/>}></Route>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <Footer brandName={BRAND_NAME} />

    </Router>
      
    </>
  )
}

export default App
