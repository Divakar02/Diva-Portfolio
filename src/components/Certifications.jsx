import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationModal = ({ certification, isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Handle escape key
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !certification) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] p-4"
        onClick={onClose}
        style={{ margin: 0 }} // Ensure no margin interference
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-tertiary rounded-2xl w-full max-w-3xl max-h-[75vh] overflow-y-auto relative shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black-200 hover:bg-gray-700 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6">
            {/* Header Section */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="w-full">
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="w-full h-[200px] object-cover rounded-2xl"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-white font-bold text-[24px] leading-tight flex-1">
                    {certification.name}
                  </h2>
                  
                  {/* Provider Logo */}
                  <div className="flex-shrink-0 bg-white rounded-full p-2">
                    <img
                      src={certification.provider_logo}
                      alt={certification.provider}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                <p className="text-secondary text-[16px] mb-3">{certification.provider}</p>
                
                {/* Status Badge */}
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                    certification.status === 'Completed' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {certification.status}
                  </div>
                </div>

                {/* Course Details */}
                <div className="bg-black-200 p-3 rounded-lg mb-4">
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <span className="text-white font-semibold text-sm">Course Start: </span>
                      <span className="text-secondary text-sm">{certification.course_start}</span>
                    </div>
                    {certification.course_end && (
                      <div>
                        <span className="text-white font-semibold text-sm">Course End: </span>
                        <span className="text-secondary text-sm">{certification.course_end}</span>
                      </div>
                    )}
                    {certification.credential_id && (
                      <div>
                        <span className="text-white font-semibold text-sm">Credential ID: </span>
                        <span className="text-secondary text-sm">{certification.credential_id}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-4">
                  {certification.linkedin_url && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(certification.linkedin_url, "_blank");
                      }}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                      </svg>
                      LinkedIn
                    </button>
                  )}
                  
                  {certification.github_url && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(certification.github_url, "_blank");
                      }}
                      className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                      </svg>
                      GitHub
                    </button>
                  )}
                  
                  {certification.credential_url && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(certification.credential_url, "_blank");
                      }}
                      className="bg-[#915EFF] hover:bg-[#7c3aed] px-3 py-2 rounded-lg text-white text-sm transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verify
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-6">
              <h3 className="text-white font-bold text-[18px] mb-3">Course Description</h3>
              <p className="text-secondary text-[14px] leading-relaxed">
                {certification.description}
              </p>
            </div>

            {/* Tags Section */}
            <div className="mb-6">
              <h3 className="text-white font-bold text-[16px] mb-3">Technologies & Topics</h3>
              <div className="flex flex-wrap gap-2">
                {certification.tags.map((tag) => (
                  <span
                    key={`${certification.name}-${tag.name}`}
                    className={`px-3 py-1 rounded-full text-[12px] font-medium ${tag.color} border border-current`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            {certification.skills && certification.skills.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white font-bold text-[16px] mb-3">Skills Gained</h3>
                <div className="grid grid-cols-1 gap-2">
                  {certification.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#915EFF] rounded-full flex-shrink-0"></div>
                      <span className="text-secondary text-[13px]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images */}
            {certification.additional_images && certification.additional_images.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white font-bold text-[16px] mb-3">Course Content</h3>
                <div className="grid grid-cols-2 gap-3">
                  {certification.additional_images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Course content ${imgIndex + 1}`}
                      className="w-full h-[120px] object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const CertificationCard = ({ index, certification, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(certification);
  };

  return (
    <div 
      className="bg-tertiary p-5 rounded-2xl transition-all duration-500 relative w-[280px] h-auto flex-shrink-0 hover:shadow-2xl hover:shadow-[#915EFF]/20 hover:border hover:border-[#915EFF]/30 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative w-full h-[160px]">
        {/* Main Certificate Image */}
        <img
          src={certification.image}
          alt={certification.name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            certification.status === 'Completed' 
              ? 'bg-green-500 text-white' 
              : 'bg-yellow-500 text-black'
          }`}>
            {certification.status}
          </div>
        </div>

        {/* Click indicator overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 rounded-full p-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-white font-bold text-[20px] line-clamp-2 flex-1">{certification.name}</h3>
          
          {/* Certification Provider Logo */}
          <div className="flex-shrink-0">
            <div className="bg-transparent w-10 h-10 rounded-full flex justify-center items-center">
              <img
                src={certification.provider_logo}
                alt={certification.provider}
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>
        
        <p className="mt-2 text-secondary text-[12px]">{certification.provider}</p>
        
        {/* Course Tags */}
        <div className="mt-3 flex flex-wrap gap-2 min-h-[35px]">
          {certification.tags.slice(0, 3).map((tag) => (
            <p
              key={`${certification.name}-${tag.name}`}
              className={`text-[12px] ${tag.color} font-medium`}
            >
              #{tag.name}
            </p>
          ))}
          {certification.tags.length > 3 && (
            <p className="text-[12px] text-secondary font-medium">
              +{certification.tags.length - 3} more
            </p>
          )}
        </div>

        {/* Certification Details */}
        <div className="mt-3 flex justify-between items-start flex-1">
          <div className="flex items-center gap-4">
            <div className="text-secondary text-[11px]">
              <p>Start: {certification.course_start}</p>
              {certification.course_end && (
                <p>End: {certification.course_end}</p>
              )}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-2 self-start">
            {certification.linkedin_url && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(certification.linkedin_url, "_blank");
                }}
                className="bg-blue-600 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </div>
            )}
            
            {certification.github_url && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(certification.github_url, "_blank");
                }}
                className="bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-700 transition-colors"
              >
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  
  // Create infinite array by tripling the certifications
  const infiniteCertifications = [
    ...certifications,
    ...certifications,
    ...certifications
  ];
  
  const cardWidth = 300; // Card width + gap
  const totalWidth = certifications.length * cardWidth;
  
  const handleCardClick = (certification) => {
    if (isDragging) return; // Prevent modal while dragging
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCertification(null);
    }, 300); // Wait for animation to complete
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    // Small delay to prevent accidental clicks after drag
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
    
    const currentX = x.get();
    const velocity = info.velocity.x;
    
    // Calculate the nearest snap point
    let targetX = Math.round(currentX / cardWidth) * cardWidth;
    
    // Add velocity-based momentum
    if (Math.abs(velocity) > 500) {
      const momentumOffset = (velocity / Math.abs(velocity)) * cardWidth;
      targetX += momentumOffset;
    }
    
    // Handle infinite loop bounds
    if (targetX > 0) {
      // Moving too far right, wrap to end
      targetX = targetX - totalWidth;
    } else if (targetX < -totalWidth * 2) {
      // Moving too far left, wrap to start
      targetX = targetX + totalWidth;
    }
    
    // Animate to the target position
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  // Auto-reset position when it goes out of bounds (for infinite effect)
  useEffect(() => {
    const unsubscribe = x.onChange((latest) => {
      if (latest > cardWidth) {
        x.set(latest - totalWidth);
      } else if (latest < -totalWidth * 2 - cardWidth) {
        x.set(latest + totalWidth);
      }
    });
    
    return unsubscribe;
  }, [x, totalWidth, cardWidth]);

  return (
    <>
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 "
      >
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
         
          <br /><br />
          <span className="bg-gradient-to-r from-[#00BFFF] via-[#915EFF] to-white bg-clip-text text-transparent">
            Certification Courses
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Celebrating innovation, dedication, and the pursuit of excellence across competitions and presentations
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-[#915EFF] to-[#00BFFF] mx-auto mt-8 rounded-full"></div>
      </motion.div>
      </div>

      <div className="mt-20 overflow-hidden">
        <div className="flex justify-center">
          <div ref={constraintsRef} className="w-full max-w-6xl overflow-hidden">
            <motion.div
              className="flex gap-5 cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -totalWidth * 2, right: totalWidth }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragMomentum={false}
              initial={{ x: -totalWidth }}
            >
              {infiniteCertifications.map((certification, index) => {
                const originalIndex = index % certifications.length;
                return (
                  <motion.div
                    key={`${certification.name}-${index}`}
                    variants={fadeIn("up", "spring", originalIndex * 0.1, 0.75)}
                  >
                    <CertificationCard
                      index={originalIndex}
                      certification={certification}
                      onClick={handleCardClick}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Drag Hint */}
        <div className="text-center mt-6">
          <p className="text-secondary text-[14px] opacity-70">
            ← Drag to explore • Click cards for details →
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const targetX = -totalWidth - (index * cardWidth);
                animate(x, targetX, {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                });
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.abs((x.get() + totalWidth) / cardWidth + index) % certifications.length < 0.5
                  ? 'bg-[#915EFF]'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");