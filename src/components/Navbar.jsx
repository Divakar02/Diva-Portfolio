import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: '#', label: 'Home', href: '#' },
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'academics', label: 'Academics', href: '#academics' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'certifications', label: 'Certification', href: '#certifications' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      id: 'gmail',
      icon: Mail,
      href: 'mailto:ejilandivakar@gmail.com',
      label: 'Gmail',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:shadow-red-500/25'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/divakar-ejilan-803658289/',
      label: 'LinkedIn',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      id: 'github',
      icon: Github,
      href: 'https://github.com/divakar02',
      label: 'GitHub',
      color: 'from-gray-500 to-gray-600',
      hoverColor: 'hover:shadow-gray-500/25'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const handleSocialClick = (href) => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0   z-20 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 animate-pulse" />
      
      {/* Glowing border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <motion.div
                  className="w-6 h-6 bg-white rounded-md"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Divakar
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:block"
          >
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full p-2 border border-white/10">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/25"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:flex items-center space-x-3"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.button
                  key={social.id}
                  onClick={() => handleSocialClick(social.href)}
                  className={`relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.hoverColor}`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <IconComponent size={18} />
                  
                  {/* Hover background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0`}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${social.color.split(' ')[1]}) border-box`,
                      WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'exclude',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-4 flex flex-col justify-between"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-6 space-y-3 bg-black/20 backdrop-blur-xl rounded-2xl mt-4 border border-white/10">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Mobile Social Icons */}
                <motion.div
                  className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: navItems.length * 0.1 }
                  }}
                >
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.button
                        key={social.id}
                        onClick={() => {
                          handleSocialClick(social.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.hoverColor}`}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: (navItems.length * 0.1) + (index * 0.1) }
                        }}
                      >
                        <IconComponent size={18} />
                        
                        {/* Hover background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0`}
                          whileHover={{ opacity: 0.2 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.button>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;