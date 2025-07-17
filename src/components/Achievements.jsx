import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
 
// Certificate Popup Component
const CertificatePopup = ({ certificate, isOpen, onClose, title }) => {
  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f172a] rounded-2xl border border-[#915EFF]/30 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-4 md:p-6 border-b border-[#915EFF]/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-[#915EFF] bg-clip-text text-transparent">
                  Certificate
                </h3>
                <p className="text-gray-400 text-sm mt-1">{title}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/30 hover:to-red-600/30 rounded-lg flex items-center justify-center transition-all duration-300 border border-red-500/30"
              >
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
          </div>

          <div className="relative p-4 md:p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-xl border border-[#915EFF]/30"
            >
              <img
                src={certificate}
                alt="Certificate"
                className="w-full h-auto max-h-[60vh] object-contain bg-white/5"
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = certificate;
                  link.download = `${title.replace(/\s+/g, '_')}_Certificate.jpg`;
                  link.click();
                }}
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-[#915EFF]/80 to-[#00BFFF]/80 backdrop-blur-sm hover:from-[#915EFF] hover:to-[#00BFFF] text-white p-2 md:p-3 rounded-lg transition-all duration-300 border border-white/20"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const getPositionColor = (position) => {
  const positionLower = position.toLowerCase();
  
  if (positionLower.includes("winner") || positionLower.includes("1st")) {
    return {
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      text: "text-yellow-400",
      border: "border-yellow-400/50",
      glow: "rgba(251, 191, 36, 0.6)",
      bgGlow: "bg-yellow-400/20"
    };
  } else if (positionLower.includes("runner") && !positionLower.includes("2nd")) {
    return {
      gradient: "from-gray-300 via-gray-400 to-gray-500",
      text: "text-gray-300",
      border: "border-gray-300/50",
      glow: "rgba(209, 213, 219, 0.6)",
      bgGlow: "bg-gray-300/20"
    };
  } else if (positionLower.includes("2nd runner") || positionLower.includes("3rd")) {
    return {
      gradient: "from-amber-600 via-amber-700 to-amber-800",
      text: "text-amber-500",
      border: "border-amber-500/50",
      glow: "rgba(245, 158, 11, 0.6)",
      bgGlow: "bg-amber-500/20"
    };
  } else if (positionLower.includes("2nd")) {
    return {
      gradient: "from-gray-300 via-gray-400 to-gray-500",
      text: "text-gray-300",
      border: "border-gray-300/50",
      glow: "rgba(209, 213, 219, 0.6)",
      bgGlow: "bg-gray-300/20"
    };
  }
  
  return {
    gradient: "from-[#915EFF] to-[#00BFFF]",
    text: "text-[#915EFF]",
    border: "border-[#915EFF]/50",
    glow: "rgba(145, 94, 255, 0.5)",
    bgGlow: "bg-[#915EFF]/20"
  };
};

