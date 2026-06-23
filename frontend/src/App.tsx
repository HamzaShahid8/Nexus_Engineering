import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SEO } from './components/SEO';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useTranslation } from '../node_modules/react-i18next';
export function App() {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />
      <div
        className="flex flex-col min-h-screen w-full bg-white"
        dir={isRtl ? 'rtl' : 'ltr'}>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>);

}