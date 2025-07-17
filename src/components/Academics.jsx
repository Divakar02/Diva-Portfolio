import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";



const Academics = () => {
  const educationData = [
    {
      id: 1,
      degree: "BACHELOR OF TECHNOLOGY - INFORMATION TECHNOLOGY",
      institution: "Sri Manakula Vinayagar Engineering College",
      location: "Puducherry - 605107",
      batch: "2022 - 2026",
      score: "9.29",
      scoreType: "CGPA",
      semester: "6th Semester",
      status: "ongoing",
      color: "from-violet-600 to-purple-700"
    },
    {
      id: 2,
      degree: "HIGHER SECONDARY SCHOOL : HSC - 12th Grade",
      institution: "Petit Seminaire Higher Secondary School",
      location: "Puducherry - 605001",
      batch: "July 2021 - May 2022",
      score: "84.33%",
      scoreType: "Percentage",
      status: "completed",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 3,
      degree: "SECONDARY SCHOOL : SSC - 10th Grade",
      institution: "Petit Seminaire Higher Secondary School",
      location: "Puducherry - 605001",
      batch: "June 2019 - March 2020",
      score: "84.80%",
      scoreType: "Percentage",
      status: "completed",
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 relative">
      {/* Background Particles and Shapes */}
   

      {/* Regular CSS styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .fadeInUp {
            animation-name: fadeInUp;
            animation-duration: 0.8s;
            animation-timing-function: ease-out;
            animation-fill-mode: both;
          }

          .glow-effect {
            box-shadow: 0 0 20px rgba(128, 77, 238, 0.3);
          }

          .hover-glow:hover {
            box-shadow: 0 0 30px rgba(128, 77, 238, 0.5);
          }

          .timeline-line {
            background: linear-gradient(to bottom, rgb(139, 92, 246), rgb(168, 85, 247), rgb(236, 72, 153));
          }
        `}
      </style>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */} 
        <br/>
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
            Academic Qualifications
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A foundation built on curiosity, academic excellence, and hands-on learning in the world of information technology.
          </motion.p>
          <motion.div 
            className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#915EFF] via-[#00BFFF] to-[#915EFF] mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Desktop Timeline Container */}
        <div className="hidden md:block relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-line rounded-full shadow-sm glow-effect"
            style={{ height: 'calc(100% - 2rem)' }}
          ></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10 w-6 h-6 bg-gradient-to-r ${edu.color} rounded-full border-4 border-gray-800 shadow-lg flex items-center justify-center glow-effect`}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover-glow">
                    <div className={`bg-gradient-to-r ${edu.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/10 rounded-full"></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              edu.status === 'ongoing'
                                ? 'bg-yellow-400 text-yellow-900'
                                : 'bg-green-400 text-green-900'
                            }`}
                          >
                            {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
                          </span>
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold leading-tight">{edu.degree}</h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-200 leading-tight">{edu.institution}</h4>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        <span className="text-gray-300">{edu.location}</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">{edu.batch}</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-300">{edu.scoreType}:</span>
                          <span className="font-bold text-2xl bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                            {edu.score}
                          </span>
                          {edu.semester && (
                            <span className="text-sm text-gray-400">({edu.semester})</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card Stack */}
        <div className="md:hidden space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover-glow">
                {/* Mobile Header with Score Highlight */}
                <div className={`bg-gradient-to-r ${edu.color} p-4 text-white relative overflow-hidden`}>
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-white/10 rounded-full"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'ongoing'
                            ? 'bg-yellow-400 text-yellow-900'
                            : 'bg-green-400 text-green-900'
                        }`}
                      >
                        {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
                      </span>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{edu.score}</div>
                        <div className="text-xs opacity-90">{edu.scoreType}</div>
                      </div>
                    </div>
                    <h3 className="text-base font-bold leading-tight mb-2">{edu.degree}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.batch}
                    </div>
                  </div>
                </div>

                {/* Mobile Card Body - Compact Layout */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-200 text-sm leading-tight">{edu.institution}</h4>
                      <div className="flex items-center mt-1 text-xs text-gray-400">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  {edu.semester && (
                    <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                      <span className="text-xs text-gray-400">Current Status:</span>
                      <span className="text-sm font-medium text-violet-400">{edu.semester}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Academics,"academics");