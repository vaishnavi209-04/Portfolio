import { motion } from "framer-motion";

const FloatingTech = ({ text, className }) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`
        absolute
        rounded-2xl
        border
        border-white/10
        bg-white/10
        px-6
        py-4
        backdrop-blur-xl
        ${className}
      `}
    >
      {text}
    </motion.div>
    
  );
};



export default FloatingTech;