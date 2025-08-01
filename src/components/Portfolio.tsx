import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
// import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets and data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize AOS (Animate On Scroll) if needed
    // This can be added later for additional scroll animations
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={isLoading ? 'pointer-events-none' : ''}
      >
        <Header />
        
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Portfolio;