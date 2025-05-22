import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { socials } from '../data';

const Hero: React.FC = () => {
  const iconComponents: Record<string, React.ReactNode> = {
    github: <Github size={24} />,
    linkedin: <Linkedin size={24} />,
    twitter: <Twitter size={24} />,
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-900/20 dark:to-secondary-900/20" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent z-10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-3/5 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-secondary-600 dark:text-secondary-400 font-medium text-lg mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Venkata Shiva Sri <span className="text-primary-500">Chodisetty</span>
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Frontend Developer | Backend Developer | AI & ML Enthusiast
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Passionate about creating innovative solutions and exploring the intersection of AI and software development.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </motion.div>
            <motion.div 
              className="flex gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {socials.slice(0, 3).map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  {iconComponents[social.icon.toLowerCase()] || social.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-float flex items-center justify-center overflow-hidden">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                  VS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors">
            <p className="text-sm mb-1">Scroll Down</p>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