const CarouselSection = ({ title, categoryAchievements, onCertificateClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (categoryAchievements.length === 0) return null;

  const currentAchievement = categoryAchievements[currentIndex];
  const positionStyle = getPositionColor(currentAchievement.position);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryAchievements.length);
    setCurrentImageIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categoryAchievements.length) % categoryAchievements.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentAchievement.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentAchievement.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="mb-12 md:mb-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12 px-4"
      >
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-[#915EFF] to-[#00BFFF] bg-clip-text text-transparent mb-4">
          ◆ {title} ◆
        </h3>
        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#915EFF] to-[#00BFFF] mx-auto rounded-full"></div>
      </motion.div>

      {/* Desktop Carousel Container */}
      <div className="relative hidden md:flex items-center justify-center">
        {/* Left Navigation Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-0 z-20 w-14 h-14 bg-gradient-to-r from-[#915EFF]/20 to-[#00BFFF]/20 backdrop-blur-md hover:from-[#915EFF]/40 hover:to-[#00BFFF]/40 rounded-full flex items-center justify-center transition-all duration-300 border border-[#915EFF]/30 hover:border-[#915EFF]/60 shadow-lg hover:shadow-[#915EFF]/30"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Achievement Card - Desktop */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-16"
        >
          <div 
            className="relative overflow-hidden rounded-3xl p-8 min-h-[600px] border border-[#915EFF]/20 hover:border-[#915EFF]/50 transition-all duration-500 shadow-2xl hover:shadow-[#915EFF]/20"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 26, 46, 0.8), rgba(22, 33, 62, 0.8), rgba(15, 23, 42, 0.8)), url(${currentAchievement.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute -top-6 -right-6 w-32 h-32 ${positionStyle.bgGlow} rounded-full opacity-15 blur-xl animate-pulse`}></div>
              <div className={`absolute -bottom-10 -left-10 w-40 h-40 ${positionStyle.bgGlow} rounded-full opacity-10 blur-2xl animate-pulse delay-1000`}></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23915EFF%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-6 right-6 z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-[#915EFF]/30 to-[#00BFFF]/30 backdrop-blur-md text-white text-sm font-bold rounded-full border border-[#915EFF]/50 shadow-lg capitalize"
              >
                {currentAchievement.category.replace(/([A-Z])/g, ' $1').trim()}
              </motion.div>
            </div>

            {/* Position Badge */}
            <div className="absolute top-6 left-6 z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6 }}
                className={`relative w-24 h-24 bg-gradient-to-br ${positionStyle.gradient} rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20`}
                style={{
                  boxShadow: `0 0 30px ${positionStyle.glow}, inset 0 0 20px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className="text-center">
                  <div className="text-white text-xs font-bold leading-tight">
                    {currentAchievement.position.split(' ').map((word, idx) => (
                      <div key={idx} className={idx === 0 ? "text-sm font-black" : "text-xs"}>
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`absolute inset-0 rounded-2xl border-2 ${positionStyle.border} animate-pulse`}></div>
                
                <div className="absolute -top-2 -right-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                  >
                    {currentAchievement.position.toLowerCase().includes("winner") || currentAchievement.position.toLowerCase().includes("1st") ? (
                      <span className="text-yellow-600 text-sm">🏆</span>
                    ) : currentAchievement.position.toLowerCase().includes("runner") && !currentAchievement.position.toLowerCase().includes("2nd") ? (
                      <span className="text-gray-600 text-sm">🥈</span>
                    ) : currentAchievement.position.toLowerCase().includes("2nd runner") || currentAchievement.position.toLowerCase().includes("3rd") ? (
                      <span className="text-amber-600 text-sm">🥉</span>
                    ) : (
                      <span className="text-purple-600 text-sm">⭐</span>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Main Content - Desktop */}
            <div className="relative z-10 pt-28 flex flex-col lg:flex-row gap-8 h-full">
              {/* Left Column - Text Content */}
              <div className="flex-1">
                <motion.h3 
                  className="text-2xl font-black mb-4 leading-tight"
                  style={{
                    background: `linear-gradient(135deg, #FFFFFF 0%, ${positionStyle.text === 'text-yellow-400' ? '#FFD700' : positionStyle.text === 'text-gray-300' ? '#D1D5DB' : positionStyle.text === 'text-amber-500' ? '#F59E0B' : '#915EFF'} 50%, #00BFFF 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {currentAchievement.title}
                </motion.h3>
                
                <div className="flex items-center mb-3">
                  <div className={`w-2 h-2 ${positionStyle.text.replace('text-', 'bg-')} rounded-full mr-3 animate-pulse`}></div>
                  <p className={`${positionStyle.text} text-sm font-semibold`}>
                    📍 {currentAchievement.venue}
                  </p>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">
                    🗓️ {currentAchievement.date}
                  </p>
                </div>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed text-base mb-8"
                >
                  {currentAchievement.detailedDescription}
                </motion.p>

                {/* Tags */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {currentAchievement.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className={`px-3 py-2 text-sm bg-gradient-to-r from-${positionStyle.bgGlow} to-[#00BFFF]/15 text-white rounded-full backdrop-blur-sm border ${positionStyle.border} font-medium hover:border-opacity-50 transition-all duration-300`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={currentAchievement.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={currentAchievement.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-600/25"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </motion.a>
                  {currentAchievement.certificate && (
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onCertificateClick(currentAchievement.certificate, currentAchievement.title)}
                      className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex-1 flex flex-col items-center">
                {/* Image Container */}
                <div className="relative w-full max-w-sm mb-6">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl border-2 border-[#915EFF]/30 shadow-2xl"
                  >
                    <img
                      src={currentAchievement.images[currentImageIndex]}
                      alt={`${currentAchievement.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Image Navigation */}
                    {currentAchievement.images.length > 1 && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </>
                    )}
                    
                    {/* Image Indicators */}
                    {currentAchievement.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {currentAchievement.images.map((_, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx === currentImageIndex 
                                ? 'bg-white shadow-lg' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Achievement Indicators */}
                <div className="flex space-x-2 mt-4">
                  {categoryAchievements.map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setCurrentImageIndex(0);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                          ? `bg-gradient-to-r ${positionStyle.gradient} shadow-lg` 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Navigation Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-0 z-20 w-14 h-14 bg-gradient-to-r from-[#915EFF]/20 to-[#00BFFF]/20 backdrop-blur-md hover:from-[#915EFF]/40 hover:to-[#00BFFF]/40 rounded-full flex items-center justify-center transition-all duration-300 border border-[#915EFF]/30 hover:border-[#915EFF]/60 shadow-lg hover:shadow-[#915EFF]/30"

>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Carousel Container */}
      <div className="md:hidden relative">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="px-4"
        >
          {/* Mobile Achievement Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e]/95 via-[#16213e]/95 to-[#0f172a]/95 backdrop-blur-sm border border-[#915EFF]/20 shadow-2xl">
            {/* Mobile Header */}
            <div className="relative p-4 pb-0">
              {/* Position and Category Row */}
              <div className="flex items-center justify-between mb-4">
                {/* Position Badge - Mobile */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative w-16 h-16 bg-gradient-to-br ${positionStyle.gradient} rounded-xl flex items-center justify-center shadow-lg border border-white/20`}
                  style={{
                    boxShadow: `0 0 20px ${positionStyle.glow}`
                  }}
                >
                  <div className="text-center">
                    <div className="text-white text-xs font-bold leading-tight">
                      {currentAchievement.position.split(' ').map((word, idx) => (
                        <div key={idx} className={idx === 0 ? "text-sm font-black" : "text-xs"}>
                          {word.length > 6 ? word.substring(0, 6) : word}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute -top-1 -right-1">
                    <div className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                      {currentAchievement.position.toLowerCase().includes("winner") || currentAchievement.position.toLowerCase().includes("1st") ? (
                        <span className="text-yellow-600 text-xs">🏆</span>
                      ) : currentAchievement.position.toLowerCase().includes("runner") && !currentAchievement.position.toLowerCase().includes("2nd") ? (
                        <span className="text-gray-600 text-xs">🥈</span>
                      ) : currentAchievement.position.toLowerCase().includes("2nd runner") || currentAchievement.position.toLowerCase().includes("3rd") ? (
                        <span className="text-amber-600 text-xs">🥉</span>
                      ) : (
                        <span className="text-purple-600 text-xs">⭐</span>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Category Badge - Mobile */}
                <div className="flex-1 flex justify-end">
                  <div className="px-3 py-1.5 bg-gradient-to-r from-[#915EFF]/30 to-[#00BFFF]/30 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-[#915EFF]/40 capitalize">
                    {currentAchievement.category.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              </div>

              {/* Title - Mobile */}
              <motion.h3 
                className="text-xl font-bold mb-3 leading-tight pr-2"
                style={{
                  background: `linear-gradient(135deg, #FFFFFF 0%, ${positionStyle.text === 'text-yellow-400' ? '#FFD700' : positionStyle.text === 'text-gray-300' ? '#D1D5DB' : positionStyle.text === 'text-amber-500' ? '#F59E0B' : '#915EFF'} 50%, #00BFFF 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                {currentAchievement.title}
              </motion.h3>

              {/* Venue and Date - Mobile */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <div className={`w-1.5 h-1.5 ${positionStyle.text.replace('text-', 'bg-')} rounded-full mr-2 animate-pulse`}></div>
                  <p className={`${positionStyle.text} text-xs font-medium`}>
                    📍 {currentAchievement.venue}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                  <p className="text-gray-400 text-xs font-medium">
                    🗓️ {currentAchievement.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Image Section */}
            <div className="px-4 mb-4">
              <div className="relative overflow-hidden rounded-xl border border-[#915EFF]/30">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={currentAchievement.images[currentImageIndex]}
                    alt={`${currentAchievement.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                
                {/* Mobile Image Navigation */}
                {currentAchievement.images.length > 1 && (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}
                
                {/* Mobile Image Indicators */}
                {currentAchievement.images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {currentAchievement.images.map((_, idx) => (
                      <motion.button
                        key={idx}
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex 
                            ? 'bg-white shadow-md' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Content */}
            <div className="px-4 pb-4">
              {/* Description - Mobile */}
              <motion.p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {currentAchievement.detailedDescription}
              </motion.p>

              {/* Tags - Mobile */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {currentAchievement.tags.slice(0, 4).map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileTap={{ scale: 0.95 }}
                      className={`px-2.5 py-1 text-xs bg-gradient-to-r from-${positionStyle.bgGlow} to-[#00BFFF]/15 text-white rounded-full backdrop-blur-sm border ${positionStyle.border} font-medium`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {currentAchievement.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full backdrop-blur-sm border border-gray-500/30">
                      +{currentAchievement.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons - Mobile */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href={currentAchievement.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    href={currentAchievement.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </motion.a>
                  {currentAchievement.certificate && (
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onCertificateClick(currentAchievement.certificate, currentAchievement.title)}
                      className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.button>
                  )}
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="w-10 h-10 bg-gradient-to-r from-[#915EFF]/30 to-[#00BFFF]/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#915EFF]/40"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="w-10 h-10 bg-gradient-to-r from-[#915EFF]/30 to-[#00BFFF]/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#915EFF]/40"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Achievement Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {categoryAchievements.map((_, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 1.2 }}
              onClick={() => {
                setCurrentIndex(idx);
                setCurrentImageIndex(0);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? `bg-gradient-to-r ${positionStyle.gradient} shadow-lg` 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        {categoryAchievements.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mt-3 text-gray-500 text-xs"
          >
            Swipe or use arrows to navigate • {currentIndex + 1} of {categoryAchievements.length}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [certificateTitle, setCertificateTitle] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCertificateClick = (certificate, title) => {
    setSelectedCertificate(certificate);
    setCertificateTitle(title);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCertificate(null);
    setCertificateTitle("");
  };

// Group achievements by category
const groupedAchievements = achievements.reduce((acc, achievement) => {
  const category = achievement.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(achievement);
  return acc;
}, {});

// Custom category order
const categoryOrder = [
"Corporate Innovation Program",
"Hackathon",
"Paper Presentations",
"Project Expo",
"Ideathon",

];

// Category display names
const categoryNames = {
corporateInnovationProgram: "Corporate Innovation Program",
hackathons: "Hackathons",
competitions: "Competitions", 
certifications: "Certifications",
projects: "Projects",
internships: "Internships",
publications: "Publications"
};

// Sort categories according to custom order
const sortedCategories = categoryOrder.filter(category => groupedAchievements[category]);

  return (
    <div className="min-h-screen   py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 0%, #915EFF 25%, #00BFFF 50%, #915EFF 75%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite"
            }}
          >
            Achievements & Recognition
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A showcase of milestones, competitions, certifications, and recognitions that define my journey in technology and innovation.
          </motion.p>
          <motion.div 
            className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#915EFF] via-[#00BFFF] to-[#915EFF] mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Achievement Categories */}
        <div className="space-y-12 md:space-y-20">
          {sortedCategories.map((category) => (
            <CarouselSection
              key={category}
              title={categoryNames[category] || category}
              categoryAchievements={groupedAchievements[category]}
              onCertificateClick={handleCertificateClick}
            />
          ))}
        </div>
      </div>

      {/* Certificate Popup */}
      <CertificatePopup
        certificate={selectedCertificate}
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={certificateTitle}
      />

      {/* Custom Styles */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");