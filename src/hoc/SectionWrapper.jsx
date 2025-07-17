// SectionWrapper.jsx
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        animate='show'
        viewport={{ once: true, amount: 0.25 }}
        className="w-full min-h-screen flex flex-col justify-center items-center relative z-0 px-4 sm:px-6 lg:px-8"
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <div className="w-full max-w-none">
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;