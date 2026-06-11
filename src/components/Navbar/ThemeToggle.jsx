import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-10 w-20 items-center rounded-full border p-1"
    >
      <motion.div
        animate={{
          x: darkMode ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
      >
        {darkMode ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;