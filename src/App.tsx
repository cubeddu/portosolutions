import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Porto Solutions TV Mounting | Professional TV Mounting Services';
  }, []);

  return (
    <div className="font-sans">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <BookingSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;