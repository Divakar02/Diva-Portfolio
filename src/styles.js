// styles.js
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6", 
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  
  // Enhanced hero text with better scaling
  heroHeadText: "font-black text-white text-[clamp(2.5rem,8vw,5rem)] lg:text-[60px] sm:text-[60px] xs:text-[50px] leading-[1.1] mt-2",
  heroSubText: "text-[#dfd9ff] font-medium text-[clamp(1rem,4vw,1.875rem)] lg:text-[30px] sm:text-[26px] xs:text-[20px] leading-[1.4]",
  
  // Enhanced section headers with perfect responsive scaling
  sectionHeadText: "text-white font-black text-[clamp(1.875rem,6vw,3.75rem)] md:text-[60px] sm:text-[50px] xs:text-[40px] leading-[1.2] text-center",
  sectionSubText: "text-[clamp(0.875rem,2.5vw,1.125rem)] sm:text-[18px] text-secondary uppercase tracking-wider text-center",
  
  // Full-width container styles
  fullSection: "w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8",
  fullContainer: "w-full max-w-7xl mx-auto",
  
  // Responsive padding for full-screen sections
  fullPadding: "py-16 sm:py-20 lg:py-24",
};

export { styles };