import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-30"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;