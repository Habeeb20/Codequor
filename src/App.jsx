import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Landingpage from './pages/Landingpage';
import ServicesSection from './components/ServiceSection';
import { Toaster } from 'react-hot-toast';
import About from './pages/About';
import Contact from './pages/Contact';
import ConsultQuote from './pages/ConsultQuote';

const App = () => {
  return (

      <BrowserRouter>
      <Toaster/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/consult' element={<ConsultQuote />} />
      <Route path='/services' element={<ServicesSection />} />
    </Routes>
   
    <Footer/>
  </BrowserRouter>
 
 
  )
}

export default App
