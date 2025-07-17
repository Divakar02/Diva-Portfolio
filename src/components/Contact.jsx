import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// General icons from lucide-react (non-deprecated)
import { 
  Mail, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';


// Brand icons from react-icons (Simple Icons)
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { SectionWrapper } from '../hoc';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using EmailJS to send emails directly from frontend
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'your-email@example.com'
      };

      // Load EmailJS library dynamically
      if (typeof window !== 'undefined' && !window.emailjs) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
          script.onload = resolve;
          document.head.appendChild(script);
        });
        
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }

      // Send email using EmailJS
      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const inputFields = [
    { name: 'name', label: 'Full Name', icon: User, type: 'text', autocomplete: 'name' },
    { name: 'email', label: 'Email Address', icon: Mail, type: 'email', autocomplete: 'email' },
    { name: 'subject', label: 'Subject', icon: MessageSquare, type: 'text', autocomplete: 'off' },
  ];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {inputFields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="relative">
            <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400 z-10" />
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
              autoComplete={field.autocomplete}
              required
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all duration-300"
              placeholder={field.label}
            />
            <motion.div
              initial={false}
              animate={{
                scale: focusedField === field.name ? 1.02 : 1,
                boxShadow: focusedField === field.name ? '0 0 20px rgba(6, 182, 212, 0.3)' : '0 0 0px rgba(6, 182, 212, 0)'
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-xl pointer-events-none"
            />
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-cyan-400 z-10" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            autoComplete="off"
            required
            rows={6}
            className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/70 transition-all duration-300 resize-none"
            placeholder="Your Message"
          />
          <motion.div
            initial={false}
            animate={{
              scale: focusedField === 'message' ? 1.02 : 1,
              boxShadow: focusedField === 'message' ? '0 0 20px rgba(6, 182, 212, 0.3)' : '0 0 0px rgba(6, 182, 212, 0)'
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-xl pointer-events-none"
          />
        </div>
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        <div className="relative flex items-center justify-center gap-3">
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </div>
      </motion.button>

      {/* Status Messages */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-3 p-4 rounded-xl ${
              submitStatus === 'success' 
                ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                : 'bg-red-500/20 border border-red-500/50 text-red-400'
            }`}
          >
            {submitStatus === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span>
              {submitStatus === 'success' 
                ? 'Message sent successfully! I\'ll get back to you soon.' 
                : 'Failed to send message. Please try again.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

const ContactInfo = () => {
    const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ejilandivakar@gmail.com',
      href: 'mailto:ejilandivakar@gmail.com',
      color: 'text-cyan-400'
    },
    
    {
      icon: MapPin,
      label: 'Location',
      value: 'Puducherry, India',
      href: 'https://www.google.com/maps/place/puducherry/data=!4m2!3m1!1s0x3a5361ab8e49cfcf:0xcc6bd326d2f0b04e?sa=X&ved=1t:155783&ictx=111',
      color: 'text-purple-400'
    }
  ];

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/divakar02', label: 'GitHub' },
    { icon: SiLinkedin, href: 'https://www.linkedin.com/in/divakar-ejilan-803658289', label: 'LinkedIn' },
    { icon: SiX, href: 'https://x.com/divakarejilan', label: 'X' },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <motion.a
            key={detail.label}
            href={detail.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
          >
            <div className={`p-3 bg-gray-700/50 rounded-lg ${detail.color} group-hover:bg-gray-600/50 transition-colors`}>
              <detail.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">{detail.label}</p>
              <p className="text-white font-medium">{detail.value}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-white text-sm font-medium">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-xl"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <div>
            <p className="text-green-400 font-medium">Available for opportunities</p>
            <p className="text-gray-300 text-sm">Usually responds within 24 hours</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen   to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.id * 0.2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Let's Connect
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you build something amazing together.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Send Message</h2>
            </div>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Info</h2>
            </div>
            <ContactInfo />
          </motion.div>
        </div>

      

      
      </div>
    </div>
  );
};

export default SectionWrapper(Contact,"contact");