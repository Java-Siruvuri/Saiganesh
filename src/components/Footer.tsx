import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Java-Siruvuri',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/siruvurig',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:siruvuri.sgv@gmail.com',
    label: 'Email',
  },
];


  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-card/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <motion.img
                src={logo}
                alt="Sai ganesh Varma"
                className="w-12 h-12 glow-primary"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-2xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">
  Sai Ganesh
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
                Java Full Stack Developer passionate about building cloud-native, high-performance applications using Spring Boot, React.js, and AWS.

            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 mx-auto"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance projects
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
  © {new Date().getFullYear()} Sai Ganesh Varma Siruvuri. All rights reserved.
</p>

            
            {/* <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <span>Feel free to ping me, let's grow together</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
            <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of ☕</span>
            </motion.div> */}
          </div>
         </motion.div>
      </div>
    </footer>
  );
};

export default Footer;