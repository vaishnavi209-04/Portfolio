import { motion } from "framer-motion";

const FloatingBadge = ({ text, className, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default FloatingBadge;