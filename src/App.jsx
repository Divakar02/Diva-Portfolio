import { BrowserRouter } from "react-router-dom";

import { Overview, Contact, Hero, Navbar,  Achievements, Certifications,Academics, Project} from "./components";

import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";


// Enhanced Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 80;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.6 ? '#00F5FF' : Math.random() > 0.3 ? '#915EFF' : '#FF6B6B',
        glowIntensity: Math.random() * 0.5 + 0.3,
        type: Math.random() > 0.7 ? 'star' : 'circle'
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: `drop-shadow(0 0 ${particle.size * 2}px ${particle.color}80)`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [particle.opacity, particle.opacity * 0.2, particle.opacity],
            scale: [1, 1.5, 1],
            rotate: particle.type === 'star' ? [0, 360] : [0, 180, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === 'star' ? (
            <div
              className="w-full h-full"
              style={{
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
            />
          ) : (
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced Geometric Shapes Component
const GeometricShapes = () => {
  const shapes = [
    { type: 'hexagon', x: 10, y: 20, size: 120, color: '#00F5FF', opacity: 0.15 },
    { type: 'diamond', x: 80, y: 70, size: 80, color: '#915EFF', opacity: 0.12 },
    { type: 'octagon', x: 50, y: 10, size: 100, color: '#FF6B6B', opacity: 0.1 },
    { type: 'triangle', x: 20, y: 80, size: 90, color: '#00F5FF', opacity: 0.08 },
    { type: 'hexagon', x: 70, y: 30, size: 60, color: '#915EFF', opacity: 0.12 },
    { type: 'circle', x: 30, y: 60, size: 110, color: '#FF6B6B', opacity: 0.06 },
    { type: 'diamond', x: 85, y: 15, size: 50, color: '#00F5FF', opacity: 0.14 },
    { type: 'octagon', x: 15, y: 85, size: 70, color: '#915EFF', opacity: 0.1 },
  ];

  const getShapeClipPath = (type) => {
    switch (type) {
      case 'hexagon':
        return 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';
      case 'diamond':
        return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      case 'octagon':
        return 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
      case 'triangle':
        return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      case 'circle':
        return 'circle(50% at 50% 50%)';
      default:
        return 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [shape.opacity, shape.opacity * 0.3, shape.opacity],
          }}
          transition={{
            duration: 25 + index * 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        >
          {/* Main Shape with Gradient */}
          <div
            className="w-full h-full relative"
            style={{
              clipPath: getShapeClipPath(shape.type),
              background: `conic-gradient(from 0deg, ${shape.color}40, transparent, ${shape.color}20, transparent, ${shape.color}30)`,
              filter: 'blur(1px)',
            }}
          />
          
          {/* Glowing Border */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: getShapeClipPath(shape.type),
              border: `1px solid ${shape.color}60`,
              filter: `drop-shadow(0 0 8px ${shape.color}40)`,
            }}
          />
          
          {/* Inner Glow */}
          <motion.div
            className="absolute inset-2"
            style={{
              clipPath: getShapeClipPath(shape.type),
              background: `radial-gradient(circle, ${shape.color}20 0%, transparent 70%)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

 
const App = () => {
  return (
    <BrowserRouter>
      
      <div className='relative z-0 bg-primary'>
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        
          <Navbar/>
          
        </div>
        <FloatingParticles/>
        <GeometricShapes/>
        
        <Hero />
        <Overview/>
        <Academics/>
        <Project/>
        <Certifications />
        <Achievements />
        <Contact />

      </div>
    </BrowserRouter>
  );
}

export default App;