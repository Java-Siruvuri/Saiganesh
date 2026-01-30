
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const phrases = ['Software Developer' | AI & Scalable Systems'];
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

useEffect(() => {
    let charIndex = 0;
    let typingTimeout: ReturnType<typeof setTimeout>;
    let switchTimeout: ReturnType<typeof setTimeout>;
     const currentPhrase = phrases[currentPhraseIndex];
      const typeWriter = () => {
      if (charIndex <= currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex));
        charIndex++;
        typingTimeout = setTimeout(typeWriter, 100); // typing speed
      } else {
        // Wait for 4.5s before switching to the next phrase
        switchTimeout = setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 4500);
      }
    };

    typeWriter();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(switchTimeout);
    };
  }, [currentPhraseIndex]);



  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Java-Siruvuri', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/siruvurig', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(33, 41, 60, 0.8), rgba(33, 41, 60, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-72 h-72 mx-auto mt-8 mb-8 rounded-full bg-gradient-primary p-1"
          >
            {/* <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden neon-border transition duration-300 transform hover:rotate-2">
              <img src="sai ganesh2.png" alt="Profile" className="w-full h-full object-cover" />
            </div> */}
            
         <div
  className="relative group w-full h-full rounded-full flex items-center justify-center overflow-hidden neon-border transition duration-300 transform hover:-rotate-2"
  onClick={() => {
    const msg = document.getElementById("hover-msg");
    if (msg) msg.classList.toggle("opacity-100");
  }}
>
  {/* Profile Image */}
  <img
    src="sai ganesh2.png"
    alt="Profile"
    className="w-full h-full object-cover rounded-full"
  />

  {/* Hover or Tap Message */}
  <div
    id="hover-msg"
    className="absolute bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
  >
    <div className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-md border-2 border-blue-400 shadow-md transform rotate-[-1deg]">
      nice to meet you
    </div>
  </div>
</div>



          </motion.div>

          <motion.h1 
            className="text-2xl md:text-3xl font-poppins font-medium text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm Sai Ganesh Varma Siruvuri
          </motion.h1>

          {/* <div className="h-16 flex items-center justify-center"> */}
          <div className="min-h-[4rem] md:min-h-[6rem] flex items-center justify-center text-center px-2">

            {/* <h2 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent"> */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight break-words">

              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </h2>
            <div className="mt-4"></div>

          </div>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
Full-Stack Software Developer with 6+ years of experience building scalable, cloud-native applications using Spring Boot, React.js, Angular, and AWS.
Strong expertise in integrating Claude AI to deliver intelligent, context-aware features across frontend and backend systems.

          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover-bounce"
          >
            <span className="font-semibold">Explore My Work</span>
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>

          <a href="Resume_SaiGaneshVarma_SDE.pdf" download>

          <Button
            variant="outline"
            size="lg"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-bounce"
          >
            <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex items-center justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary group"
            >
              <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary/70" />
      </motion.div>
    </section>
  );
};

export default Hero;
