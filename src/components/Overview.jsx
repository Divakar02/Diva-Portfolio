import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { SectionWrapper } from "../hoc";


const services = [
  {
    title: "Cross-Platform Apps",
    icon: "📱",
    description: "Seamless experiences using React.js & Flutter"
  },
  {
    title: "Backend Engineering", 
    icon: "🛠️",
    description: "Robust APIs with Node.js & Flask"
  },
  {
    title: "AI-Powered Solutions",
    icon: "🤖",
    description: "Integrating intelligent systems with ML & AI"
  },
  {
    title: "IoT & Embedded Systems",
    icon: "🌐",
    description: "Hardware automation using Arduino/ESP32 (C/C++)"
  }
];


 
// Enhanced holographic border with better animations
const HolographicBorder = ({ children, className = "", intensity = "medium" }) => {
  const intensityClasses = {
    low: "opacity-30 blur-sm",
    medium: "opacity-50 blur-sm",
    high: "opacity-70 blur-md"
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl ${intensityClasses[intensity]}`}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative bg-black/20 backdrop-blur-md rounded-2xl border border-cyan-500/30">
        {children}
      </div>
    </div>
  );
};

// Enhanced service card with improved interactions
const ServiceCard = ({ index, title, icon, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-[280px] mx-auto group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-[320px] cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
        }}
        transition={{ duration: 0.3 }}
      >
         
          <div className="relative h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden">
            
            {/* Dynamic background grid */}
            <motion.div 
              className="absolute inset-0 opacity-20"
              animate={{
                backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                backgroundImage: "linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            
            {/* Mouse follower glow */}
            <motion.div
              className="absolute w-32 h-32 bg-gradient-radial from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-xl"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
              }}
              animate={{
                opacity: isHovered ? 0.8 : 0,
                scale: isHovered ? 1.2 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon with 3D effect */}
            <motion.div
              className="relative mb-6 p-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30"
              animate={{
                rotateY: isHovered ? [0, 360] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl filter drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                {icon}
              </div>
            </motion.div>

            {/* Title with animated gradient */}
            <motion.h3
              className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            {/* Scanning line effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              animate={{
                y: isHovered ? [0, 320, 0] : -10,
                opacity: isHovered ? [0, 1, 0] : 0,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-400/50" />
          </div>
         
      </motion.div>
    </motion.div>
  );
};

// Creative question mark component
const AnimatedQuestionMark = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="inline-block relative mx-2"
      initial={{ opacity: 0, rotate: -180, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        rotate: isVisible ? 0 : -180,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <motion.span
        className="text-6xl md:text-8xl font-black"
        style={{
          background: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 25%, #45B7D1 50%, #96CEB4 75%, #FFEAA7 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          backgroundSize: "300% 300%",
          filter: "drop-shadow(0 0 20px rgba(255,107,107,0.5))",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        ?
      </motion.span>
      
      {/* Orbit rings around question mark */}
      <motion.div
        className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-2 border border-purple-400/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

// Enhanced typewriter effect
const TypewriterText = ({ text, speed = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
        animate={{ opacity: isTyping ? [1, 0] : 0 }}
        transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0 }}
      />
    </span>
  );
};

// Main component
const Overview = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  if (!mounted) return null;

  return (
    <div ref={ref} className="relative min-h-screen  overflow-hidden">

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(6,182,212,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(147,51,234,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(236,72,153,0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12">
        {/* Enhanced header with creative question mark */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="flex items-center justify-center mb-8 mt-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-black leading-tight"
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #915EFF 25%, #00BFFF 50%, #915EFF 75%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Who Am I
            </motion.h1>
            <AnimatedQuestionMark />
          </div>
       
          <motion.div 
            className="w-32 md:w-48 h-1 bg-gradient-to-r from-[#915EFF] via-[#00BFFF] to-[#915EFF] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </motion.div>

        {/* Enhanced description section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-10 md:mb-12"
        >
          <div className="max-w-5xl mx-auto">
            <HolographicBorder className="p-[2px]" intensity="high">
              <div className="p-8 md:p-12 bg-black/40 backdrop-blur-xl rounded-2xl relative overflow-hidden">
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  style={{
                    backgroundImage: "linear-gradient(45deg, rgba(6,182,212,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(147,51,234,0.1) 25%, transparent 25%)",
                    backgroundSize: "30px 30px",
                  }}
                />
                
                <div className="relative z-10">
                  {isMobile ? (
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      I'm an innovative IT engineer passionate about building smart, 
                      future-ready solutions using React, Flutter, Node.js, and AI. 
                      I specialize in developing modern web and mobile apps that solve 
                      real-world problems with creativity and precision.
                    </p>
                  ) : (
                    <div className="text-center">
                      <TypewriterText
                        text="I'm an innovative IT engineer passionate about building smart, future-ready solutions using cutting-edge technologies like React, Flutter, Node.js, and AI. I specialize in developing modern web and mobile applications that are not only fast and scalable but also meaningful and user-centric. With a mindset driven by curiosity and purpose, I transform complex ideas into elegant digital experiences that solve real-world problems. Let's build something extraordinary together."
                        speed={30}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              </div>
            </HolographicBorder>
          </div>
        </motion.div>

        {/* Enhanced services section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-1"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            What are the Services I offer ?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced corner decorations */}
      <motion.div 
        className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-cyan-400/60 rounded-tr-lg"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-purple-400/60 rounded-bl-lg"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse" />
    </div>
  );
};

export default SectionWrapper(Overview,"overview");