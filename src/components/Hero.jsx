import { motion } from "framer-motion";
import { styles } from "../styles";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Mailbox, MailCheck, MailMinus, MailIcon, MailX, MailboxIcon } from 'lucide-react'
import { BiMailSend } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { socialLinks } from "../constants";
const Hero = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  // Function to scroll to achievements section
  const scrollToAchievements = () => {
    const achievementsSection = document.getElementById('achievements');
    if (achievementsSection) {
      achievementsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection("achievements");
  };



  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-100 to-tertiary opacity-90" />
        
        {/* Floating Geometric Shapes - Hidden on mobile for cleaner look */}
        <div className="absolute inset-0 hidden md:block">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border border-secondary/30 rotate-45"
            animate={{
              rotate: [45, 405],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-secondary/20 to-violet-500/20 rounded-full blur-sm"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-12 h-12 border-2 border-[#915EFF]/40 rounded-lg"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(145, 94, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(145, 94, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Mobile Layout - Restructured with text above image */}
  {/* Mobile Layout - Enhanced Futuristic Design */}
      <div className="md:hidden relative z-10 inset-0 top-[70px] max-w-7xl mx-auto px-6 flex flex-col justify-center h-[calc(100vh-120px)] overflow-hidden">
        
        {/* Enhanced Mobile Background Glow Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-t from-[#915EFF]/25 via-secondary/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles System */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Particle 1 */}
          <motion.div
            className="absolute w-2 h-2 bg-[#915EFF]/60 rounded-full"
            style={{ top: '20%', left: '15%' }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Particle 2 */}
          <motion.div
            className="absolute w-1 h-1 bg-secondary/80 rounded-full"
            style={{ top: '60%', right: '20%' }}
            animate={{
              y: [0, -40, 0],
              x: [0, -15, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Particle 3 */}
          <motion.div
            className="absolute w-3 h-3 bg-[#915EFF]/40 rounded-full"
            style={{ top: '80%', left: '25%' }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Particle 4 */}
          <motion.div
            className="absolute w-1.5 h-1.5 bg-secondary/70 rounded-full"
            style={{ top: '30%', right: '30%' }}
            animate={{
              y: [0, -35, 0],
              x: [0, 10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Particle 5 */}
          <motion.div
            className="absolute w-2.5 h-2.5 bg-[#915EFF]/50 rounded-full"
            style={{ top: '45%', left: '10%' }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          
          {/* Particle 6 */}
          <motion.div
            className="absolute w-1 h-1 bg-secondary/90 rounded-full"
            style={{ top: '70%', right: '15%' }}
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          />
        </div>

        {/* Mobile Content Container - Enhanced with glass morphism */}
        <div className="relative z-20 flex flex-col items-center text-center space-y-8">
          
          {/* Mobile Text Content - Enhanced with futuristic styling */}
          <motion.div
            className="flex flex-col items-center space-y-6 relative"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Subtle glow behind text */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/10 via-secondary/5 to-[#915EFF]/10 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Mobile Main Title - Enhanced typography */}
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-white leading-tight relative z-10"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                textShadow: '0 0 20px rgba(145, 94, 255, 0.5)',
                letterSpacing: '0.02em'
              }}
            >
              Hi, I'm <span className="text-secondary relative">
                Divakar
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#915EFF]/20 to-secondary/20 rounded-lg blur-sm"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </motion.h1>

            {/* Mobile Subtitle - Enhanced with glow effect */}
            <motion.div 
            className="text-lg sm:text-xl text-white-100 leading-relaxed max-w-sm relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            }}
          >
            From sketch to system, I design experiences that{' '}
            <span className="text-secondary font-semibold relative">
              solve and inspire
              <motion.div
                className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#915EFF] to-secondary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
            </span>
            .
          </motion.div>
          </motion.div>

          {/* Mobile Image - Enhanced with holographic effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          >
            {/* Enhanced Mobile Cutout Container */}
            <div className="relative w-52 h-68 sm:w-60 sm:h-76 mx-auto">
              {/* Multiple layered glow effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#915EFF]/40 via-secondary/20 to-transparent rounded-full blur-3xl transform scale-125"
                animate={{
                  scale: [1.25, 1.35, 1.25],
                  opacity: [0.4, 0.6, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-[#915EFF]/20 to-transparent rounded-full blur-2xl transform scale-110"
                animate={{
                  scale: [1.1, 1.25, 1.1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Enhanced Mobile Image with holographic border */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/30 via-transparent to-secondary/30 rounded-2xl"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(145, 94, 255, 0.3), transparent, rgba(46, 213, 115, 0.3))',
                      'linear-gradient(135deg, rgba(46, 213, 115, 0.3), transparent, rgba(145, 94, 255, 0.3))',
                      'linear-gradient(225deg, rgba(145, 94, 255, 0.3), transparent, rgba(46, 213, 115, 0.3))',
                      'linear-gradient(315deg, rgba(46, 213, 115, 0.3), transparent, rgba(145, 94, 255, 0.3))',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <motion.img 
                  src="src\assets\cutout\cutout.png" 
                  alt="Divakar Ejilan Professional Photo"
                  className="relative z-10 w-full h-full object-cover object-center"
                  style={{ 
                    filter: 'drop-shadow(0 25px 50px rgba(145, 94, 255, 0.4)) contrast(1.1) brightness(1.05)',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 85%, transparent 100%)'
                  }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              {/* Enhanced floating elements with more dynamics */}
              <motion.div
                className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#915EFF]/40 to-[#915EFF]/60 rounded-xl flex items-center justify-center backdrop-blur-md border border-[#915EFF]/50 shadow-lg"
                animate={{
                  rotate: [0, 15, 0],
                  scale: [1, 1.15, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-[#915EFF] text-lg">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-secondary/40 to-secondary/60 rounded-full flex items-center justify-center backdrop-blur-md border border-secondary/50 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-secondary text-sm">✨</span>
              </motion.div>
              
              {/* Additional floating element */}
              <motion.div
                className="absolute top-1/2 -left-4 w-6 h-6 bg-gradient-to-br from-white/20 to-white/40 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
                animate={{
                  x: [0, -8, 0],
                  rotate: [0, 360, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <span className="text-white text-xs">◆</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile CTA Buttons & Social Icons - Enhanced with futuristic styling */}
          <motion.div 
            className="flex flex-col items-center space-y-6 w-full max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {/* Enhanced View My Work Button */}
            <motion.button
              className="relative w-full px-8 py-4 bg-gradient-to-r from-[#915EFF] to-secondary text-white font-semibold rounded-xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAchievements}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.button>
            
            {/* Enhanced Mobile Social Icons */}
            <motion.div
              className="flex justify-center gap-5 py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {/* Enhanced GitHub Icon */}
              <motion.a
                href="https://github.com/divakar02"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white/10 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 25px rgba(145, 94, 255, 0.4)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Github className="relative z-10 w-7 h-7 text-white" />
              </motion.a>

              {/* Enhanced LinkedIn Icon */}
              <motion.a
                href="https://www.linkedin.com/in/divakar-ejilan-803658289/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white/10 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 25px rgba(145, 94, 255, 0.4)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-[#915EFF]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Linkedin className="relative z-10 w-7 h-7 text-white" />
              </motion.a>

              {/* Enhanced Mail Icon */}
              <motion.a
                href="mailto:ejilandivakar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white/10 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 25px rgba(145, 94, 255, 0.4)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#915EFF]/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <Mail className="relative z-10 w-7 h-7 text-white" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
<div className="hidden md:flex relative z-10 inset-0 top-[120px] max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 flex-row items-center justify-between h-[calc(100vh-120px)]">
  
  {/* Left Side - Text Content */}
  <div className="flex-1 max-w-2xl">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col justify-center items-start"
    >
      {/* Decorative Line */}
      <div className='flex items-center mb-8'>
        <motion.div 
          className='w-5 h-5 rounded-full bg-[#915EFF]'
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: ['0 0 0 0 rgba(145, 94, 255, 0.4)', '0 0 0 10px rgba(145, 94, 255, 0)', '0 0 0 0 rgba(145, 94, 255, 0)'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className='w-32 h-1 bg-gradient-to-r from-[#915EFF] to-transparent ml-4'
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Main Heading */}
      <motion.h1
        className={`${styles.heroHeadText} text-white leading-tight`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-secondary'>Divakar Ejilan</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.div  
        className={`${styles.heroSubText} mt-6 text-white-100 leading-relaxed`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        From sketch to system,<br />
        I design experiences that <span className="text-secondary font-semibold">solve and inspire</span>.
      </motion.div>

      {/* Desktop CTA Buttons */}
      <motion.div 
        className="flex flex-row gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(145, 94, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAchievements}
        >
          View My Work
        </motion.button>
        
        {/* Desktop Social Icons - Display directly */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/divakar02"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 0 15px rgba(145, 94, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://www.linkedin.com/in/divakar-ejilan-803658289/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 0 15px rgba(145, 94, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>

          {/* Twitter/X Icon */}
          <motion.a
            href="mailto:ejilandivakar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white backdrop-blur-sm border border-white/20 hover:border-secondary/50 transition-all duration-300 bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 0 15px rgba(145, 94, 255, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>

  {/* Right Side - Professional Cutout (Desktop Only) */}
  <motion.div
    className="relative z-10 w-[700px] h-[700px] lg:w-[500px] lg:h-[650px] rounded-full overflow-hidden"
    whileHover={{ 
      scale: 1.02,
    }}
    transition={{ 
      duration: 0.4,
      ease: "easeOut",
    }}
    style={{
      maskImage: `
        radial-gradient(ellipse at center, 
          rgba(0,0,0,1) 55%, 
          rgba(0,0,0,0.8) 70%, 
          rgba(0,0,0,0.4) 85%, 
          rgba(0,0,0,0) 100%
        )
      `,
      WebkitMaskImage: `
        radial-gradient(ellipse at center, 
          rgba(0,0,0,1) 55%, 
          rgba(0,0,0,0.8) 70%, 
          rgba(0,0,0,0.4) 85%, 
          rgba(0,0,0,0) 100%
        )
      `,
      backdropFilter: 'blur(2px)',
      opacity: 0.95,
    }}
  >
    {/* Subtle Professional Border */}
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-white/10"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(255,255,255,0.1) 0%, 
            rgba(255,255,255,0.05) 50%, 
            rgba(255,255,255,0.02) 100%
          )
        `,
        zIndex: -1,
      }}
      whileHover={{
        borderColor: 'rgba(255,255,255,0.15)',
      }}
      transition={{ duration: 0.3 }}
    />

    {/* Primary Image */}
    <motion.img 
      src="src/assets/cutout/cutout.png" 
      alt="Divakar Ejilan Professional Photo"
      className="w-full h-full object-cover object-bottom"
      style={{
        filter: `
          blur(0.2px) 
          drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))
          drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))
          contrast(1.02)
          brightness(1.01)
          saturate(1.05)
        `,
        opacity: 0.98,
      }}
      whileHover={{
        filter: `
          blur(0px) 
          drop-shadow(0 12px 30px rgba(0, 0, 0, 0.2))
          drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))
          contrast(1.03)
          brightness(1.02)
          saturate(1.08)
        `,
      }}
      transition={{ duration: 0.3 }}
    />

    {/* Subtle Depth Enhancement */}
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        background: `
          radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 40%,
            transparent 70%
          )
        `,
        mixBlendMode: 'soft-light',
      }}
      animate={{
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Professional Edge Definition */}
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        background: `
          radial-gradient(
            ellipse at center,
            transparent 50%,
            rgba(0, 0, 0, 0.05) 65%,
            rgba(0, 0, 0, 0.1) 80%,
            transparent 90%
          )
        `,
        mixBlendMode: 'multiply',
      }}
      whileHover={{
        background: `
          radial-gradient(
            ellipse at center,
            transparent 50%,
            rgba(0, 0, 0, 0.03) 65%,
            rgba(0, 0, 0, 0.08) 80%,
            transparent 90%
          )
        `,
      }}
      transition={{ duration: 0.3 }}
    />

    {/* Minimal Highlight Accent */}
    <motion.div
      className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
        filter: 'blur(1px)',
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Hover State Enhancement */}
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none opacity-0"
      style={{
        background: `
          radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 40%,
            transparent 70%
          )
        `,
        mixBlendMode: 'overlay',
      }}
      whileHover={{
        opacity: 0.8,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    />
  </motion.div>

</div>
      
    </section>
  );
};

export default Hero;