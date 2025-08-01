import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-dark ${
        isLoading ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 mx-auto mb-6"
        >
          <img src={logo} alt="Portfolio Logo" className="w-full h-full glow-primary" />
        </motion.div>
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-xl font-poppins font-semibold text-primary mb-2">
            
          </h2>
          <div className="flex space-x-1 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-2 h-2 bg-secondary rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;