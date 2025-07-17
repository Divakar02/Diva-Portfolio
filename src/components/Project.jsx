import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Zap, Sparkles, ChevronLeft, ChevronRight, X, Calendar, Users } from "lucide-react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ImageCarousel = ({ images, projectName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${projectName} - Image ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Carousel Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative mt-10 max-w-6xl w-full max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 p-6 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-full transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Image Gallery */}
              <div className="relative">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-800">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About This Project</h3>
                    <p className="text-gray-300 leading-relaxed">{project.detailedDescription}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={tag.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`px-3 py-2 text-sm font-medium ${tag.color} bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:bg-gray-700/50 transition-all duration-300`}
                        >
                          #{tag.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(project.github_link, "_blank")}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-600/50 rounded-xl transition-all duration-300 group"
                    >
                      <Github className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
                      <span className="text-white font-medium">View on GitHub</span>
                    </motion.button>
                    
                 
                  </div>

                  {/* Project Details */}
                  <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-400 text-sm">Contributors</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-white text-sm">{project.contributors}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Status</span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${
                            project.status === 'Production' ? 'bg-green-400' : 
                            project.status === 'Beta' ? 'bg-yellow-400' : 'bg-blue-400'
                          }`} />
                          <span className="text-white text-sm">{project.status}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Date</span>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-white text-sm">{new Date(project.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group w-full h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl md:rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-400/20 flex flex-col">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Image Carousel - Fixed Height */}
        <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
          <ImageCarousel images={project.images} projectName={project.name} />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
          
          {/* Action Buttons */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github_link, "_blank");
              }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center hover:bg-gray-800/80 hover:border-cyan-400/50 transition-all duration-300 group/btn"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover/btn:text-cyan-400 transition-colors duration-300" />
            </motion.button>
            
       
          </div>

          {/* Status Indicator */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 px-2 py-1 bg-black/70 backdrop-blur-sm border border-gray-600/50 rounded-full">
            <div className={`w-2 h-2 rounded-full ${
              project.status === 'Production' ? 'bg-green-400' : 
              project.status === 'Beta' ? 'bg-yellow-400' : 'bg-blue-400'
            }`} />
            <span className="text-xs font-medium text-white">{project.status}</span>
          </div>
        </div>

        {/* Content - Flexible Height */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
            <motion.div
              animate={{ rotate: isHovered ? 15 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-3 flex-shrink-0"
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </motion.div>
          </div>

          {/* Tags - Flexible positioning */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + tagIndex * 0.05 }}
                className={`px-2 py-1 text-xs font-medium ${tag.color} bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full hover:bg-gray-700/50 transition-all duration-300`}
              >
                #{tag.name}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-400 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Hover Effect Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
          >
            <ChevronRight className="w-5 h-5 text-cyan-400" />
          </motion.div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
               style={{
                 background: 'linear-gradient(45deg, transparent 30%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
                 transform: 'translateX(-100%)',
                 animation: isHovered ? 'shimmer 2s infinite' : 'none'
               }} />
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen   relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <br /> <br /> 
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#915EFF] to-white bg-clip-text text-transparent">
              Project Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Celebrating innovation, dedication, and the pursuit of excellence across competitions and presentations
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#915EFF] to-[#00BFFF] mx-auto mt-8 rounded-full"></div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="wait">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onClick={handleProjectClick}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />

      {/* Custom Styles */}
      <style>
  {`
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}
</style>

    </div>
  );
};

export default SectionWrapper(Project, "projects");